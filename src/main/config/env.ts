export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/esk-clean-node-api',
  port: process.env.PORT || 8088,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
