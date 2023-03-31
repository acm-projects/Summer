import Hero from "../components/Hero";
import Line from "../components/Line";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bubbles from '../assets/Bubbles.png'
import CheckCircle from '../assets/CheckCircle.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import Gradient from '../assets/Gradient.png'

import './styles/QuizPage.css';




function QuizPage() {
    return (

        <div className="QuizPage">

  
        <div className='top-bubble'>
      <img src={Bubbles} alt='bubbles' className='bubble-right'/>
      </div>
       

      <div className='next-box'></div>

      <span className='font-link'>

    <div className='horiz-box'></div>




     <h1 style = {{fontSize: 50}}>Quiz and Guide</h1> 
    </span>

      <img src={CheckCircle} className='check'/>

    
      <h5 style = {{fontSize: 15}}> Join many others: Summer is trusted by many ambitious users </h5>
      <h5 style = {{fontSize: 15}}> Get started quickly: Engage below and assess your knowledge of the desired video </h5>
      <div className='next-box'></div>

      <Line/>
      

      <h6 style = {{fontSize: 15}}> Choose one answer choice. </h6>


      <div class="flex-parent-element">
        <div class="flex-child-element">
        <img src={BlueCircle} className='blue-circle'/>

        <div className="test">
           <h2>Question 1</h2>
           <p>Which of these is a data structure?</p>
       </div>
        </div>



          <div class="flex-child-element">
         <div className="test-answers">
           <p>Search</p>
             </div>
             <div className='small-box'></div>

            <div className="test-answers">
           <p>Insert</p>
           </div>
           <div className='small-box'></div>



           <div className="test-answers">
           <p>Array</p>
           </div>
           <div className='small-box'></div>

           <div className="test-answers">
          <p>Java</p>
          </div>
          <div className='small-box'></div>

          </div>

        </div>




        <div class="flex-parent-element">
        <div class="flex-child-element">
        <div className="test">
           <h2>Question 2</h2>
           <p>Which of these is an IDE?</p>
       </div>
       
        </div>

        <div class="flex-child-element">
        <div className="test-answers">
           <div className="push"></div>
           <p>Eclipse</p>
             </div>
             <div className='small-box'></div>

            <div className="test-answers">
           <p>IntelliJ</p>
           </div>
           <div className='small-box'></div>

           <div className="test-answers">
           <p>Visual Studio</p>
           </div>
           <div className='small-box'></div>

           <div className="test-answers">
          <p>All of the above</p>
          </div>
          <div className='small-box'></div>

        </div>

        </div>



        <div class="flex-parent-element">
        <div class="flex-child-element">
        <div className="test">
           <h2>Question 3</h2>
           <p>Which of these is a programming language?</p>
       </div>
        </div>

        <div class="flex-child-element">
        <div className="test-answers">
           <div className="push"></div>
           <p>MongoDB</p>
             </div>
             <div className='small-box'></div>

            <div className="test-answers">
           <p>Eclipse</p>
           </div>
           <div className='small-box'></div>

           <div className="test-answers">
           <p>React</p>
           </div>
           <div className='small-box'></div>

           <div className="test-answers">
          <p>Java</p>
          </div>
          <div className='small-box'></div>

        </div>

        </div>


      

      <div className='next-box'></div>
      <div className='next-box'></div>



      <div class="flex-parent-element">
        <div class="flex-child-element">
        <div className="submit">
           <h2>Submit!</h2>

       </div>
        </div>

        </div>

        <img src={PinkCircle} className='pink-circle'/>

     <div className='next-box'></div>

     <Footer />

     </div>

      

    )
}
export default QuizPage;
