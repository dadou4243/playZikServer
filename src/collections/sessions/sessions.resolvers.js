import { Session } from 'express-session';
const sessionResolvers = {
  Query: {
    sessions: () => Session.findAll(),
  },
  Session: {
    owner: session => session.getUser(),
    playlists: session => session.getPlaylists(),
  },

};

export default sessionResolvers;
