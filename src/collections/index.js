/* @flow */
import { merge } from 'lodash';

import Schema from './schema.graphql';
import playlistSchema from './playlists/playlist.schema.graphql';
import recordingSchema from './recording/recording.schema.graphql';
import sessionsSchema from './sessions/session.schema.graphql';
import userSchema from './users/users.schema.graphql';

import playlistResolvers from './playlists/playlists.resolvers';
import recordingResolvers from './recording/recording.resolvers';
import sessionResolvers from './sessions/sessions.resolvers';
import userResolvers from './users/users.resolvers';


export const GraphqlSchema = [
  Schema,
  userSchema,
  sessionsSchema,
  recordingSchema,
  playlistSchema,
];

export const resolvers = merge(
  playlistResolvers,
recordingResolvers,
sessionResolvers,
userResolvers);

