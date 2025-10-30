'use client'
import React, { useEffect } from 'react'

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.log('error is here', error)
  }, [error])
  return (
    <div>
      <h2>{error?.message}</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  )
}

export default Error
