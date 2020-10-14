// export default class FancyLogger {
//   constructor() {
//     this.logs = []
//   }

//   log(msg) {
//     this.logs.push(msg)
//     console.log(`FANCY: ${msg}`)
//   }

//   printLogCount() {
//     console.log(`${this.logs.length} logs`)
//   }
// }

// Singleton version
class FancyLogger {
  constructor() {
    if (!FancyLogger.intance) {
      this.logs = []
      FancyLogger.intance = this
    }

    return FancyLogger.intance
  }

  log(msg) {
    this.logs.push(msg)
    console.log(`FANCY: ${msg}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`)
  }
}

const logger = new FancyLogger()
Object.freeze(logger)

export default logger

