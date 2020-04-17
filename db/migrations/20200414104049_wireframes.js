
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable("cluckrs", table => {
    
      table.string("username"); 
      table.string("imageUrl")
      table.text("content"); 
      table.increments("id"); 
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("cluckrs");
  };
  