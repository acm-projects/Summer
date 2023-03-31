import Hero from "../components/Hero";
import Line from "../components/Line";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bubbles from '../assets/Bubbles.png'
import CheckCircle from '../assets/CheckCircle.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import Gradient from '../assets/Gradient.png'


import LineCircle from '../assets/LineCircle.png'


import React from 'react';

import './styles/Library.css';

function Library() {
  return (
   
    <div className="Library">

    <header>
    <div className = "headtext">
      <div className = "head-image">
        <img src = {Gradient}/>
      </div>
        <div class='text-on-image'>
        <h3 style = {{fontSize: 50}}>Library</h3> 
           <div className='hero-search'>
        <input type='text' className='input'
          placeholder='Search in Your Playlist '/>
        <button className='search-button' type='button'>
          <span>SEARCH</span>
        </button>
      </div>
        </div>
        </div>
  </header>


  <div className='next-box'></div>


<div class="flex-parent-element">

    <div class="flex-child-element">
    <div className="library-vid">
   </div>
   <p> Introduction to Arrays</p>
   <p> Quiz | All Info</p>
    </div>

    <div class="flex-child-element">
    <div className="library-vid">
   </div>
   <p> Introduction to Linked Lists</p>
   <p> Quiz | All Info</p>

    </div>

    <div class="flex-child-element">
    <div className="library-vid">
   </div>
   <p> AVL Trees </p>
   <p> Quiz | All Info</p>

    </div>

    </div>


    <div className='next-box'></div>
    <div class="flex-parent-element">

    <div class="flex-child-element">
    <div className="library-vid">
   </div>
   <p> Data Structures</p>
   <p> Quiz | All Info</p>

    </div>

    <div class="flex-child-element">
    <div className="library-vid">
   </div>
   <p> Intro to Computer Architecture</p>
   <p> Quiz | All Info</p>

    </div>

    <div class="flex-child-element">
    <div className="library-vid">
   </div>
   <p> Code in React </p>
   <p> Quiz | All Info</p>

    </div>


    </div>

    <div className='next-box'></div>
    <div className='next-box'></div>
    <img src={BlueCircle} className='blue-circle'/>

    <div className='next-box'></div>
    <div className='next-box'></div>
    <img src={PinkCircle} className='pink-circle'/>
    <div className='next-box'></div>
    <div className='next-box'></div>
   
    
    <div>


      <Footer/>


      </div>


  

  </div>




    
  )
}

export default Library;

