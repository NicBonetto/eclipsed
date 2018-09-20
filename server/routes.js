import Spotify from 'spotify-web-api-node';

const spotify = new Spotify({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

export default app => {
  app.get('/auth/spotify', async (req, res) => {
    try {
      const authData = await spotify.clientCredentialsGrant();
      spotify.setAccessToken(authData.body['access_token']);
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(401);
    }
  });

  app.get('/spotify/autocomplete', async (req, res) => {
    const suggestions = await spotify.searchArtists(`artist:${req.query.term}*`);
    res.json(suggestions);
  });
};