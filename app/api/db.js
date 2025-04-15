import axios from 'axios';

const BIN_ID = '67fe02608561e97a50ffc3eb';
const API_KEY = '$2a$10$8VhVUVUjya9yTXul1nuGQewX8o2ARF5m5flcdRgOMvuto0li8eA3.';
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export async function getDb() {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'X-Master-Key': API_KEY,
      },
      timeout: 5000,
    });
    return { data: response.data.record };
  } catch (error) {
    console.error(
      'getDb error:',
      error.response?.status,
      error.response?.data || error.message,
    );
    throw new Error('Failed to fetch data from JSONBin');
  }
}

export async function saveDb(data) {
  try {
    await axios.put(BASE_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
      timeout: 5000,
    });
  } catch (error) {
    console.error('saveDb error:', error.message);
    throw new Error('Failed to save data to JSONBin');
  }
}
