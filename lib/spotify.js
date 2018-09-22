export const separateAristName = name => {
  return name.split(/[+]g/).join(' ');
};

export const findArtistId = (artistList, artistName) => {
  const artists = Array.values(artistList);
  return artists.filter(artistData => {
    if (artistData.name === artistName) return artistData.id;
  });
};