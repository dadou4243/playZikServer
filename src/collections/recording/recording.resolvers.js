import Recording from './recording.collection';

const recordingResolvers = {
  Query: {
    recording: () => Recording.findAll(),
  },
  Recording: {
    session: recording => recording.getSession(),
  },
};

export default recordingResolvers;
