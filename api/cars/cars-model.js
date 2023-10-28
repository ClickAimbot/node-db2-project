const db = require('../../data/db-config.js');

const getAll = () => {
  return db('cars');
}

const getById = async (id) => {
  return db('cars').where('id', id).first();
}

const getByVin = async (vin) => {
  return db('cars').where('vin', vin).first();
}

const create = async (car) => {
  return db('cars').insert(car)
    .then(([id]) => {
      return getById(id);
  })
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
}
