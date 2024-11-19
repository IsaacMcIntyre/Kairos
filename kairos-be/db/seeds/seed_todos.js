/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('todos').del()  // Delete all existing rows to avoid duplicates
    .then(function () {
      return knex('todos').insert([
        {
          itemName: "Clean washing machine",
          creationTime: new Date("2024-03-17T03:24:00"),
          ticked: false,
        },
        {
          itemName: "Wash dishes",
          creationTime: new Date("2024-05-20T15:20:00"),
          ticked: false,
        },
        {
          itemName: "Hoover basement",
          creationTime: new Date("2024-05-20T15:22:24"),
          ticked: true,
          tickedTime: new Date("2024-05-20T15:20:00"),

        },
        {
          itemName: "Dynamic Timed",
          creationTime: new Date("2024-10-20T15:20:00"),
          ticked: false,
        },      ]);
    });
};

