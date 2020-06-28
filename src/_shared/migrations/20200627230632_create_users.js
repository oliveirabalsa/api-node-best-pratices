/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf').notNullable();
  });
};

exports.down = function (knex) {
  knex.scheema.dropTable('users');
};
