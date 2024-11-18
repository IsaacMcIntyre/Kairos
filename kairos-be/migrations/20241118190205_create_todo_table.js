/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('todos', table => {
      table.increments('id').primary();  // Auto-incrementing primary key
      table.string('itemName').notNullable();  // Todo item name
      table.timestamp('creationTime').defaultTo(knex.fn.now()).notNullable();  // Timestamp when created
      table.boolean('ticked').defaultTo(false);  // Whether the todo is ticked
      table.timestamp('tickedTime').nullable();  // Timestamp when ticked
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('todos');
  };
  