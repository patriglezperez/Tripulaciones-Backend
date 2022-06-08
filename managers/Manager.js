const Client = require("../config/config");
module.exports = class Manager {
  static queries = {
    insert: "create",
    find: "findByPk",
    findAll: "findAll",
    findAllOf: "findAll",
    findName: "findOne",
    update: "update",
    delete: "destroy",
  };

  /*  static async executeQuery(model, query, params) {
    // (!) Erase once all models are definitive
    await model.sync({ alter: true });

    const sequelize = await Client.connect();
    return await sequelize
      .sync()
      .then(async () =>
        query === this.queries.findAll
          ? await model[query]()
          : await model[query](...params)
      )
      .then((res) => {
        if (query === this.queries.update) {
          return res[1].map((e) => e.dataValues);
        } else if (query === this.queries.findAll) {
          return res.map((e) => e.dataValues);
        }
        return res?.dataValues ? [res.dataValues] : [];
      })
      .catch((error) => {
        console.log("Query Error: ", query, error);
        return null;
      });
  } */
};
