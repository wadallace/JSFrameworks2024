import { useState } from 'react'

export default function Subscribe() {
  const [subStatus, setSubStatus] = useState(false)

  const toggleSubscription = () => setSubStatus(!subStatus)

  return (
    <>
      <button onClick={toggleSubscription}>
        {subStatus ? 'Unsubscribe' : 'Please Subscribe'}
      </button>
    </>
  )
}
