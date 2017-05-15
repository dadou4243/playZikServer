import User from './user.collection';
const userResolvers = {
  Query: {
    users: limit => User.findAll({ limit }),
  },
  Mutation: {
    async createUser(root, input, context) {
      return User.create(input.params);
    },
  },
  User: {
    sessions: session => session.getSessions(),
    playlists: session => session.getPlaylists(),
  },

};


export default userResolvers;
