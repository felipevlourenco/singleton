// import FancyLogger from './fancyLogger.js'
// const logger = new FancyLogger()

import logger from './fancyLogger.js'

export default function logSecondImplementation() {
  logger.printLogCount()
  logger.log('second file')
  logger.printLogCount()
}