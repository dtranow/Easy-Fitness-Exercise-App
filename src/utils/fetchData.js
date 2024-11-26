export const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_EXERCISE_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const ytOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_EXERCISE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};