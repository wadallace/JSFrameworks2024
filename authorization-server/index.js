/**
 * This is a quick and dirty mock server for authentication.
 * If plan on building authentication into a Node.js express app,
 * I suggest you look else where for inspiration.
 * Here are some resources on authentication:
 * - https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
 * - https://jcbaey.com/authentication-in-spa-reactjs-and-vuejs-the-right-way/?utm_source=medium&utm_campaign=spa-authentication
 * - https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id
 * - https://www.taniarascia.com/full-stack-cookies-localstorage-react-express/
 * - https://medium.com/@kennch/example-of-restful-apis-81fb344f9d04
 * - https://blog.logrocket.com/jwt-authentication-best-practices/
 */
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { v4: generateUuid } = require("uuid");
const parseCommandLineArgs = require("command-line-args");
const path = require("path");
const fs = require("fs");

const commandLineDef = [
  { name: "expiry", alias: "e", type: Number },
  { name: "port", alias: "p", type: Number },
];
const commandLineArgs = parseCommandLineArgs(commandLineDef);

const PORT = commandLineArgs.port || 3000;
const BASE_URL = "http://localhost:" + PORT;

// You should never hardcode this in your repo in the real world!
const JWT_SECRET = "SECRET_SAUCE";
const USER_ID = "1234";
const USERNAME = "username";
const PASSWORD = "password";

const fakeUsers = require("./fakeUsers.json");
const movies = require("./movies.json");
const googleFonts = require("./googleFonts.json");

// Normally, we would store this in a database session
let uuid;
const setCookie = (res) => {
  uuid = generateUuid();
  res.cookie("refresh", uuid, {
    maxAge: 3600000, // 1 hour
    httpOnly: true,
    secure: false, // Normally, we would want this to be true
  });
};

const sendTokenResponse = (res) => {
  setCookie(res);

  const JWT_EXPIRY_IN_MILLISECONDS = commandLineArgs.expiry || 900000; // 15 minutes by default
  const getJwtExpiryTimestamp = () => {
    const date = new Date();
    return date.getTime() + JWT_EXPIRY_IN_MILLISECONDS;
  };

  const token = jwt.sign({ sub: USER_ID }, JWT_SECRET, {
    expiresIn: `${JWT_EXPIRY_IN_MILLISECONDS}ms`,
  });

  return res.status(200).send({
    message: "You did it! Success!",
    token,
    expiry: getJwtExpiryTimestamp(),
  });
};

const validateJwt = (req, res) => {
  try {
    if (!uuid) throw new Error("ForbiddenError");
    const { authorization } = req.headers;
    if (!RegExp(/^Bearer /).test(authorization))
      throw new Error("ForbiddenError");
    const token = authorization.replace(/^Bearer /, "");
    const { sub: decodedUserId } = jwt.verify(token, JWT_SECRET);
    if (decodedUserId !== USER_ID) throw new Error("ForbiddenError");
  } catch (err) {
    return res.status(401).send({
      message:
        "Unauthorized. This means you are either missing your JWT token, your token has expired, or your token is not correct. Setup a header called 'Authorization' and set the value equal to 'Bearer mytoken'. If your token has expired, you need to get a new one with the '/api/refresh' API or by having the user login again.",
    });
  }
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Error handler
app.use((err, req, res, next) => {
  if (err.name === "SyntaxError") {
    return res.status(400).send({
      message: "Pst! Are you sending valid JSON? Double-check your request.",
    });
  }

  console.log(
    "Hey there. There could be a problem with your request or it could be that your instructors didn't write a fool-proof server. Check your request first. If you think it is OK, please copy and paste the stack trace below and send it your instructors."
  );
  console.error(err);
  console.log("\n");
  return res.status(500).send({
    message:
      "This is no fun. An unexpected error occurred that may be server related. Please take a look at the command line output.",
  });
});

const methodNotAllowedError = (req, res) => {
  return res.status(405).send({
    message: `Method Not Allowed. Take a look your method. Hint: it should NOT be ${req.method}.`,
  });
};

app
  .route("/api/login")
  .post((req, res) => {
    // Slowing down so that you can see if the button has been disabled
    setTimeout(() => {
      const { username = undefined, password = undefined } = req.body;

      if (!username || !password) {
        return res.status(400).send({
          message:
            "Pst! You are missing something in your request. Do you have a 'Content-Type' header and is it 'application/json?' Are you sending JSON? Is the username and password a part of the request?",
        });
      }

      if (username === USERNAME && password === PASSWORD) {
        return sendTokenResponse(res);
      }

      return res.status(401).send({
        message: "Unauthorized. Your username or password is incorrect.",
      });
    }, 500);
  })
  .all(methodNotAllowedError);

app
  .route("/api/refresh")
  .get((req, res) => {
    const isRefreshValid = (req) => {
      return req.cookies.refresh && req.cookies.refresh === uuid;
    };
    if (isRefreshValid(req)) return sendTokenResponse(res);
    else
      return res.status(401).send({
        message:
          "Unauthorized. This means that you do not have a session or your session expired. (Your session will be lost when you restart the authentication server). To renew your session, login with with the '/api/login' API.",
      });
  })
  .all(methodNotAllowedError);

app.route("/api/fonts").get((req, res) => {
  return res.send(googleFonts);
});

app
  .route(["/api/users", "/api/movies"])
  .get((req, res) => {
    const invalidResponse = validateJwt(req, res);
    if (invalidResponse) return invalidResponse;
    const paths = {
      "/api/users": fakeUsers,
      "/api/movies": movies,
    };
    const content = paths[req.originalUrl];
    return res.send(content);
  })
  .all(methodNotAllowedError);

app
  .route("/api/logout")
  .delete((req, res) => {
    uuid = undefined;
    res.clearCookie("refresh");
    return res.send({
      message: "Bye bye session. You have logged out.",
    });
  })
  .all(methodNotAllowedError);

app.all("*", (req, res) => {
  const readMe = fs.readFileSync(path.join(__dirname, "/README.md"), {
    encoding: "UTF-8",
  });
  return res.set("Content-Type", "text/markdown; charset=UTF-8").send(readMe);
});

app.listen(PORT, () => {
  console.log(`\nYour server is running on ${BASE_URL}/`);
  console.log(`Press ctrl+c to stop.\n`);
});
