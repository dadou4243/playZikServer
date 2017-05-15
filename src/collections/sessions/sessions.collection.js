/* @flow */
import { Sequelize, Model, DataTypes } from 'sequelize';
import { Options, Attributes } from 'sequelize-decorators';

import db from '../../db';
import User from '../users/user.collection';
import Playlist from '../playlists/playlists.collection'


@Options({
  sequelize: db,
  tableName: 'sessions',
})
@Attributes({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
})
class Session extends Model {

  static associate(models){

    Session.belongsTo(models.User);
    Session.belongsToMany(models.Playlist, { through: 'sessions_playlists' });

  }
}


export default Session;
