import { connect } from 'mongoose'

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI)
    console.log('connected to database...')
  } catch (error) {
    console.log('DB connection error: ' + error.message)
  }
}

export default connectDB
