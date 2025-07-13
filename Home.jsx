import React, {  useContext, useState} from 'react'
import './Home.css'
import { assets } from '../assets/assets/assets'
import CardData from '../data'
import Card from './Card'
import { Context } from '../Context/Context'
import Loading from './Loading'


const Home = () => {
  const [cards, setDataCard] = useState(CardData);

  //get all the states and funtion here //destructure them 

  const {generateAnswer , recentPrompt , showResult , loading , resultdata , setInput , input} = useContext(Context)


  return (

    <div className='main'>


    <div className='nav'>
      <p className='ai-verse'><span>Geminoid</span></p>
    </div>

    <div className ='main-container'>

     {
      !showResult ? ( //if not true 
        <>
      <div className='greet'>
        <p><span>Hii! Geeky-Dev</span></p>
        <p>How can I help you here?</p>
        <p>Explore the world of AI chat :) </p>
      </div>
   
      <div className='cards'>
        {
          cards.map((card) => (
            <Card key={card.id} data={card} />
          ))
        }
       </div>
      </>
      )
      :
      (
        
        <div className='result'>

        <div className='result-title'>
          <img src={assets.guts_icon}/>
          <p>{recentPrompt}</p>
        </div>

        <div className='result-data'>
        <img className='' src={assets.gemini_icon}></img>
        { loading ? (
          <>
            <Loading/>
          </>
        ):
        (<>
          <p dangerouslySetInnerHTML={{__html:resultdata}}/> 
        </>)


        }
         
                  
        </div>
      
        </div>
        
      )
     

     }
      
        

      <div className='main-bottom'>

        <div className='search-box'>

          <input
            type='text'
            placeholder='Enter the prompt...'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <div className='icons'>
            <img src={assets.gallery_icon} alt='Gallery Icon' />
            <img src={assets.mic_icon} alt='Microphone Icon' />
            <img onClick={generateAnswer}
            src={assets.send_icon} alt='Send Icon' />
          </div>

        </div>

        <p className='bottom-info'>
          Exploring the future of AI, driven by curiosity and innovation.
          <br/>
          Created by <span>Aditya kashyap</span>
        </p>

      </div>

    </div>


    
    </div>

      )
}

export default Home;