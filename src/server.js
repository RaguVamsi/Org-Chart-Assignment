import { createServer } from "miragejs"
import Add from "../src/Routes/Add"
import AliceLopez from "../src/asserts/AliceLopez.jpg"
import MarkHill from "../src/asserts/MarkHill.jpg"
import EricaReel from "../src/asserts/EricaReel.jpg"
import JoeLinux from "../src/asserts/JoeLinux.jpg"
import JohnGreen from "../src/asserts/JohnGreen.jpg"
import KirkDouglas from "../src/asserts/KirkDouglas.jpg"
import LindaMay from "../src/asserts/LindaMay.jpg"
import MaryJohnson from "../src/asserts/MaryJohnson.jpg"
import MichaelRubin from "../src/asserts/MichaelRubin.jpg"
import RonBlimquist from "../src/asserts/RonBlimquist.jpg"


let cards = [
  { id: 1,imgSrc:MarkHill, name: "Mark Hill", designation:"Cheif Executive", team:"Mark Hill" },
  { id: 2,imgSrc:JoeLinux, name: "Joe Linux", designation:"Cheif Technology Officer", team:"Joe Linux" },
  { id: 3,imgSrc:LindaMay, name: "Linda May", designation:"Cheif Business Officer", team:"Linda May" },
  { id: 4,imgSrc:JohnGreen, name: "John Green", designation:"Cheif Accounting Officer", team:"John Green" },
  { id: 5,imgSrc:RonBlimquist, name: "Ron Blomquist", designation:"Cheif Information Security Officer", team:"Joe Linux" },
  { id: 6,imgSrc:MichaelRubin, name: "Michael Rubin", designation:"Cheif Innovation Officer", team:"Joe Linux" },
  { id: 7,imgSrc:AliceLopez, name: "Alice Lopez", designation:"Cheif Communication Officer", team:"Linda May" },
  { id: 8,imgSrc:MaryJohnson, name: "Mary Johnson", designation:"Cheif Brand Officer", team:"Linda May" },
  { id: 9,imgSrc:KirkDouglas, name: "Kirk Douglas", designation:"Cheif Business Development Officer", team:"John Green"},
  { id: 10,imgSrc:EricaReel, name: "Erica Reel", designation:"Cheif Customer Officer", team:"John Green" },
]
createServer({
  routes() {
    this.namespace = "api"

    this.post("/cards", (schema, request)=>{
      let attrs = JSON.parse(request.requestBody)
      attrs.id = Math.floor(Math.random() * 100)
      cards.push(attrs)
      return {cards: attrs}
    })

    this.get("/cards", () => {
      return {
        cards
      }
    })
  },
})