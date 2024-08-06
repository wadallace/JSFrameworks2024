# Authentication Server - Authentication and Displaying Content

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the resources folder, install all dependencies, and start the server by typing in the commands down below.

```bash
cd authorization-server/
npm install --omit=dev
npm start
```

After running the server on your machine, you will be greeted with a message Your server is running on http://localhost:3000.

At any point, if you need to stop the server, press `ctrl+c` .

To do your assignments or run the _auth_ example, you will need to have two terminal windows open and running at once. If you are using Visual Studio Code, you can click on the split-screen or plus icon in your terminal panel:

![Split screen icon in Visual Studio code](two-terminals.png)

### Setting up a proxy with Vite.js

An AJAX request like this will work when you are developing your React app on your computer:

```js
axios.post(
  "http://localhost:3000/api/login"
  // Rest of code ...
);
```

However, this would not work if you were to share your project online with other people. That is because when you host your site (share your code with the world), the back-end server's URL is not going to start with _http://localhost:3000_ anymore. _localhost_ means "my machine". It's going to be a different domain name, like your own custom domain, _render.com_, _netlify.com_, or whatever you host your website on. If your front-end (React app) and back-end (this server) will have the same domain name, you can setup a _local proxy_ to get around this problem.

Update your _vite.config.ts_ or _vite.config.js_ file:

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  // Add this:
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

Now, when you make AJAX request, omit _http://localhost:3000_ like this:

```js
axios.post(
  "/api/login"
  // Rest of code ...
);
```

For more information, see https://vitejs.dev/config/server-options#server-proxy/

## API

The API is a REST based API. Here are the different endpoints:

| Endpoint                          | Method | Authorization | Request Body          | Response                                                                                                   |
| --------------------------------- | :----: | ------------- | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| http://localhost:3000/api/login   |  POST  | -             | username and password | Status 200 - Success - Returns JWT and JWT expiry<br><br>Status 401 - Invalid credentials                  |
| http://localhost:3000/api/movies  |  GET   | JWT           | -                     | Status 200 - Success - Returns a list of movies<br><br>Status 401 - Missing, invalid, or expired JWT       |
| http://localhost:3000/api/users   |  GET   | JWT           | -                     | Status 200 - Success - Returns a list of users<br><br>Status 401 - Missing, invalid, or expired JWT        |
| http://localhost:3000/api/fonts   |  GET   | -             | -                     | Status 200 - Success - Returns a list of Google fonts<br><br>Status 401 - Missing, invalid, or expired JWT |
| http://localhost:3000/api/logout  | DELETE | JWT           | -                     | Status 200 - Success                                                                                       |
| http://localhost:3000/api/refresh |  GET   | -             | -                     | Status 200 - Success - Returns JWT and JWT expiry<br><br>Status 401 - Usually need to login                |

### Logging in

To login, send the user's username and password in a POST request to http://localhost:3000/api/login. For example:

```js
try {
  const { data } = await axios.post(
    // If you don't proxy the URL, you would have to use
    // http://localhost:3000/api/login
    "/api/login",
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // This is how you get the access token
  console.log(data.token);
} catch (error) {
  if (error.response?.status === 401) {
    // Incorrect username or password
  }
}
```

The user credentials are literally:

Username: username \
Password: password

If the username and password is correct, you will get back the JWT token and the timestamp of when it will expire.

```json
{
  "message": "You did it! Success!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "expiry": 1616933211937
}
```

If the credentials are not correct, then you will receive an HTTP status of unauthorized (code 401).

### Getting a list of movies

You will send a GET request to http://localhost:3000/api/movies. You will need to include the JWT access token that you got from the login request inside of the Authorization header like this:

```js
try {
  const { data } = await axios.get(
    // If you don't proxy the URL, you would have to use
    // http://localhost:3000/api/movies
    "/api/movies",
    {
      headers: {
        // Do not hardcode. Replace token below
        // with what you get back from the login API
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
      },
    }
  );
  console.log(data);
} catch (error) {
  if (error.response?.status === 401) {
    // There is some problem with your authentication.
  }
}
```

If your request is successful, you will get a list of movies like this:

```json
{
  "halloween": {
    "title": "Halloween",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "synopsis": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    "releaseDate": "Oct 19, 2018",
    "times": ["11:50 AM", "1:20 PM"]
  }
  // ...
}
```

If there is some problem related to authentication (e.g. no authorization header, invalid JWT, or expired JWT), you will receive a status code of 401.

### Getting a list of fonts

You will send a GET request to http://localhost:3000/api/fonts. This API does not require authentication. If your request is successfully, you should see a response like this:

```json
{
  "fonts": [
    {
      "id": 1,
      "displayName": "Roboto",
      "fontFamily": "Roboto, serif",
      "stylesheet": "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    },
  // ...
}
```

### Logging out

To logout, send a delete request with your JWT to http://localhost:3000/api/logout. If it is successful, you will receive an HTTP status code of 200.

```js
try {
  await axios.deltee(
    // If you don't proxy the URL, you would have to use
    // http://localhost:3000/api/logout
    "/api/logout",
    {
      headers: {
        // Do not hardcode. Replace token below
        // with what you get back from the login API
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
      },
    }
  );
} catch (error) {
  // Display a message to the user that this failed
}
```

### Refreshing your JWT token

There are use cases where your JWT will be lost from state and you will need to get a new one. This happens when:

- the user refreshes the page
- the user opens a new tab
- the user types a new URL into the address bar
- the JWT token is about to expire

By using this end-point, you will be "relogging in" the user behind-the-scenes, without the user knowing that it is happening. This is called a "silent refresh".

To refresh the JWT token, send a GET request to http://localhost:3000/api/refresh.

```js
try {
  const { data } = await axios.get(
    // If you don't proxy the URL, you would have to use
    // http://localhost:3000/api/refresh
    "/api/refresh"
  );
  console.log(data.token); // New access token
} catch (error) {
  if (error.response?.status === 401) {
    // There is some problem with your authentication.
  }
}
```

The response will be the same as the http://localhost:3000/api/login endpoint. If the user is logged in on the back-end, and the authentication behind-the-scenes is valid (a session cookie with the httpOnly flag is automatically sent with each HTTP request without you having to do anything), then you will receive a new JWT token and expiration. Otherwise, you will receive a HTTP status code of 401. When this happens, you should redirect the user to the login form.

For an in-depth explaination of the silent refresh (and the whole authentication flow in general), see [The Ultimate Guide to handling JWTs on frontend clients (GraphQL)](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#silent_refresh).

Be careful with how you implement the silent refresh, because it is prone to infinite loops.

## Notes on Using this Server and the API

When you start or restart the server, any lingering JWT tokens will be invalid and the _/api/refresh_ end-point will not work. It is a good idea to delete your cookies in your browser's Dev Tools and refresh the screen after starting the server.

You can fake handling a server outage by stopping the server with `ctrl+c` .

You can speed up the JWT expiry by passing an expiry value in milliseconds with the start command. For example, to have the JWT token expire every 10 seconds (10,000 milliseconds), run `node . --expiry 10000`.

## Resources

- [Introduction to JSON Web Tokens](https://jwt.io/introduction)
- [The Ultimate Guide to handling JWTs on frontend clients (GraphQL)](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/)
- [Authentication in SPA (ReactJS and VueJS) the right way](https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3)
- [Handling JWT in Admin Apps the Right Way](https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html)
