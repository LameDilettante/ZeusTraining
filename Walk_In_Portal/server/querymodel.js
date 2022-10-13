const Pool = require("pg").Pool;
const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "walk_in_portal",
  password: "root",
  port: 1124,
});

// "SELECT * FROM walk_in_details"

const getCardData = (req, res) => {
  pool.query(
    //"SELECT walk_in_details.id, walk_in_details.start_date, walk_in_details.end_date, walk_in_details.loaction, walk_in_roles.role walk_in_details.intern FROM walk_in_details INNER JOIN walk_in_details ON walk_in_details.id = walk_in_roles.id",
    "SELECT * FROM walk_in_details ",
    (error, results) => {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(results.rows);
    }
  );
};

const getRoleData = (req, res) => {
  pool.query(
    "SELECT * FROM role_data ORDER BY role_id ASC",
    (error, results) => {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(results.rows);
    }
  );
};

const getWalkInRoles = (req, res) => {
  pool.query("SELECT * FROM walk_in_roles", (error, results) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send(results.rows);
  });
};

const getDescription = (req, res) => {
  pool.query(
    "SELECT * FROM walk_in_role_data ORDER BY id ASC",
    (error, results) => {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(results.rows);
    }
  );
};

// const addWalkIn = (body) => {
//   return new Promise(function (resolve, reject) {
//     const { id, title, start_date, end_date, location, role, intern, gpa } =
//       body;
//     pool.query(
//       "INSERT INTO walk_in_details (id,title,start_date,end_date,location,role,intern,gpa) VALUES ($1, $2) RETURNING *",
//       [id, title, start_date, end_date, location, role, intern, gpa],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(`A new merchant has been added added: ${results.rows[0]}`);
//       }
//     );
//   });
// };
// const addRole = (body) => {
//   return new Promise(function (resolve, reject) {
//     const { roleId, role } = body;
//     pool.query(
//       "INSERT INTO role_data (roleId, role) VALUES ($1, $2) RETURNING *",
//       [roleId, role],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(`A new merchant has been added added: ${results.rows[0]}`);
//       }
//     );
//   });
// };

module.exports = {
  getCardData,
  getRoleData,
  getWalkInRoles,
  getDescription,
};
