const express = require("express");

const router = express.Router();

// Import the model (burgers.js) to use its database functions.
const brgr = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  brgr.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/brgrs", function(req, res) {
  brgr.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the new of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/brgrs/:id", function(req, res) {
  var condition = "id =" + req.params.id;
  console.log("condition", condition);

  console.log(req.body);

  brgr.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
  
});

router.delete("/api/brgrs/:id", (req, res) => {
  var condition = 'id = ' + req.body.id;

  brgr.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;