/**
 * Replace <a> tags with React Router's <Link> component.
 * This will stop the page from refreshing when the user clicks on a link.
 */

// import something here
import { Link } from "react-router-dom";
import { inventory } from "../../assets/inventory";

function Home() {
  return (
    <div className="row">
      {Object.entries(inventory).map(([category, products]) => {
        const link = `/category/${category}`;
        return (
          <div className="col" key={`category-${category}`}>
            <h2 className="h3 mb-3">
              <Link to={link}>
                {category[0].toUpperCase() + category.substring(1)}
              </Link>
            </h2>
            <div className="card text-center">
              <Link to={link}>
                <img src={products[0].image} alt="" height={200} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
