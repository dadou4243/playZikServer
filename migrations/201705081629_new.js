module.exports.up = async (db) => {


  await db.schema.createTable('sessions', (table) => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('name', 250).notNullable();
    table.string('description');
    table.uuid('user_id').notNullable()
      .references('id').inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('createdAt').defaultTo(db.fn.now());
    table.timestamp('updatedAt').defaultTo(db.fn.now());
  });

  await db.schema.createTable('recordings', (table) => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('name', 250).notNullable();
    table.integer('length');
    table.specificType('youtube_urls', 'text[]');

    table.uuid('session_id').notNullable()
      .references('id').inTable('sessions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('createdAt').defaultTo(db.fn.now());
    table.timestamp('updatedAt').defaultTo(db.fn.now());
  });

  await db.schema.createTable('playlists', (table) => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('name', 250).notNullable();
    table.uuid('user_id').notNullable()
      .references('id').inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('createdAt').defaultTo(db.fn.now());
    table.timestamp('updatedAt').defaultTo(db.fn.now());
  });

  await db.schema.createTable('sessions_playlists', (table) => {
    table.uuid('playlist_id').references('id').inTable('playlists').onDelete('CASCADE');
    table.uuid('session_id').references('id').inTable('sessions').onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(db.fn.now());
    table.timestamp('updatedAt').defaultTo(db.fn.now());
  });
};

module.exports.down = async (db) => {
  db.schema.dropTableIfExists('recordings');
  db.schema.dropTableIfExists('sessions');
  db.schema.dropTableIfExists('playlists');
  db.schema.dropTableIfExists('session_playlists');
};

module.exports.configuration = { transaction: true };
