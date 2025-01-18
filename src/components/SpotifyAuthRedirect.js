/* eslint-disable */
import { useEffect } from 'react';

const SpotifyAuthRedirect = () => {
  const clientId = '9718534f663a406389566df1c61e678d'; // Замени на свой Client ID
  const redirectUri = 'https://effervescent-liger-1f85e0.netlify.app/'; // Замени на свой Redirect URI
  const clientSecret = '10d858a3e2154467bc66ad591b6af458';

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const exchangeCodeForToken = async (authorizationCode) => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`, // Кодируем client_id и client_secret
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: authorizationCode,
            redirect_uri: redirectUri,
          }),
        });

        if (!response.ok) {
          throw new Error('Ошибка при обмене кода на токен');
        }

        const data = await response.json();
        console.log('Tokens received:', data);

        // Сохраняем токены в localStorage
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);

        // Убираем параметры из URL
        window.history.replaceState({}, document.title, redirectUri);
      } catch (err) {
        console.error('Ошибка авторизации:', err);
      }
    };

    if (code) {
      exchangeCodeForToken(code);
    } else if (!localStorage.getItem('accessToken')) {
      // Перенаправляем на авторизацию, если токен отсутствует
      const scopes = [
        'playlist-modify-public',
        'playlist-modify-private',
        'user-read-private',
      ];

      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&scope=${encodeURIComponent(scopes.join(' '))}`;

      window.location.href = authUrl;
    }
  }, []);

  return null; // Ничего не рендерим
};

export default SpotifyAuthRedirect;