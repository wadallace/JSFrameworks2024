import { useState, useEffect } from "react";
import axios from "axios";
import { IUser, IPaginatedUsers } from "../../types/users";

type HomeProps = {
  token: string;
  logout: Function;
};

function Home({ token, logout }: HomeProps) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getUsers = async () => {
    setErrorMessage("");
    try {
      /**
       * The API should not give you back any users unless you are logged in.
       * To prove that you are logged in, you must pass the token in the API.
       */
      const { data } = await axios.get<IPaginatedUsers>(
        /**
         * If you don't proxy the URL, you would have to use
         * http://localhost:3000/api/login
         * @see authorization-server/README.md
         */
        "/api/users",
        {
          headers: {
            /**
             * Passing to the token to the API here, where it is a header.
             * The name of the header is "Authorization" and the value is "Bear mytoken".
             */
            Authorization: `Bearer ${token}`, // Try commenting me out and see what happens when no token is passed
          },
        }
      );
      setUsers(data.data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Oh no! An unexpected error occurred.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button
          type="button"
          className="btn btn-primary mb-2"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
      <p>
        Refresh the page. You should still be logged in and able to see this
        content below. This is because the token is stored in local storage and
        so it is not erased when the page refreshes.
      </p>
      {users.map((user) => {
        const key = `user-${user.id}`;
        const name = `${user.firstName} ${user.lastName}`;
        return (
          <div key={key}>
            <img src={user.avatar} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Home;
