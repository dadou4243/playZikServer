import User from './user.collection';
const userMutations = {
  Query: {
    users: limit => User.findAll({limit}),
  },
  User: {
    sessions: session => session.getSessions(),
    playlists: session => session.getPlaylists(),
  },

};



export default userMutations;
