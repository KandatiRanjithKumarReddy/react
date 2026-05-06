import React from 'react'
import '../styles/LoadingSpinner.css'

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default LoadingSpinner
