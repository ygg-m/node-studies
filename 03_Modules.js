// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./03-1_Names")
const sayHi = require("./03-2_Utils")
const data = require("./03-3_Alternative-Export")

require("./03-4_Mind-Grenade") // this file have a function call so it will run once you require it

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)