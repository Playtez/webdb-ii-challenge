exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "5FNRL5H60EB115257",
          make: "toyota",
          model: "tacoma",
          mileage: 150000,
          automatic: true
        }
      ]);
    });
};
