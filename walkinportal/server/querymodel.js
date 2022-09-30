const Pool = require("pg").Pool;
const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "walk_in_portal",
  password: "root",
  port: 1124,
});
const getCardData = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM walk_in_details ORDER BY id ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const getRoleData = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM role_data ORDER BY role_id ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const getDescription = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM walk_in_role_data ORDER BY id ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const addWalkIn = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, title, start_date, end_date, location, role, intern, gpa } =
      body;
    pool.query(
      "INSERT INTO walk_in_details (id,title,start_date,end_date,location,role,intern,gpa) VALUES ($1, $2) RETURNING *",
      [id, title, start_date, end_date, location, role, intern, gpa],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`);
      }
    );
  });
};
const addRole = (body) => {
  return new Promise(function (resolve, reject) {
    const { roleId, role } = body;
    pool.query(
      "INSERT INTO role_data (roleId, role) VALUES ($1, $2) RETURNING *",
      [roleId, role],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`);
      }
    );
  });
};

module.exports = {
  getCardData,
  getRoleData,
  getDescription,
  addWalkIn,
  addRole,
};
