import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Fetch data from the Django backend when the component mounts
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => {
        // Handle the data received from the backend
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Rest of your component code...
}

export default MyComponent;
