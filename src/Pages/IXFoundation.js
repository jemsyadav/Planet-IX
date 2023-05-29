import React from 'react'
import '../../src/Styles/IXFoundation.css'
import staking from '../Images/staking.svg'
import gameutility from '../Images/gameutility.svg'
import gover from '../Images/gover.svg'
import arrow from '../Images/arrow.svg'
import container4 from '../Images/contsiner4.svg'
import circle2 from '../Images/circle-2.png'



const IXFoundation = () => {
  
  return (
    <div  className='container' >
     <div className="row">
      <div className="col-1">
       <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  LANGUAGE
  </button>
  <div className="dropdown_language">
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/action">ENGLISH</a></li>
    <li><a class="dropdown-item" href="/another action">HINDI</a></li>

  </ul>
  </div>
  </div>

      </div>
      {/* <div className="col-md-6 col-sm-12 ">
      <div className='Header-1'>
      <button className='Header__button'>BUY IXT</button>
      <button className='Header__button' >ROADMAP</button>
      <button className='Header__button'>WHATEPAPER</button>
      <button className='Header__button'>PLANET IX</button>
      <button className='Header__button'>DASHBOARD</button>
      </div>
      </div> */}
     </div>
     <br /><br /> <br />
       <div className="Container__1">
       <h1 >IXT STAKING IS LIVE</h1><br />
       <div class="css-wwkj4p"><span>24,000,000</span> IXT in the total reward pool</div> <br /><br />
       <p class="css-1co7pik">The more you stake, the larger share of the reward pool you will receive!</p>

       <button  className='Container__1__Button'  >STAKE YOUR IXT HERE</button>
       </div>
        <div className="row">
        <div className="col-2">
        </div>
        </div>

        <div className="Container__2">
            <div className="row">
            <div>
            <h2>WHAT IS IXt?</h2>
            </div> <br /> <br /><br />
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <img  src={staking} alt="" /><br />
                <h2>STAKING</h2>
                <p>Allows asset owners to claim their rewards, contribute and actively secure the in-game economy,</p>
              </div>
              <div className="col-md-4 col-sm-12">
                <img className='img-fluid' src={gameutility} alt="" /><br />
                <h2>IN-GAME UTILITY</h2>
                <p>Planet IX will have four unique asset pillars which fuel the ecosystem and in-game economy; 2 ERC20 tokens, 1         ERC72 NFT and 1 ERC1155 NFT, representing both on-chain and in-game mechanics</p>
              </div>
              <div className="col-md-4 col-sm-12">
                <img className='img-fluid' src={gover} alt="" /><br />
                <h2>GOVERNANCE</h2>
                <p>This enables governance structures that can be utilized by all players who wants a decentralized gaming experience and claiming rewards.</p>
              </div> <br /><br /><br />
              <div className="row">
                <div className="col-3">
                  <h1 className='Container_2_whitepaper'>WHITEPAPER</h1>
                </div>
                <div className="col-6">
                 
                </div>
                <div className="col-3">
                   <img className='img-fluid' src={arrow} alt="" />
                 </div>
               </div>
              </div>
             <div className="col-2">
            </div>
           </div>
         </div>
           <div className="Container__3">
            <div className="row">
              <div className="col-md-1 col-sm-12">

            </div>
            <div className="col-md-4 col-sm-12">
             <h1 className='text-white'>Meet PLANET IX</h1>
              <p className='text-white'>PLANET IX Treasury with decentralized governance will also be developed in later stages of the game.</p>
            
            <button  className='Container_3_Button' href='https://planetix.com/'>GO TO PLANET IX</button>
           </div>
            <div className="col-md-3 col-sm-12">
             <h1 className='text-white'>400k+</h1><br />
              <p className='text-white'>Active Users</p><br />
               <h1 className='text-white'>Q2 2021</h1><br />
                <p className='text-white'>launched</p><br />

            </div>
             <div className="col-md-3 col-sm-12">
               <h1 className='text-white'>45%</h1><br />
                <p className='text-white'>Monthly user growth</p>
                 </div>
            </div>
          </div>
            <div className="Container__4">
             <div className="row">
              <div className="col-md-2 col-sm-12">
                               
              </div>
              <div className="col-md-8 col-sm-12">
              <img className='img-fluid' src={staking} alt="" /><br /><br /><br />
              <h2 className='text-white'>IXT STAKING CONTRACT IS LIVE</h2> <br />
              <p>24,000,000 IXT in total rewards to be claimed! The more IXT you stake, the larger share of the rewards pool you will receive</p><br /><br />
              <button  className='Container__4_button' href='href="https://dashboard.ix.foundation/#/dashboard"'>STAKE YOUR IXT HERE</button>
             
              </div>
            </div> <br /><br />
            <img className='img-fluid' src={container4} alt="" />
          </div>
          <div className="Container__5">
            <div className="row">
              <div className="col-md-2 col-sm-12">
                
              </div>
              <div className="col-md-8 col-sm-12">
                <h1>TOKEN ALLOCATION</h1>
                <img className='img-fluid' src={circle2} alt="" width={'100%'} />
              </div>
            </div>
          </div>
          <div className="Container__6">


          </div>
          <div className="Container__7">
            <div className="row">
              <div className="col-md-2 col-sm-12">

              </div>
              <div className="col-md-8 col-sm-12">
            <h3 className='text-white'>IX <br /> <span> FOUNDATION</span></h3> <br /> <br />
            <div className="row">
            <div className="col-md-5 col-sm-12">
            <h4>Join our mailing list</h4>
            <h6 >Subscribe for updates and new features</h6>
             <input type="Enter Your email" placeholder='Enter Your Email'/> <br /> <br />
            <p>Disclaimer</p>
            <p>This website is maintained by Amelia Systems AG. The contents and opinions of this website are those of Amelia Systems. Amelia Systems AG does not warrant that the information provided by these websites is correct, complete, and up-to-date.</p> <br /><br /><br /><br />
            <li> © 2021 Amelia Systems AG.</li>
            </div>
            <div className="col-md-3 col-sm-12">
             <a href="/" class="css-1q2lgqy">Home</a><br />
              <div>Dashboard<span>TBA</span></div><br />
               <a href="/roadmap" class="css-0">Roadmap</a><br />
                 <div>Initiatives<span>TBA</span></div><br />
                   <div>Vision &amp; Mission<span>TBA</span></div><br /><br />
                     <a href="https://planetix.statuspage.io/" class="css-0">Status</a><br /><br />
                </div>
                  <div className="col-md-4 col-sm-6"> 
                  <button className='Footer__button'> Buy Ix Token <br /> <p>exchange via DEX</p></button><br /><br /><br /><br /> <br />
                  <button className='Footer__button'> Investor Login <br /> <p>only aviable for presale investor</p></button>
                </div>
                
              </div>
                </div>
                  </div>
                    </div>
                      </div>
  
       
  
  )
}

export default IXFoundation
