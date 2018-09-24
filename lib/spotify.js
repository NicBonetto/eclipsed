export const separateArtistName = name => {
  return name.split(/[+]/g).join(' ');
};

export const findArtistId = (artistList, artistName) => {
  const artists = Array.values(artistList);
  for (const artist of artists) {
    if (artist.name === artistName) return artist.id;
  };
};

export const formatRelatedArtists = relatedList => {
  return relatedList.map(artist => {
   return { name: artist.name, image: artist.images[0].url };
  });
};