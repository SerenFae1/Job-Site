import './App.css';
import SquaresBG from "react-animated-squares";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';


SwiperCore.use([Autoplay]);

function App() {
  return (

    <div className="App">
      <div className="top">
        <SquaresBG speed={0.9} backgroundColor="#284877" />
        <div className='namePlate'>
          <div className='nameDiv'>
            <h2>Caleb Johnson</h2>
            <p>Game Developer</p>
          </div>
        </div>

      </div>

    
      <div className="experience">
        <Swiper loop={true} 
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false
                }}
        >
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide1.png' alt='related visual' />
              </div>
              <div className='textBox'>
                <h2>Unreal Engine 5</h2>
                <p>I have two years of experience working with Unreal to create games of various genres.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide2.png' alt='related visual' />
              </div>
              <div className='textBox'>
                <h2>Blender</h2>
                <p>I have about one year of experience of creating various 3d models as well as rigging animating them.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideRow'>
              <div className='slide'>
                <img src='slide3.png' alt='related visual' />
              </div>
              <div className='textBox'>
                <h2>Concepting</h2>
                <p>I have created several characters and story concepts and I tend to have good creative ideas.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className='workWrapper'>
        <div className='workColumn'>
          <h3>Work History</h3>
          <div id="jobList">
            <div className='work'>
              <div className='years'>July 2019-November 2019</div>
              <div className='job'>Camden Park - Groundsman</div>
            </div>
            
          </div>
        </div>

      </div>
      
      {/* Educational Container copied from work */}
      <div className='workWrapper'>
        <div className='workColumn' id="edColumn">
          <h3>Education</h3>
          <div id="jobList">
            <div className='work'>
            <div className='years'>August 2021-Present</div>
              <div className='job'>Mountwest - Student in Game Dev</div>
            </div>
            
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
