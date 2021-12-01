const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass

//This route will respond with a list of all existing dish data.
//POST /dishes
//This route will save the dish and respond with the newly created dish.

router
  .route("/")
  .get(controller.listDish)
  .post(controller.createDish)
  .all(methodNotAllowed);

router
  .route("/:dishId")
  .get(controller.getDish)
  .put(controller.updateDish)
  .all(methodNotAllowed);

module.exports = router;
