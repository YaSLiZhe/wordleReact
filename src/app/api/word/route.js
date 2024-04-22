// src/app/api/word/route.js
import fs from 'fs';
import path from 'path';

export async function GET(req) {
  try {
    // Define the path to the text file
    const filePath = path.join(process.cwd(), 'public', 'wordle-bank.txt');

    // Read the file data asynchronously
    const data = await fs.promises.readFile(filePath, 'utf8');

    // Split data into an array of words
    const words = data.split('\n').filter((line) => line.trim() !== '');
    console.log(words);
    // Create a NextResponse object to send a JSON response containing the words
    return new Response(JSON.stringify({ words }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    // Log the error to the console for debugging
    console.error(err);

    // Create a Response object to send a server error status if something goes wrong
    return new Response(JSON.stringify({ error: 'Failed to read file' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
