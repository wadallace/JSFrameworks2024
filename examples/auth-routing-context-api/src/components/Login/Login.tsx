import { useContext, useState, FormEvent } from "react";
import { AccessTokenContext } from "../../contexts/AccessTokenContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ILoginResponse {
  message: string;
  token?: string;
  expiry?: number;
}

function Login() {
  /**
   * Handling authentication
   */
  const { login } = useContext(AccessTokenContext);
  const navigate = useNavigate();

  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { data } = await axios.post<ILoginResponse>(
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
      /**
       * Needed for TypeScript. Checking that the token is there.
       */
      if (!data?.token) {
        throw new Error("Missing access token in login response");
      }
      /**
       * If login is successful,
       * getting the JWT token and expiry time from the response
       */
      login(data.token);
      /**
       * And redirecting to the home page
       */
      navigate("/home", { replace: true });
    } catch (error) {
      console.error(error);
      /**
       * If the response returns an HTTP status of 401 when logging in, this means that username or password is incorrect
       */
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setErrorMessage("Invalid username or password");
      } else setErrorMessage("We are sorry, unexpected error occurred.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <div className="row">
        <div className="col-md-6">
          <form
            className="form-inline mb-2"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-2">
              <label htmlFor="username" className="visually-hidden">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                aria-label="Username"
                className="form-control mr-3"
                required={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                aria-label="Password"
                className="form-control mr-3"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Login
            </button>
          </form>
          <p className="form-text">
            <small>
              The username is <em>username</em> and the password is{" "}
              <em>password</em>
            </small>
          </p>
          {isLoading && <p>Loading ...</p>}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
