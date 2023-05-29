import React from 'react'
import '../../src/Styles/Game.css'
import Netempire from '../Images/netempire.png'
import inventory from '../Images/inventory.png'
import misssion from '../Images/miss-Control.png'
import gravity from '../Images/gravity-grade.png'
import lucky from '../Images/lucky-cat.png'
import global from '../Images/new-lands.png'
import etern from '../Images/gws.png'
import lab from '../Images/eternalab.png'
import imt from '../Images/ytm.png'
import bgone from '../Images/bgone.svg'




const Game = () => {
  return (
  
<div class="container-fluid">
 <div class="row">
  <div class="col-md-4 col-sm-12">
  <div className='bg___one'>
 <img src={bgone} alt="" />
 
  </div>
  
  <div className='btm____text'>
    <p>In Inventory, agents can oversee all of their assets.</p>
  </div>
  
  
  </div> 
  <div className="col-md-8 col-sm-12 text-center">
  <div className="img_google">
  <video className autoPlay loop muted style={{ width: "40%" }}>
                <source src="video.mp4" type="video/mp4" />
              </video>
              </div>
  </div>
 </div>
 

 <div className="images">

<div class="row">
<div class="col-lg-2">
 <img   src={gravity} alt='' width={'100%'}/>
</div>
<div  class="col-lg-2">
 <img src={lucky} alt='' width={'100%'}/>
</div>
<div  class="col-lg-2">
 <img src={global} alt='' width={'100%'}/>
</div>
<div  class="col-lg-2">
 <img src={etern} alt='' width={'100%'}/>
</div>
<div  class="col-lg-2">
 <img src={lab} alt='' width={'100%'}/>
</div>
<div  class="col-lg-2">
 <img src={imt} alt='' width={'100%'}/>
</div>
</div>
</div>
</div>
   
  )
}

export default Game
