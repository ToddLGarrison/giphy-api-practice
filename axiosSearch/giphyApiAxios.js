// import axios from 'axios';

// function searchGiphy(query, apiKey) {
//   // GIPHY API endpoint and parameters
//     const apiUrl = 'https://api.giphy.com/v1/gifs/trending';
//     const params = {
//         q: query,
//         api_key: apiKey,
//         limit: 10,
//     };

//   // Make the API request using Axios
//     return axios.get(apiUrl, { params })
//         .then((response) => {
//         const gifs = response.data.data;
//         const titles = gifs.map((gif) => gif.title);
//         return titles; // Return an array of titles
//     })
//         .catch((error) => {
//             console.error('Error fetching data:', error);
//             return [];
//     });
// }

// // Example usage
//     const apiKey = 'zG9o2WmVq2q0lySuGOstOjU4LZhmIn8H'; // Replace with your actual GIPHY API key
//     const query = 'cats';
//     searchGiphy(query, apiKey)
//     .then((titles) => {
//         console.log('GIF Titles:', titles);
//     })
//     .catch((error) => {
//         console.error('An error occurred:', error);
//     });

