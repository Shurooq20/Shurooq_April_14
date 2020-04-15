const express = require("express");
const knex = require("../db/client");

const router = express.Router();


router.get("/new", (request, response) => {
    response.render("cluckers/new");
  });
  

  router.post("/cluckers", (request, response) => {
    
 console.log(request.body)
    const {content, imageUrl } = request.body;
    console.log(content)
    const cluck = {content: content, imageUrl: imageUrl}
    knex("cluckrs")
      .insert(
      cluck
     )
      .returning("*")
      .then((cluckr) => {
       response.redirect(`/clucker/${cluckr[0].id}`);
     });
  });

  router.get("/", (request, response) => {
    knex("cluckrs")
      .orderBy("createdAt", "desc")
      .then((cluckrs) => {
        //   response.send(posts);
        response.render("cluckers/index", { cluckrs });
      });
  });

  router.get("/clucker/:id", (request, response) => {
    
    const id = request.params.id;
    knex("cluckrs")
      .where("id", id)
      .first()
      .then((cluck) => {
        console.log();
        if (cluck) {
          response.render("cluckers/show", { cluck });
        } else {
          response.redirect("/cluckers");
        }
      });
  });
  

  module.exports = router;