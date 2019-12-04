const RPSApp = require("../src/RPSApp")
const {NgModule} = require("@angular/core")
const {BrowserModule} = require("@angular/platform-browser")
const {FormsModule} = require("@angular/forms")
const {platformBrowserDynamic} = require("@angular/platform-browser-dynamic")
const { UseCaseFactory } = require("rps")

require('reflect-metadata')

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
const document = dom.window.document

describe("play form", function () {
    describe("when the play use case tells the UI that the input is invalid", function () {
        it("tells the user that their input is invalid", function () {
            let domFixture = document.createElement("rps-app")
            domFixture.id = "hello test world!"
            document.querySelector("body").appendChild(domFixture)

            const requests = {
                play: function(p1, p2, ui){
                    ui.invalid()
                }
            }

            let RPSTestModule = NgModule({
                imports: [BrowserModule, FormsModule],
                declarations: [RPSApp],
                bootstrap: [RPSApp],
                providers: [{provide: UseCaseFactory, useValue: requests}]
            }).Class({
                constructor(){}
            })

            platformBrowserDynamic().bootstrapModule(RPSTestModule)

            document.querySelector("button").click()

            expect(domFixture.innerText).toContain("INVALID")
        })
    })
})
