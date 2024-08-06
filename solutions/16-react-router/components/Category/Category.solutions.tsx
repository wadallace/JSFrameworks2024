import { useParams } from "react-router-dom";
import inventory from "../../assets/inventory";

function Category() {
  /**
   * @see solutions/10-react-router/src/components/App/App.solutions.jsx
   * and look at this line of code:
   * `<Route exact path="/category/:category" component={Category} />`
   */
  const { category } = useParams();
  /**
   * Needed for TypeScript. Checks to see the category exists.
   * If it does not, it returns an error.
   */
  if (!category || !inventory.hasOwnProperty(category)) {
    return (
      <div>
        <h2 className="lead mb-4">CATEGORY NOT FOUND</h2>
      </div>
    );
  }
  /**
   * All the products in a category. To see how this works, take a look at
   * @see exercises/10-react-router/src/assets/inventory.js
   */
  const products = inventory[category];

  return (
    <div>
      <h2 className="lead mb-4">CATEGORY &gt; {category.toUpperCase()}</h2>
      <div className="row">
        {
          /**
           * This loops through all the products for a the selected category
           * and displays them on the screen.
           */
          products.map((product, index) => {
            return (
              <div className="col mb-4" key={`product-${index}`}>
                <img src={`/${product.image}`} alt="" className="mb-3" />
                <div>{product.description}</div>
                <strong>$ {product.price.toFixed(2)}</strong>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Category;
