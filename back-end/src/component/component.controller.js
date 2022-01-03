const service = require("./component.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (request, response) => 
  response.json({ data: await service.listComponents(request.app.get("db")) });

module.exports = {
  list: asyncErrorBoundary(list),

}
