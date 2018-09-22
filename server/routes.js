import Spotify from 'spotify-web-api-node';
import checkSchema from 'express-validator';
import * as validations from './validation';
import * as spotifyHelper from '../lib/spotify';

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

  app.get('/spotify/autocomplete', checkSchema(validations.spotifyAutocomplete), async (req, res) => {
    const suggestions = await spotify.searchArtists(`artist:${req.query.term}*`);
    res.json(suggestions);
  });

  app.get('/spotify/artist', checkSchema(validations.spotifyArtist), async (req, res) => {
    const artist = spotifyHelper.separateAristName(req.query.artist);
    try {
      const spotifyQuery = await spotify.searchArtists(artist);
      const found = spotifyQuery.body.artists.items.filter(data => {
        if (data.name === artist) return data;
      });
      res.json(found);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  app.get('/spotify/:artist/songs', checkSchema(validations.spotifySongs), async (req, res) => {
    const artist = spotifyHelper.separateAristName(req.params.artist);
    try {
      const spotifyQuery = await spotify.searchTracks(`artist:${artist}`);
      const songItems = spotifyQuery.body.tracks.items;
      const songList = [
        { name: songList[0].name, href: songList[0].preview_url },
        { name: songList[1].name, href: songList[1].preview_url },
        { name: songList[2].name, href: songList[2].preview_url }
      ];
      res.json(songList);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
};