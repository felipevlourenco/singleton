// import FancyLogger from './fancyLogger.js'
// const logger = new FancyLogger()

import logger from './fancyLogger.js'

export default function logFirstImplementation() {
  logger.printLogCount()
  logger.log('first file')
  logger.printLogCount()
}