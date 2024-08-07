/**
 * This same component will be used for every category (food, clothing and office).
 * Right now, it is hardcoded to display office supplies.
 * Change this so that it will display products for the correct category.
 */

// import something here

import { useParams } from 'react-router-dom'
import { inventory } from '../../../public/inventory'

/**
 * This imports a list of products.
 */
import { IInventory } from '../../../public/inventory'

function Category() {
  const { categoryId } = useParams()
  /**
   * Category is hardcoded here.
   * This is the only part you will need to change in this file.
   */
  // change me
  /**
   * You will need to some kind of check to make sure the product exists.
   * If it doesn't, display an error message.
   */

  /**
   * All the products in a category. To see how this works, take a look at
   * @see exercises/10-react-router/src/assets/inventory.js
   */
  const products = inventory[categoryId as string]

  if (!products || !inventory) {
    return <div>No products found</div>
  }

  return (
    <div>
      <h2 className='lead mb-4'>CATEGORY &gt; {categoryId?.toUpperCase()}</h2>
      <div className='row'>
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
            )
          })
        }
      </div>
    </div>
  )
}

export default Category
