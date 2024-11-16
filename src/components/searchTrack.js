import getAccessToken from "./getAccessToken";

const endpoint = 'https://api.spotify.com/v1/search?';
let accessToken;
let expiresIn;

getAccessToken()
  .then((token, expires) => {
    accessToken = token;
    expiresIn = expires;
  })
  .catch((error) => console.log(error));

const searchTrack = async (searchQuerry) => {
  if (searchQuerry.length === 0) return;

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