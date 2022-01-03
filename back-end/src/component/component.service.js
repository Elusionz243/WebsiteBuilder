const listComponents = (knex) => knex("components").select("*");

module.exports = {
  listComponents,
}
