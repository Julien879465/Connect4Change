const models = require("../models");

const browse = (req, res) => {
  models.phone
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.phone
    .findPhone(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const phone = req.body;

  // TODO validations (length, format...)

  phone.id = parseInt(req.params.id, 10);

  models.phone
    .update(phone)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const screenSize = parseInt(req.body.screenSize, 10);
  const ram = parseInt(req.body.ram, 10);
  const storage = parseInt(req.body.storage, 10);
  const antutuIndice = parseInt(req.body.antutuIndice, 10);
  const { brand, model, network, androidSystem, url } = req.body;

  const phone = {
    brand,
    model,
    network,
    screenSize,
    androidSystem,
    antutuIndice,
    ram,
    storage,
    url,
  };

  // TODO validations (length, format...)

  models.phone
    .insert(phone)
    .then(([result]) => {
      res.status(201).send({ idphone: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.phone
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
