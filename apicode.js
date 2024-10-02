const apiKey = 'ecdddc8da7msh295aaa9d15fba2cp11f08djsnbe81649df339';  // Replace with your actual API key
const apiUrl = 'https://rapidapi.com/';  // Replace with the actual API endpoint

// Fetch data from the API
fetch(apiUrl, {
  method: 'GET',  // HTTP method (GET, POST, etc.)
  headers: {
    'Content-Type': 'application/json',  // The type of data expected from the API
    'Authorization': `Bearer ${apiKey}`  // Authorization header with API key
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();  // Parse the JSON response
})
.then(data => {
  console.log('Data fetched from API:', data);  // Handle the data
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);  // Handle errors
});
