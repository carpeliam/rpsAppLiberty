require('reflect-metadata')

const {Component} = require("@angular/core")

const RPSApp = Component({
    selector: "rps-app",
    template: `<div>Hello world! <button></button></div>`
}).Class({
    constructor: () => {}
})

module.exports = RPSApp