const { sequelize } = require("../../src/app/models");

module.exports = () => {
  /**
   * Truncate all the tables to clear the database before each test,
   * avoiding errors like unique fields
   */
  return Promise.all(
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};
