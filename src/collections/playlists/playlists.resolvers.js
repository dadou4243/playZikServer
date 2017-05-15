import Playlist from './playlists.collection';

const playlistResolvers = {
  Query: {
    playlists: () => Playlist.findAll(),
  },
  Playlist: {
    owner: playlist => playlist.getUser(),
  },

};

export default playlistResolvers;
