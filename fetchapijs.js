// URL of the API endpoint
const apiUrl = 'https://rapidapi.com/';

// Function to fetch data
async function fetchData() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET', // or 'POST', 'PUT', etc., depending on the API method
      headers: {
        'Content-Type': 'application/json',
        // You may need to include authorization headers or other API keys if required:
        'Authorization': '/ecdddc8da7msh295aaa9d15fba2cp11f08djsnbe81649df339'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    const data = await response.json();    // Parse JSON from response
    console.log(data);                     // Log the data to the console
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Call the function
fetchData();
