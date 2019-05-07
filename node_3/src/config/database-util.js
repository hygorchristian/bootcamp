require('dotenv').config()

class DatabaseUtils {
  getConnectionUrl () {
    const { DATABASE_URL, DATABASE_NAME } = process.env
    return `mongodb://${DATABASE_URL}/${DATABASE_NAME}` // http://localhost:27017/mongonode
  }
}

module.exports = new DatabaseUtils()
