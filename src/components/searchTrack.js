const searchTrack = async (searchQuerry, accessToken) => {
  if (searchQuerry.length === 0) return;
  
  const endpoint = 'https://api.spotify.com/v1/search?'
  const url = endpoint + `q=${searchQuerry}&type=track&limit=9`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Error:', error);
    throw new Error('Failed to fetch access token.');
  }

  const data = await response.json();
  const searchResults = data.tracks.items;

  return searchResults !== undefined? searchResults : [];
};

export default searchTrack;