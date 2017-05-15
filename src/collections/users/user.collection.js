/* @flow */
import { Sequelize, Model, DataTypes } from 'sequelize';
import { Options, Attributes } from 'sequelize-decorators';

import db from '../../db';
import Session from '../sessions/sessions.collection';
import Playlist from '../playlists/playlists.collection';

@Options({
  sequelize: db,
  tableName: 'users',
})
@Attributes({
  email: DataTypes.STRING,
})
class User extends Model {


  static associate(models){

    User.hasMany(models.Session);
    User.hasMany(models.Playlist);
  }

  static setClaims(userId, provider, providerKey, claims) {
    return db.transaction(trx => Promise.all([
      trx.table('user_logins').insert({
        user_id: userId,
        name: provider,
        key: providerKey,
      }),
      ...claims.map(claim => trx.raw('SELECT EXISTS ?', trx.table('user_claims')
        .where({ user_id: userId, type: claim.type }))
        .then(x => x.rows[0].exists ? // eslint-disable-line no-confusing-arrow
          trx.table('user_claims')
            .where({ user_id: userId, type: claim.type })
            .update({ value: claim.value }) :
          trx.table('user_claims')
            .insert({ user_id: userId, type: claim.type, value: claim.value }))),
    ]));
  }
}


export default User;
