const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /orders routes needed to make the tests pass

// GET /orders
// This route will respond with a list of all existing order data.

// POST /orders
// This route will save the order and respond with the newly created order.

router
  .route("/")
  .get(controller.listOrder)
  .post(controller.createOrder)
  .all(methodNotAllowed);

router
  .route("/:orderId")
  .get(controller.getOrder)
  .put(controller.updateOrder)
  .delete(controller.deleteOrder)
  .all(methodNotAllowed);

module.exports = router;
