/* @flow */
import { Model, DataTypes } from 'sequelize';
import { Options, Attributes } from 'sequelize-decorators';

import db from '../../db';
import Session from '../sessions/sessions.collection';

@Options({
  sequelize: db,
  tableName: 'recordings',
})
@Attributes({
  name: DataTypes.STRING,
  length: DataTypes.INTEGER,
  youtube_urls: [DataTypes.STRING],
})
class Recording extends Model {

  static associate(models){
    Recording.belongsTo(models.Session);
  }
}




export default Recording;
