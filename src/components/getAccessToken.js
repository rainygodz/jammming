const clientId = '9718534f663a406389566df1c61e678d';
const clientSecret = '10d858a3e2154467bc66ad591b6af458';

const endpoint = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');
  body.append('client_id', clientId);
  body.append('client_secret', clientSecret);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: body.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Error:', error);
    throw new Error('Failed to fetch access token.');
  }

  const data = await response.json();

  return data.access_token;
};


export default getAccessToken;