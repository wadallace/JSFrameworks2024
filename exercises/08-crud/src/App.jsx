// Import something here
import './App.css'
import { useState } from 'react'

const GroceryList = () => {
  const [groceryItem, setGroceryItem] = useState('')
  const [cost, setCost] = useState('')
  const [error, setError] = useState(false)
  const [groceryList, setGroceryList] = useState([])
  const [totalCost, setTotalCost] = useState(0)

  const addItem = () => {
    const newItem = { groceryItem: groceryItem, cost: parseFloat(cost) }
    setGroceryList([...groceryList, newItem])
    return newItem
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cost && groceryItem) {
      const newItem = addItem()
      addTotalCost(newItem)
      setGroceryItem('')
      setCost('')
      setError(false)

      // Call this after adding the item
    } else {
      setError(true)
    }
  }
  const clearList = () => {
    setGroceryList([])
    setTotalCost(0)
  }

  const removeItem = (index) => {
    const itemToRemove = groceryList[index]
    setGroceryList((prevGroceryList) =>
      prevGroceryList.filter((_, item) => item !== index)
    )
    setTotalCost((prevTotal) => prevTotal - itemToRemove.cost)
  }

  const addTotalCost = (newItem) => {
    setTotalCost((prevTotal) => prevTotal + newItem.cost)
  }

  return (
    <div className='container'>
      <div className='card card-body bg-light mb-2'>
        <form
          method='POST'
          className='row g-3'
          onSubmit={handleSubmit}
        >
          <div className='col'>
            <input
              className={
                error && !groceryItem
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              type='text'
              placeholder='Name of grocery item...'
              aria-label='Name of grocery item...'
              value={groceryItem}
              onChange={(e) => setGroceryItem(e.target.value)}
            />
            {error && (
              <div className='invalid-feedback'>
                Please enter a grocery item.
              </div>
            )}
          </div>
          <div className='col'>
            <input
              className={
                error && !cost ? 'form-control is-invalid' : 'form-control'
              }
              type='number'
              min='0'
              step='.01'
              placeholder='Cost of grocery item...'
              aria-label='Cost of grocery item...'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            {error && (
              <div className='invalid-feedback'>Please enter a cost.</div>
            )}
          </div>
          <div className='col-md-auto'>
            <button
              type='submit'
              className='btn btn-success'
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className='card card-body border-white'>
        <h1 className='h4'>Grocery List</h1>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             *
             */}
            {groceryList.map((item, index) => (
              <tr key={`grocery-${index}`}>
                <td>{item.groceryItem}</td>
                <td>${item.cost}</td>
                <td>
                  <button
                    aria-label='Delete'
                    title='Delete'
                    type='button'
                    onClick={() => removeItem(index)}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='lead'>
          <strong>Total Cost: ${totalCost.toFixed(2)}</strong>
        </p>
        <div className='d-flex justify-content-end'>
          <button
            type='button'
            className='btn btn-outline-success'
            onClick={clearList}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default GroceryList
