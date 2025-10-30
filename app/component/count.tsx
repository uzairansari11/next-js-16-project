import React from 'react'

type CountProps = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const Count: React.FC<CountProps> = ({ count, setCount }) => {
  console.log('hello world from count only', 0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default Count
