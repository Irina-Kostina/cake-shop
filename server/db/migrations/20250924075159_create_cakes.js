export function up(knex) {
  return knex.schema.createTable('cakes', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('slug').notNullable()
    table.string('image').notNullable()
    table.string('category').notNullable()
    table.float('price').notNullable()

    // Complex fields stored as JSON text
    table.text('sizes').notNullable()       // JSON array of sizes
    table.text('components').notNullable()  // JSON array
    table.text('allergens').notNullable()   // JSON array
    table.string('storage').notNullable()
    table.string('expiry').notNullable()
    table.text('rating').notNullable()      // JSON { average, reviewsCount }
  })
}

export function down(knex) {
  return knex.schema.dropTable('cakes')
}
