/**
 * This same component will be used for every category (food, clothing and office).
 * Right now, it is hardcoded to display office supplies.
 * Change this so that it will display products for the correct category.
 */

// import something here

/**
 * This imports a list of products.
 */
import { inventory } from "../../assets/inventory";

function Category() {
  /**
   * Category is hardcoded here.
   * This is the only part you will need to change in this file.
   */
  const category = "office"; // change me
  /**
   * You will need to some kind of check to make sure the product exists.
   * If it doesn't, display an error message.
   */

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
                <img src={product.image} alt="" className="mb-3" />
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
