import React from 'react'
import "../components/chart.css"
import MarkHill from "../asserts/MarkHill.jpg"
import AliceLopez from "../asserts/AliceLopez.jpg"
import EricaReel from "../asserts/EricaReel.jpg"
import JoeLinux from "../asserts/JoeLinux.jpg"
import JohnGreen from "../asserts/JohnGreen.jpg"
import KirkDouglas from "../asserts/KirkDouglas.jpg"
import LindaMay from "../asserts/LindaMay.jpg"
import MaryJohnson from "../asserts/MaryJohnson.jpg"
import MichaelRubin from "../asserts/MichaelRubin.jpg"
import RonBlimquist from "../asserts/RonBlimquist.jpg"

const chart = () => {
  return (
    <div class="container6">
    <div class="row">
      <div class="tree">
        <ul>
          <li> <a href="#"><img src={MarkHill}/><span>MarkHill</span></a>
          <ul>
            <li><a href="#"><img src={JoeLinux}/><span>JoeLinux</span></a>
            <ul>
              <li> <a href="#"><img src={RonBlimquist}/><span>RonBlimquist</span></a> </li>
              <li> <a href="#"><img src={MichaelRubin}/><span>MichaelRubin</span></a> </li>
            </ul>
          </li>
          <li> <a href="#"><img src={LindaMay}/><span>LindaMay</span></a>
          <ul>
            <li> <a href="#"><img src={AliceLopez}/><span>AliceLopez</span></a> </li>
            <li> <a href="#"><img src={MaryJohnson}/><span>MaryJohnson</span></a> </li>
            <li> <a href="#"><img src={KirkDouglas}/><span>KirkDouglas</span></a> </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
</div>
</div>
  )
}

export default chart