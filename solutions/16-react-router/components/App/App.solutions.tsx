import { Routes, Route } from "react-router-dom";

/**
 * You will be setting up your routes in this file.
 *
 * You can use ./src/components/App/App.jsx as an example here:
 * @see https://codesandbox.io/s/react-router-v52-l8w48?file=/src/components/App/App.jsx
 *
 * You can also use this as a resource:
 * @see https://reactrouter.com/web/guides/quick-start
 *
 * First, you will need to import the packages you need from React Router.
 * Then, import some things from React Router.
 */
import Home from "../Home/Home";
import Category from "../Category/Category";

function App() {
  /**
   * Next, you will need to setup your routes here.
   * YOU SHOULD ONLY USE <Route> TWICE.
   *
   * - "/" should map to "Home"
   * - "/category/food" should map to "Category"
   * - "/category/clothing" should map to "Category"
   * - "/category/office" should map to "Category"
   */
  return (
    <>
      <div className="bg-success text-white pt-1 pb-1 mb-3">
        <h1 className="container h2">NoName E-Commerce</h1>
      </div>
      <main className="container mb-4">
        <Routes>
          {/* The ":category" is essentially a variable, which can be food, clothing or office */}
          <Route path="/category/:category" element={<Category />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
