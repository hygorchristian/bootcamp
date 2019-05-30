require('dotenv').config()

class DatabaseUtils {
  getConnectionUrl () {
    // const { DATABASE_URL, DATABASE_NAME } = process.env
    return 'mongodb+srv://omnistack:omnistack@cluster0-qxxpc.mongodb.net/omnistack?retryWrites=true'
    // return `mongodb://${DATABASE_URL}/${DATABASE_NAME}` // http://localhost:27017/mongonode
  }
}

module.exports = new DatabaseUtils()
