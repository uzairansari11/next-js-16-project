import React from 'react'

type CountProps = {
  count1: number
  setCount1: React.Dispatch<React.SetStateAction<number>>
}

const Count1: React.FC<CountProps> = ({ count1, setCount1 }) => {
  console.log('hello world from count1', 1)
  return (
    <div>
      <p>{count1}</p>
      <button onClick={() => setCount1((prev) => prev + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default Count1
