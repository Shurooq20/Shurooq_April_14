const express = require("express");
const knex = require("../db/client");

const router = express.Router();


router.get("/cluckers/new", (request, response) => {
    response.render("cluckers/new");
  });
  

  router.post("/cluckers", (request, response) => {
    
    const {content, imageUrl } = request.body;

    const cluck = {content: content, imageUrl: imageUrl}
    knex("cluckrs")
      .insert(
      cluck
     )
      .returning("*")
      .then((cluckrs) => {
       response.redirect(`/clucker/${cluckrs[0].id}`);
     });
  });

  router.get("/cluckers", (request, response) => {
    knex("cluckrs")
      .orderBy("createdAt", "desc")
      .then((cluckrs) => {
    
        response.render("cluckers/index", { cluckrs });
      });
  });
  router.get("/", (request, response) => {
     response.redirect("/cluckers")
  })

  router.get("/clucker/:id", (request, response) => {
    
    const id = request.params.id;
    knex("cluckrs")
      .where("id", id)
      .first()
      .then((cluckrs) => {
        if (cluckrs) {
          response.render("cluckers/show", { cluckrs });
        } else {
          response.redirect("/cluckers");
        }
      });
  });
  

  module.exports = router;