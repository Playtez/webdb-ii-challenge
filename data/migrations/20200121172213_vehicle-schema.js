exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin", 128)
      .unique()
      .notNullable();
    tbl.string("make", 40).notNullable();
    tbl.string("model", 40).notNullable();
    tbl.integer("mileage", 40);
    tbl.string("title", 40);
    tbl.boolean("automatic").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
