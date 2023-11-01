module.exports = {
  "dbName": process.env.DB_DATABASE,
  "dbConfig": {
    "server": process.env.DB_SERVER,
    "options": {
      "port": 1433,
      "trustServerCertificate": true,
      "ssl": process.env.DB_ENCRYPT === 'true'
    },
    "authentication": {
      "type": "default",
      "options": {
        "userName": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD
      }
    }
  }
};