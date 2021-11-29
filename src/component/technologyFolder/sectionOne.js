import React from 'react';
import poster from '../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import video from "../../video/video1.mp4";
import MediaQuery from 'react-responsive'

const  SectionOne = (props) =>{


  const {id,  Description_1, Video, text_1, } = props.data 
  
  console.log()
  return(

    
  <article className="position section-one">

    <div className="container bigScreenContainer">
      <div key={id} className="container-fluid">
        <div className="row" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
            <div className='png' ></div>
             <h2>{Description_1}</h2>
             <p>{text_1}</p>
            <button className="section-1-button" >Davami</button>
            
          </div>
          <div  className="text-box col-md-6 col-sm-12 col-12">
            <VideoPlayer 
            src={Video} poster={poster} className="video"   
            />
          </div>
        </div>
        
      </div> 
    </div>

    <div className='smallScreen'  >
      <div key={id} className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 section-1-for-mobile" >
              <h2>{Description_1}</h2>
                <VideoPlayer 
                  src={Video} poster={poster} className="video"   
                />
              <p>{text_1}</p>
            <button className="button">Davami</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </article>  
  )
}

export default SectionOne