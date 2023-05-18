const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
const uptimeSeconds = Math.floor(os.uptime())
const uptimeMinutes = Math.floor(uptimeSeconds / 60)
const uptimeHours = Math.floor(uptimeMinutes / 60)
console.log(`The System Uptime is ${uptimeSeconds} seconds or ${uptimeMinutes} minutes or ${uptimeHours} hours`)

// current OS data
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)