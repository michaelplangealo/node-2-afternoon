// controllers for endpoints, will respond with appropriate action depending on endpoint

module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { name, description, price, imageurl } = req.body;

    dbInstance
      .create_product([name, description, price, imageurl])
      .then(() => res.status(200).send())
      .catch(err => console.log(err));
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_product([req.params.id])
      .then(product => res.status(200).send(product))
      .catch(err => console.log(err));
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(product => res.status(200).send(product))
      .catch(err => console.log(err));
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .update_product([req.params.id, req.query.desc])
      .then(product => res.status(200).send())
      .catch(err => console.log(err));
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .delete_product([req.params.id])
      .then(() => res.status(200).send())
      .catch(err => console.log(err));
  }
};
