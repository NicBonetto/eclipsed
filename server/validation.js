export const spotifyAutocomplete = {
  term: {
    in: ['query'],
    isString: true,
    optional: false,
    errorMessage: 'term is required and must be a string'
  }
};

export const spotifyArtist = {
  artist: {
    in: ['query'],
    isString: true,
    optional: false,
    errorMessage: 'artist is required and must be a string'
  }
};

export const spotifySongs = {
  artist: {
    in: ['params'],
    isString: true,
    optional: false,
    errorMessage: 'artist is required and must be a string'
  }
};

export const spotifyRelatedArtists = {
  artist: {
    in: ['params'],
    isString: true,
    optional: false,
    errorMessage: 'artist is required and must be a string'
  }
};