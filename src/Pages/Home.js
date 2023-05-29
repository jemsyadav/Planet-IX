import React from 'react'
import '../../src/Styles/Home.css'
import poly from "../Images/poly.svg" 
import coinbase from '../Images/coinbase.svg'
import superfluid from '../Images/superfluid.svg'
import chainlink from '../Images/chainlink.svg'
import alchemy from '../Images/alchemy.svg'
import img1 from '../Images/img1.jpg'
import MCLogomark2 from '../Images/MCLogomark2.png'
import meta from '../Images/meta.png'
import empire from '../Images/empire.png'
import ss2 from '../Images/ss2.png'
import circle from '../Images/circle.png'


const Home = () => {
  return (
   <div className="container">
    <div className="containe">
    <div className='Header-Button'>
         <a className='Joinourdiscord-button' href='/joinourdiscord' >JOIN  OUR  DISCORD</a>
         <a className='play-now' href='/playnow' >PLAY NOW</a>
    </div>

<div className='Home-Page'>
    <div className='Heading'>
      <h1>#1 GAME ON POLYGON</h1>
    </div>

    <div className='heading-2'>
      <h1>FARM, TRADE & EARN</h1>
    </div>

    <div className='paragraph'>
    <h5>Planet IX is an online NFT-strategy game where a digital rendition of the earth is your playing field. Join us and become an Agent of Change now.</h5>

    <div className='Home-Page-Button'>
    <button className='Home-Play-Button'>PLAY NOW</button>
    <button className='Home-Byu-Button'>BYU OUR TOKEN</button>
    </div>

    <div className col-md-2 col-sm-12='home-svg-image'>
      <img src={poly} alt="polygon" />
      <img src={superfluid} alt="superfluid" />
      <img src={coinbase} alt='coinbase'/>
      <img src={chainlink} alt='chainlink'/>
      <img src={chainlink} alt='chainlink'/>
      <img src={alchemy} alt='alchemy'/>
      
    </div>
    
    </div>
    </div>
    </div>


    <div className="container3">
      <div className="row">
        <div className='col-md-3 col-sm-12'>
        <div className='cont-3-img'>
      <img src={img1} alt='img1'/>
      </div>
        </div>

        <div className="col-md-9 col-sm-12">
          <ul>
            <li className='d-flex justify-content-between'>
              <p>Final Airdrop Competition & NETEMPIRE Genesis</p>
              <p>10 MAY</p>
            </li>
            <li className='d-flex justify-content-between'>
              <p>Genesis NFT Mint: NETEMPIRE - updated times</p>
              <p>03 MAY</p>
            </li>


            <li className='d-flex justify-content-between'>
              <p>Facility Upgrades</p>
              <p>26 APR</p>
            </li>
            <li className='d-flex justify-content-between'>
              <p>April: Game Updates</p>
              <p>03 APR</p>
            </li>
            <li className='d-flex justify-content-between'>
              <p>EternaLab Genesis NFT Mint: UPDATED</p>
              <p>22 MAR</p>
            </li>
            <li className='d-flex justify-content-between'>
              <p >Affiliate Program</p>
              <p>07 MAR</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

   <div className="container-4 text-centre">
    <div className='heading-4'>
  <img className='heading__4_img' src={MCLogomark2} alt=""  />
   <h1>MISSION CONTROL</h1>
   
   <div className="pag-4">
    <p>LIVE NOW ON  PLANET IX</p>
   </div>
   </div>
   </div>
   <div className='container-5'>
   <div className="row">
    <div className="col-md-4 col-sm-12">
      <p>TOTAL PIX TRADED:</p>
      <h2>5,708,891</h2>
    </div>
    <div className="col-md-4 col-sm-12">
      <p>TOTAL PIX TRADED:</p>
      <h2>5,708,891</h2>
    </div>
    <div className="col-md-4 col-sm-12">
      <p>TOTAL PIX TRADED:</p>
      <h2>5,708,891</h2>
    </div>
    
   </div>
   </div>
   <div className="container-6">
    <div className="row ">
      <div className="col-lg-12 ">
      <h1>WELCOME TO PLANET IX</h1>
      <p>As an Agent of Change, your goal is to restore a fallen planet to its former green-blue glory. Planet IX consists of 1.6 billion PIX, all being individual NFTs that you can collect.</p>
      <p>As you progress you can form Territories, develop new technology, raid other players and gain ownership of in-game corporations.</p>
      <p>Everything you collect has true ownership, and your mission is simple: collect assets, use them wisely and build the world of tomorrow.</p>
      </div>
    </div>
    <div className='Button-container-6'  >
    <button type="button" class="button btn-light-green mb-0 mt-6 mb-10" data-v-39f066c9=""> Watch trailer </button>
    </div>
   </div>
   <div className='cont-7-to-14'>
    <div className="container-7">
      <div className="row">
        <div className="col-12 my-4">
          <h1 >HOW TO PLAY</h1>
        </div>
      </div>
    </div>

    {/* <div className="container-8"> */}
     {/* <div className="row">
     <div className="col-md-3 col-sm-12 text-centre">
    <div className='hexagon'><p>I</p></div>
    </div>

    <div className="col-md-3 col-sm-12 ">
    <div className='hexagon'><p>II</p></div>
    </div>

    <div className="col-md-3 col-sm-12 ">
    <div className='hexagon'><p>III</p></div>
    </div>

    <div className="col-md-3 col-sm-12 ">
    <div className='hexagon'><p>IV</p></div>
    </div>

   </div>
    </div> */}

    <div className="container-9 ">
      <div className="row">
        <div className="col-md-5 col-sm-12">
        <div className="cont-img">
        <img src={meta} alt="" />
        </div>
        </div>
        <div className="col-md-7 col-sm-12">
        <h1>CONNECT</h1>
        <p>First, install a Web3 wallet and connect to Planet IX. As Planet IX is operating on the Polygon Network, you need to add it to your wallet to trade and store IX tokens and NFT assets. </p>
        <p> To learn more about setting up your wallet and account. Read our tutorial.</p>          
        </div>
      </div>
    </div>
    </div>
    <div className="container-10">
      <div className="row">
        <div className="col-12">
        <div className="row">
          <div className="col-md-3 col-sm-12  ">
          <p>CORPORATION:</p> <br />
             <p>NetEmpire INC</p> <br />
             <p> YEAR FOUNDED:</p> <br />
             <p>2517</p>
                        
          </div>
          <div className="col-md-3 col-sm-12">
             We ensure fair transactions. Buying, selling, and trading. Hence, all contract-related businesses on Planet IX must be equal. Empires come to those who take, and shall never be inherited by the weak.
          </div>
          <div className="col-md-6 col-sm-12" >
              <img src={empire} alt="" />
          </div>
        </div>
       
        </div>
        
      </div>
    </div>
    <div className="container-11">
      <div className="row">
        <div className="col-12">
          <h1>ROADMAP</h1>
        </div>
      </div>
    </div>
    <div className="container-12">
    <div className="row">
      <div className="col-12">
        <h1 className='cont-12-h1'>IX TOKEN</h1>
      </div>
    </div>
    </div>
    <div className="container-13">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div data-v-39f066c9="" class="ixt-chart-logo"><div data-v-39f066c9=""><div data-v-39f066c9="" class="d-flex mb-1 align-center"><h4 data-v-39f066c9="" class="mb-0 mr-2">IXT</h4> <svg data-v-39f066c9="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g data-v-39f066c9="" clip-path="url(#clip0_486_1641)"><path data-v-39f066c9="" d="M17.457 15.9735L18.8336 15.1796V5.59546L17.457 6.38941V15.9735Z" fill="url(#paint0_linear_486_1641)"></path> <path data-v-39f066c9="" d="M12.8555 18.6389L14.2132 17.845V8.26086L12.8555 9.05482V18.6389Z" fill="url(#paint1_linear_486_1641)"></path> <path data-v-39f066c9="" d="M10.5547 19.9811L11.9124 19.1871V9.60303L10.5547 10.3781V19.9811Z" fill="url(#paint2_linear_486_1641)"></path> <path data-v-39f066c9="" d="M15.1562 17.3157L16.514 16.5217V6.9187L15.1562 7.71265V17.3157Z" fill="url(#paint3_linear_486_1641)"></path> <path data-v-39f066c9="" d="M1.33301 13.5917V15.1607L9.59271 20L9.61156 18.431L1.33301 13.5917Z" fill="url(#paint4_linear_486_1641)"></path> <path data-v-39f066c9="" d="M1.37042 8.24194L1.35156 9.82985L9.63012 14.6692V13.0813L1.37042 8.24194Z" fill="url(#paint5_linear_486_1641)"></path> <path data-v-39f066c9="" d="M1.37109 5.57654V7.16444L9.63079 12.0038L9.64965 10.4159L1.37109 5.57654Z" fill="url(#paint6_linear_486_1641)"></path> <path data-v-39f066c9="" d="M1.35156 10.9263V12.4953L9.61126 17.3346L9.63012 15.7467L1.35156 10.9263Z" fill="url(#paint7_linear_486_1641)"></path> <path data-v-39f066c9="" d="M11.4403 0.793951L10.0826 0L1.78516 4.78261L3.16177 5.57656L11.4403 0.793951Z" fill="url(#paint8_linear_486_1641)"></path> <path data-v-39f066c9="" d="M16.0607 3.45937L14.6841 2.68433L6.38672 7.46693L7.76333 8.26088L16.0607 3.45937Z" fill="url(#paint9_linear_486_1641)"></path> <path data-v-39f066c9="" d="M18.3612 4.80152L17.0035 4.00757L8.70605 8.79018L10.0638 9.58413L18.3612 4.80152Z" fill="url(#paint10_linear_486_1641)"></path> <path data-v-39f066c9="" d="M13.7411 2.13611L12.3834 1.34216L4.08594 6.12477L5.46255 6.91872L13.7411 2.13611Z" fill="url(#paint11_linear_486_1641)"></path></g> <defs data-v-39f066c9=""><linearGradient data-v-39f066c9="" id="paint0_linear_486_1641" x1="17.161" y1="6.50907" x2="19.3768" y2="16.0805" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint1_linear_486_1641" x1="12.5493" y1="9.17597" x2="14.7651" y2="18.7474" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint2_linear_486_1641" x1="10.2441" y1="10.5131" x2="12.4599" y2="20.0845" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint3_linear_486_1641" x1="14.8539" y1="7.83974" x2="17.0698" y2="17.4111" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint4_linear_486_1641" x1="9.6249" y1="18.1552" x2="0.261002" y2="15.2504" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint5_linear_486_1641" x1="9.65209" y1="12.8185" x2="0.28819" y2="9.91371" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint6_linear_486_1641" x1="9.66307" y1="10.1488" x2="0.299173" y2="7.24405" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint7_linear_486_1641" x1="9.64136" y1="15.4873" x2="0.277465" y2="12.5825" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint8_linear_486_1641" x1="3.43335" y1="5.82444" x2="10.6256" y2="-0.850479" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint9_linear_486_1641" x1="8.03978" y1="8.49989" x2="15.232" y2="1.82491" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint10_linear_486_1641" x1="10.3456" y1="9.83525" x2="17.5378" y2="3.16025" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <linearGradient data-v-39f066c9="" id="paint11_linear_486_1641" x1="5.73479" y1="7.16463" x2="12.927" y2="0.489637" gradientUnits="userSpaceOnUse"><stop data-v-39f066c9="" stop-color="#FF6647"></stop> <stop data-v-39f066c9="" offset="1" stop-color="#FF6647" stop-opacity="0"></stop></linearGradient> <clipPath data-v-39f066c9="" id="clip0_486_1641"><rect data-v-39f066c9="" width="17.5" height="20" fill="white" transform="translate(1.33301)"></rect></clipPath></defs></svg></div> <p data-v-39f066c9="" class="mb-0">IX TOKEN</p></div> <h4 data-v-39f066c9="" class="mb-0">0.364148</h4></div>
        </div>
        <div className="col-md-4 col-sm-12">
        <h4 data-v-39f066c9="" class="mb-0">0.364148</h4>
        </div>
        <div className="col-md-4 col-sm-12">
        <p>The IX Token ($IXT), is a utility token and serves as the native token on Planet IX. IX Token was minted on the 22nd of November 2021. The tokens are locked in a vesting schedule and released over a period of 48 months.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={ss2} alt="" width={'100%'} />
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={ss2} alt="" width={'100%'}/>
          </div>
        </div>
      </div>
      <h4 data-v-39f066c9="">Circulating Supply</h4>
      <a data-v-39f066c9="" href="https://www.coingecko.com/en/coins/ix-token" target="_blank">See on Coingecko</a>
      <p data-v-39f066c9="">82,191,666</p>
      <p data-v-39f066c9="">53.63 %</p>
    </div>
    <div className="container-14">
      <div className="row">
        <div className="col-md-7 col-sm-12">

        </div>
        <div className="col-md-5 col-sm-12">
        <img src={circle} alt="" width={'100%'}/>
          
          </div>
      </div>
      
   

    <div className="row">
        <div className="col-md-4 col-sm-12">
          
        </div>
        <div className="col-md-4 col-sm-12">
        <ul className='con-14-ul-1' data-v-39f066c9=""><li data-v-39f066c9="" class="d-flex align-center orange-pct"><svg data-v-39f066c9="" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-39f066c9="" d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#FF6647"></path></svg> <div data-v-39f066c9="" class="d-flex flex-column ml-4"><span data-v-39f066c9="">17,94%</span> <p data-v-39f066c9="" class="mb-0">Play to Earn</p></div></li> <li data-v-39f066c9="" class="d-flex align-center orange-light-pct"><svg data-v-39f066c9="" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-39f066c9="" d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#DFA296"></path></svg> <div data-v-39f066c9="" class="d-flex flex-column ml-4"><span data-v-39f066c9="">15,66%</span> <p data-v-39f066c9="" class="mb-0">Staking Reward</p></div></li> <li data-v-39f066c9="" class="d-flex align-center green-light-pct"><svg data-v-39f066c9="" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-39f066c9="" d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#84D4BC"></path></svg> <div data-v-39f066c9="" class="d-flex flex-column ml-4"><span data-v-39f066c9="">6,52%</span> <p data-v-39f066c9="" class="mb-0">Airdrop 2</p></div></li> <li data-v-39f066c9="" class="d-flex align-center green-pct"><svg data-v-39f066c9="" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-39f066c9="" d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#00A267"></path></svg> <div data-v-39f066c9="" class="d-flex flex-column ml-4"><span data-v-39f066c9="">13,38%</span> <p data-v-39f066c9="" class="mb-0">Airdrop 1</p></div></li></ul>
        <div className="col-4">
           
        </div>

        

          </div>
          <div className="col-md-4 col-sm-12">
          <ul className='text-white' data-v-39f066c9=""><li class="d-flex align-center yellow-pct" data-v-39f066c9=""><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-39f066c9=""><path d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#F7BA1E" data-v-39f066c9=""></path></svg> <div class="d-flex flex-column ml-4" data-v-39f066c9=""><span data-v-39f066c9="">15,89%</span> <p class="mb-0" data-v-39f066c9="">Liquidity Event</p></div></li> <li class="d-flex align-center yellow-dark-pct" data-v-39f066c9=""><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-39f066c9=""><path d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#D26500" data-v-39f066c9=""></path></svg> <div class="d-flex flex-column ml-4" data-v-39f066c9=""><span data-v-39f066c9="">5,55%</span> <p class="mb-0" data-v-39f066c9="">Ecosystem Fund</p></div></li> <li class="d-flex align-center blue-dark-pct" data-v-39f066c9=""><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-39f066c9=""><path d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#4057F8" data-v-39f066c9=""></path></svg> <div class="d-flex flex-column ml-4" data-v-39f066c9=""><span data-v-39f066c9="">8,35%</span> <p class="mb-0" data-v-39f066c9="">Advisor</p></div></li> <li class="d-flex align-center blue-pct" data-v-39f066c9=""><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-39f066c9=""><path d="M9 20L0.339745 15L0.339746 5L9 -8.74228e-07L17.6603 5L17.6603 15L9 20Z" fill="#00A0F0" data-v-39f066c9=""></path></svg> <div class="d-flex flex-column ml-4" data-v-39f066c9=""><span data-v-39f066c9="">16,7%</span> <p class="mb-0" data-v-39f066c9="">Founders, Employees &amp; Consultants</p></div></li></ul>
          </div>
          
      </div>
      </div>
      <div className='Footer'>
      <div data-v-a58c4738="" class="container"><div data-v-a58c4738="" class="row text-center text-sm-left mb-4 mb-sm-6"><div data-v-a58c4738="" xs="6" class="col-sm-6 col-md-3 col-lg-3 col-12 order-1"><div data-v-a58c4738=""><h6 data-v-a58c4738="">platform</h6> <ul data-v-a58c4738="" class="footer-nav"><li data-v-a58c4738=""><a data-v-a58c4738="" href="/" aria-current="page" class="exact-active nuxt-link-exact-active active nuxt-link-active" aria-label="Planet IX">
                  Home
                </a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" href="/drops" class="" aria-label="Planet IX">
                  Drops
                </a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://www.footprint.network/@PlanetIX/PlanetIX" target="_blank">
                  Statistics
                </a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://planetix.statuspage.io/" target="_blank">Status</a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://help.planetix.com" target="_blank">Help Center</a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://gamebook.planetix.com/" target="_blank">Gamebook</a></li></ul></div></div> <div data-v-a58c4738="" xs="6" class="col-sm-6 col-md-3 col-lg-3 col-12 order-2"><div data-v-a58c4738=""><h6 data-v-a58c4738="">about</h6> <ul data-v-a58c4738="" class="footer-nav"><li data-v-a58c4738=""><a data-v-a58c4738="" href="/comms" class="" aria-label="Planet IX">
                  Comms
                </a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://www.youtube.com/channel/UCONW07NMT43rti7_XRXuGMA" target="_blank">Tutorials </a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://nibiru.se" target="_blank">Work with us</a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://planetix.com/terms-conditions">Terms &amp; Conditions</a></li></ul></div></div> <div data-v-a58c4738="" xs="6" class="col-sm-6 col-md-3 col-lg-3 col-12 order-3"><div data-v-a58c4738=""><h6 data-v-a58c4738="">IXT TOKEN</h6> <ul data-v-a58c4738="" class="footer-nav"><li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://dashboard.ix.foundation/#/dashboard" target="_blank">Dashboard </a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://dashboard.ix.foundation/#/dashboard/territories" target="_blank">Territory staking</a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://dashboard.ix.foundation/#/dashboard/landmarks" target="_blank">Landmark Staking</a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="#">Buy IX Token</a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="#">
                  FAQ
                </a></li></ul></div></div> 
                <div data-v-a58c4738="" xs="6" class="col-sm-6 col-md-3 col-lg-3 order-sm-4 col-12 order-0">
                <div data-v-a58c4738="">
                <h6 data-v-a58c4738="">Language</h6> 
                <ul data-v-a58c4738="" class="footer-nav">
                <li data-v-a58c4738="">
                <a data-v-a58c4738="" href="/" aria-current="page" class="exact-active nuxt-link-exact-active active nuxt-link-active">English</a></li>
                 <li data-v-a58c4738="">
                 <a data-v-a58c4738="" href="/cn" class="">简体中文</a>
                 </li>
                  <li data-v-a58c4738="">
                  <a data-v-a58c4738="" href="/kr" class="">한국어</a></li> 
                  <li data-v-a58c4738=""><a data-v-a58c4738="" href="/vn" class="">Tiếng Việt</a>
                  </li> 
                  <li data-v-a58c4738=""><a data-v-a58c4738="" href="/ru" class="">Pусский</a></li>
                  </ul></div></div></div>
                   <div data-v-a58c4738="" class="row">
                   <div data-v-a58c4738="" class="col-sm-6 col-12"><div data-v-a58c4738="" class="logo">
                   <a data-v-a58c4738="" href="/" aria-current="page" class="exact-active nuxt-link-exact-active active nuxt-link-active" aria-label="Planet IX"><svg data-v-a58c4738="" width="244" height="20" viewBox="0 0 244 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path data-v-a58c4738="" d="M0 0.65C0 0.6 0 0.6 0.0494919 0.55C0.0989837 0.5 0.0989837 0.5 0.148476 0.5H21.8259C23.3107 0.5 24.5975 1.05 25.6863 2.1C26.7256 3.2 27.27 4.5 27.27 6V7.95C27.27 9.5 26.7256 10.8 25.6863 11.85C24.647 12.9 23.3602 13.45 21.8259 13.45H3.81087V19.6C3.81087 19.65 3.81087 19.7 3.76138 19.75C3.71189 19.8 3.71189 19.8 3.61291 19.8H0.148476C0.0989837 19.8 0.0989837 19.8 0.0494919 19.75C0 19.7 0 19.65 0 19.6V0.65ZM21.8259 10.15C22.2713 10.15 22.6673 10 22.9642 9.65C23.2612 9.3 23.4591 8.95 23.4591 8.5V5.45C23.4591 5 23.3107 4.6 22.9642 4.25C22.6178 3.9 22.2713 3.75 21.8259 3.75H3.81087V10.1H21.8259V10.15Z" fill="#303030"></path> 
                   <path data-v-a58c4738="" d="M60.2313 19.6C60.2313 19.65 60.2313 19.65 60.1818 19.7C60.1323 19.75 60.1323 19.75 60.0828 19.75H38.4548C36.9206 19.75 35.6338 19.2 34.5945 18.15C33.5552 17.1 33.0107 15.8 33.0107 14.25V0.65C33.0107 0.6 33.0107 0.55 33.0602 0.5H33.1097H36.6237C36.6731 0.5 36.7226 0.5 36.7721 0.55C36.8216 0.6 36.8216 0.6 36.8216 0.7V14.85C36.8216 15.3 36.9701 15.7 37.3165 16C37.663 16.3 38.0094 16.5 38.5043 16.5H60.1323C60.1818 16.5 60.1818 16.5 60.2313 16.55C60.2808 16.6 60.2808 16.6 60.2808 16.65V19.6H60.2313Z" fill="#303030"></path> 
                   <path data-v-a58c4738="" d="M65.9723 6C65.9723 4.5 66.5168 3.2 67.5561 2.1C68.5954 1.05 69.8822 0.5 71.4165 0.5H87.7488C89.2335 0.5 90.5203 1.05 91.6091 2.1C92.698 3.15 93.1929 4.45 93.1929 6V19.6C93.1929 19.65 93.1929 19.7 93.1434 19.75C93.0939 19.8 93.0939 19.8 92.9949 19.8H89.58C89.5305 19.8 89.5305 19.8 89.481 19.75C89.4315 19.7 89.4315 19.7 89.4315 19.6V13.45H69.7832V19.6C69.7832 19.65 69.7832 19.7 69.7337 19.75C69.6842 19.8 69.6842 19.8 69.6347 19.8H66.1208C66.0713 19.8 66.0218 19.8 65.9723 19.75C65.9229 19.7 65.9229 19.7 65.9229 19.6V6H65.9723ZM89.382 10.15V5.45C89.382 5 89.2335 4.6 88.8871 4.25C88.5406 3.95 88.1942 3.75 87.7488 3.75H71.4165C70.971 3.75 70.5751 3.9 70.2286 4.25C69.8822 4.6 69.7337 4.95 69.7337 5.45V10.15H89.382Z" fill="#303030"></path> 
                   <path data-v-a58c4738="" d="M122.394 0.649951C122.394 0.599951 122.394 0.549951 122.443 0.499951C122.493 0.449951 122.493 0.449951 122.592 0.449951H126.106C126.155 0.449951 126.155 0.449951 126.205 0.499951C126.254 0.549951 126.254 0.549951 126.254 0.649951V19.6C126.254 19.65 126.254 19.65 126.205 19.7C126.155 19.75 126.155 19.75 126.106 19.75H119.028H118.979C117.494 19.7 116.356 19.1 115.514 17.9L106.606 4.54995C106.259 4.04995 105.764 3.79995 105.22 3.79995H102.795V19.6C102.795 19.65 102.795 19.65 102.745 19.7C102.696 19.75 102.696 19.75 102.597 19.75H99.083C99.0336 19.75 99.0336 19.75 98.9841 19.7C98.9346 19.65 98.9346 19.65 98.9346 19.6V0.649951C98.9346 0.599951 98.9346 0.549951 98.9841 0.499951C99.0336 0.449951 99.0336 0.449951 99.083 0.449951H106.16H106.21C107.695 0.499951 108.833 1.14995 109.674 2.34995L118.533 15.7C118.88 16.2 119.325 16.45 119.919 16.45H122.344V0.649951H122.394Z" fill="#303030"></path> 
                   <path data-v-a58c4738="" d="M135.756 8.5H156.296C156.345 8.5 156.395 8.5 156.444 8.55C156.494 8.6 156.494 8.6 156.494 8.7V11.65C156.494 11.7 156.494 11.75 156.444 11.8C156.395 11.85 156.395 11.85 156.296 11.85H135.756V14.9C135.756 15.35 135.905 15.75 136.251 16.05C136.598 16.35 136.944 16.55 137.439 16.55H159.067C159.117 16.55 159.166 16.55 159.216 16.6C159.265 16.65 159.265 16.65 159.265 16.7V19.65C159.265 19.7 159.265 19.75 159.216 19.8C159.166 19.85 159.166 19.85 159.067 19.85H137.439C135.905 19.85 134.618 19.3 133.579 18.25C132.54 17.2 131.995 15.9 131.995 14.35V6C131.995 4.45 132.54 3.15 133.579 2.1C134.618 1.05 135.905 0.5 137.439 0.5H159.067C159.117 0.5 159.166 0.5 159.216 0.55C159.265 0.6 159.265 0.6 159.265 0.7V3.65C159.265 3.7 159.265 3.7 159.216 3.75C159.166 3.8 159.166 3.8 159.067 3.8H137.439C136.994 3.8 136.598 3.95 136.251 4.3C135.954 4.65 135.756 5 135.756 5.45V8.5Z" fill="#303030"></path>
                    <path data-v-a58c4738="" d="M164.907 0.649951C164.907 0.599951 164.907 0.549951 164.956 0.499951C165.006 0.449951 165.006 0.449951 165.055 0.449951H192.028C192.078 0.449951 192.078 0.449951 192.127 0.499951C192.177 0.549951 192.177 0.549951 192.177 0.649951V3.59995C192.177 3.64995 192.177 3.64995 192.127 3.69995C192.078 3.74995 192.078 3.74995 192.028 3.74995H180.447V19.5499C180.447 19.5999 180.447 19.65 180.398 19.7C180.348 19.75 180.348 19.75 180.299 19.75H176.785C176.735 19.75 176.686 19.75 176.636 19.7C176.587 19.65 176.587 19.65 176.587 19.5499V3.79995H165.006C164.956 3.79995 164.956 3.79995 164.907 3.74995C164.857 3.69995 164.857 3.69995 164.857 3.64995V0.649951H164.907Z" fill="#303030"></path> 
                    <path data-v-a58c4738="" d="M210.241 19.6C210.241 19.65 210.241 19.65 210.192 19.7C210.142 19.75 210.142 19.75 210.043 19.75H206.529C206.48 19.75 206.48 19.75 206.43 19.7C206.381 19.65 206.381 19.65 206.381 19.6V0.65C206.381 0.6 206.381 0.55 206.43 0.5C206.48 0.5 206.529 0.5 206.579 0.5H210.093C210.142 0.5 210.192 0.5 210.241 0.55C210.291 0.6 210.291 0.6 210.291 0.7V19.6H210.241ZM237.709 3.8C237.214 3.8 236.769 4 236.422 4.4L231.82 10.15L236.422 15.9C236.769 16.3 237.214 16.5 237.709 16.5H243.054C243.104 16.5 243.104 16.5 243.153 16.55C243.203 16.6 243.203 16.6 243.203 16.7V19.65C243.203 19.7 243.203 19.75 243.153 19.8C243.104 19.85 243.104 19.85 243.054 19.85H237.412C235.928 19.85 234.641 19.25 233.601 18L229.593 13L225.584 18C224.495 19.2 223.258 19.85 221.773 19.85H216.131C216.081 19.85 216.081 19.85 216.032 19.8C215.982 19.75 215.982 19.75 215.982 19.65V16.7C215.982 16.65 215.982 16.6 216.032 16.55C216.081 16.5 216.081 16.5 216.131 16.5H221.476C221.971 16.5 222.416 16.3 222.763 15.9L227.365 10.15L222.763 4.4C222.416 4 221.971 3.8 221.525 3.8H216.18C216.131 3.8 216.131 3.8 216.081 3.75C216.032 3.7 216.032 3.7 216.032 3.65V0.65C216.032 0.6 216.032 0.6 216.081 0.55C216.131 0.5 216.131 0.5 216.18 0.5H221.822C223.307 0.5 224.594 1.1 225.633 2.35L229.642 7.35L233.651 2.35C234.69 1.15 235.977 0.5 237.462 0.5H243.104C243.153 0.5 243.153 0.5 243.203 0.55C243.252 0.6 243.252 0.6 243.252 0.65V3.65C243.252 3.7 243.252 3.7 243.203 3.75C243.153 3.8 243.153 3.8 243.104 3.8H237.709Z" fill="#303030"></path></svg></a></div></div>
                     <div data-v-a58c4738="" class="col-sm-6 col-12"><ul data-v-a58c4738="" class="social_medias"><li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://www.discord.gg/planetix" target="_blank"><svg data-v-a58c4738="" width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path data-v-a58c4738="" d="M30.4755 2.4934C28.181 1.43633 25.7205 0.657521 23.1478 0.211466C23.101 0.202857 23.0542 0.224371 23.0301 0.267399C22.7136 0.832496 22.3631 1.56971 22.1176 2.14916C19.3506 1.73323 16.5978 1.73323 13.8875 2.14916C13.642 1.55683 13.2787 0.832496 12.9609 0.267399C12.9367 0.225806 12.8899 0.204293 12.8431 0.211466C10.2719 0.656096 7.81134 1.4349 5.5154 2.4934C5.49553 2.50201 5.47849 2.51636 5.46718 2.535C0.800088 9.53571 -0.478425 16.3644 0.14877 23.1083C0.151608 23.1413 0.170055 23.1729 0.195597 23.1929C3.27481 25.4634 6.25756 26.8418 9.18492 27.7554C9.23177 27.7697 9.28141 27.7525 9.31122 27.7138C10.0037 26.7643 10.621 25.7632 11.1502 24.7104C11.1814 24.6487 11.1516 24.5756 11.0878 24.5512C10.1087 24.1783 9.1764 23.7236 8.27959 23.2073C8.20866 23.1657 8.20298 23.0638 8.26824 23.0151C8.45696 22.8731 8.64573 22.7253 8.82593 22.5762C8.85853 22.5489 8.90397 22.5432 8.9423 22.5604C14.8339 25.2612 21.2123 25.2612 27.0344 22.5604C27.0728 22.5418 27.1182 22.5475 27.1522 22.5748C27.3325 22.7239 27.5212 22.8731 27.7113 23.0151C27.7766 23.0638 27.7723 23.1657 27.7014 23.2073C26.8046 23.7336 25.8723 24.1783 24.8918 24.5498C24.8279 24.5742 24.7995 24.6487 24.8308 24.7104C25.3714 25.7617 25.9887 26.7628 26.6683 27.7123C26.6967 27.7525 26.7478 27.7697 26.7946 27.7554C29.7362 26.8418 32.7189 25.4634 35.7981 23.1929C35.8251 23.1729 35.8422 23.1427 35.845 23.1098C36.5956 15.313 34.5877 8.54034 30.5223 2.53642C30.5124 2.51636 30.4954 2.50201 30.4755 2.4934ZM12.03 19.002C10.2562 19.002 8.7947 17.3669 8.7947 15.3589C8.7947 13.3509 10.2279 11.7158 12.03 11.7158C13.8463 11.7158 15.2937 13.3652 15.2653 15.3589C15.2653 17.3669 13.8321 19.002 12.03 19.002ZM23.9921 19.002C22.2184 19.002 20.7568 17.3669 20.7568 15.3589C20.7568 13.3509 22.19 11.7158 23.9921 11.7158C25.8084 11.7158 27.2558 13.3652 27.2275 15.3589C27.2275 17.3669 25.8084 19.002 23.9921 19.002Z" fill="#303030" fill-opacity="1"></path></svg></a></li> <li data-v-a58c4738="">
                     <a data-v-a58c4738="" aria-label="Planet IX" href="https://twitter.com/Planetix0" target="_blank"><svg data-v-a58c4738="" width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-a58c4738="" d="M33 3.26588C31.7859 3.80488 30.481 4.16788 29.1115 4.3315C30.5099 3.49413 31.5837 2.16725 32.0884 0.586004C30.7808 1.3615 29.3315 1.92525 27.7887 2.22913C26.5554 0.913253 24.794 0.0910034 22.847 0.0910034C18.4759 0.0910034 15.2639 4.16925 16.2511 8.40288C10.626 8.121 5.6375 5.426 2.29763 1.32988C0.523875 4.37275 1.37775 8.35338 4.39175 10.3691C3.2835 10.3334 2.2385 10.0295 1.32687 9.52213C1.25262 12.6585 3.50075 15.5928 6.75675 16.2459C5.80387 16.5044 4.76025 16.5649 3.69875 16.3614C4.5595 19.0509 7.05925 21.0075 10.0238 21.0625C7.1775 23.2941 3.5915 24.291 0 23.8675C2.99612 25.7884 6.556 26.909 10.3785 26.909C22.9487 26.909 30.0506 16.2926 29.6216 6.77075C30.9444 5.81513 32.0925 4.623 33 3.26588Z" fill="#303030" fill-opacity="1"></path></svg></a></li> <li data-v-a58c4738="">
                     <a data-v-a58c4738="" aria-label="Planet IX" href="https://www.youtube.com/planet_ix" target="_blank"><svg data-v-a58c4738="" width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-a58c4738="" d="M27.7879 0.510661C22.6822 0.162161 11.3107 0.163578 6.21208 0.510661C0.691334 0.887494 0.0410833 4.22233 0 13C0.0410833 21.7621 0.685667 25.1111 6.21208 25.4893C11.3121 25.8364 22.6822 25.8378 27.7879 25.4893C33.3087 25.1125 33.9589 21.7777 34 13C33.9589 4.23791 33.3143 0.888911 27.7879 0.510661ZM12.75 18.6667V7.33333L24.0833 12.9901L12.75 18.6667Z" fill="#303030" fill-opacity="1"></path></svg></a></li> <li data-v-a58c4738=""><a data-v-a58c4738="" aria-label="Planet IX" href="https://blog.planetix.com/" target="_blank"><svg data-v-a58c4738="" width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-a58c4738="" fill-rule="evenodd" clip-rule="evenodd" d="M3.43892 5.32179C3.47517 4.96533 3.33863 4.61371 3.07279 4.37446L0.366125 1.11196V0.625H8.77371L15.2721 14.8773L20.9851 0.625H29V1.11196L26.6848 3.33167C26.4855 3.48392 26.3864 3.73404 26.4275 3.98175V20.2918C26.3864 20.5383 26.4855 20.7885 26.6848 20.9407L28.9456 23.1604V23.6474H17.5728V23.1604L19.9158 20.8863C20.1453 20.6567 20.1453 20.5891 20.1453 20.2375V7.05454L13.6336 23.5942H12.754L5.17167 7.05454V18.1398C5.10883 18.605 5.2635 19.075 5.59096 19.411L8.63717 23.106V23.5942H0V23.106L3.04621 19.411C3.37246 19.0738 3.51746 18.6014 3.43892 18.1398V5.32179Z" fill="#303030" fill-opacity="1"></path></svg></a></li></ul></div> <div data-v-a58c4738="" class="col col-12"><p data-v-a58c4738="" class="copyright_footer">Copyright © 2021 Planet IX  </p></div></div></div>
      </div>
      
    </div>
      
  
 
    


   
  )
}

export default Home
