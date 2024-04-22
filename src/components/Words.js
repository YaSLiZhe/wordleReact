export const boardDefault = Array(6)
  .fill()
  .map(() => Array(5).fill(''));

export const generateWordSet = async () => {
  try {
    // Fetch data from your local API endpoint
    const response = await fetch('http://localhost:3000/api/word');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    // Assuming the API returns JSON data with an array of words
    const data = await response.json();

    // Initialize a Set with the words array; assuming the data structure is { words: [] }
    const wordSet = new Set(data.words);

    return { wordSet };
  } catch (error) {
    // Log the error and handle it appropriately
    console.error('Error fetching word set:', error);
    return { wordSet: new Set() }; // Return an empty set in case of error
  }
};
