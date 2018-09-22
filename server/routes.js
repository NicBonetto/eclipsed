import dotenv from 'dotenv';
import Spotify from 'spotify-web-api-node';
import { checkSchema, validationResult } from 'express-validator/check';
import * as validations from './validation';
import * as spotifyHelper from '../lib/spotify';

dotenv.config();

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
      return res.sendStatus(200);
    } catch (e) {
      console.log(e);
      return res.sendStatus(401);
    }
  });

  app.get('/spotify/autocomplete', checkSchema(validations.spotifyAutocomplete), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json(errors.array());
    }
    const suggestions = await spotify.searchArtists(`artist:${req.query.term}*`);
    return res.json(suggestions);
  });

  app.get('/spotify/artist', checkSchema(validations.spotifyArtist), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json(errors.array());
    }
    try {
      const artist = spotifyHelper.separateArtistName(req.query.artist);      
      const spotifyQuery = await spotify.searchArtists(artist);
      const found = spotifyQuery.body.artists.items.filter(data => {
        if (data.name === artist) return data;
      });
      return res.json(found);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  });

  app.get('/spotify/:artist/songs', checkSchema(validations.spotifySongs), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json(errors.array());
    }
    try {
      const artist = spotifyHelper.separateArtistName(req.params.artist);      
      const spotifyQuery = await spotify.searchTracks(`artist:${artist}`);
      const songItems = spotifyQuery.body.tracks.items;
      const songList = [
        { name: songItems[0].name, href: songItems[0].preview_url },
        { name: songItems[1].name, href: songItems[1].preview_url },
        { name: songItems[2].name, href: songItems[2].preview_url }
      ];
      return res.json(songList);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  });

  app.get('/spotify/related/:artist', checkSchema(validations.spotifyRelatedArtists), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json(errors.array());
    }
    try {
      const artist = spotifyHelper.separateArtistName(req.params.artist);
      const spotifyArtistQuery = await spotify.searchArtists(artist);
      const artistId = spotifyHelper.findArtistId(spotifyArtistQuery.body.artists.items, artist);
      const spotifyRelatedQuery = await spotify.getArtistRelatedArtists(artistId);
      const relatedArtists = spotifyHelper.formatRelatedArtists(spotifyRelatedQuery.body.artists);
      return res.json(relatedArtists);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  });
};