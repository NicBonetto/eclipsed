export const spotifyAutocomplete = {
  term: {
    in: ['query'],
    isString: true,
    errorMessage: 'term is required and must be a string'
  }
};

export const spotifyArtist = {
  artist: {
    in: ['query'],
    isString: true,
    errorMessage: 'artist is required and must be a string'
  }
};

export const spotifySongs = {
  artist: {
    in: ['params'],
    isString: true,
    errorMessage: 'artist is required and must be a string'
  }
};