/* @flow */
import { Model, DataTypes } from 'sequelize';
import { Options, Attributes } from 'sequelize-decorators';

import db from '../../db';
import Session from '../sessions/sessions.collection';
import User from '../users/user.collection';

@Options({
  sequelize: db,
  tableName: 'recordings',
})
@Attributes({
  name: DataTypes.STRING,
})
class Playlist extends Model {

  static associate(models){
    Playlist.belongsTo(models.User);
    Playlist.belongsToMany(models.Session, { through: 'sessions_playlists' });
  }
}




export default Playlist;
