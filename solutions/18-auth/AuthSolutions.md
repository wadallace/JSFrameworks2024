# Solutions to Authentication Exercise

See the [Authentication Example](../../examples/auth/). The solution is exactly the same, except you will use the Movies API instead of the Users API. For example:

```ts
// src/components/Home/Home.tsx
import { IMovie } from "../../types/movies";

// ...

const getMovies = async () => {
  setErrorMessage("");
  try {
    const { data } = await axios.get<IMovie>("/api/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMovies(data);
  } catch (error) {
    console.error(error);
    setErrorMessage("Oh no! An unexpected error occurred.");
  }
};

useEffect(() => {
  getMovies();
}, []);
```
