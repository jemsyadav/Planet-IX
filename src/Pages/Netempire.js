import React from "react";
import "../../src/Styles/Netempire.css";
import { Button } from "bootstrap";
import meta from "../Images/meta.png";

const Wallet =[
  {
id:1,
image:"https://planetix.com/_nuxt/img/metamask.56b5040.svg",
text:"Metamask"
  },
  {
id:2,
image:"https://planetix.com/_nuxt/img/crypto-com-icon.6178ab3.svg",
text:"Crypto.com DeFi Wallet"
  },
  {
id:3,
image:"https://planetix.com/_nuxt/img/bitkeep-icon.6523671.svg",
text:'Bitkeep'
  },
  {
id:4,
image:"https://planetix.com/_nuxt/img/1inch-icon.ad204e7.svg",
text:'1inch'
  },
  {
id:5,
image:"	https://planetix.com/_nuxt/img/brave-icon.3e5c7f9.svg",
text:"BraveWallet"
  },
  {
id:6,
image:"https://planetix.com/_nuxt/img/metamask.56b5040.svg",
text:"Wombat"
  },
  {
id:7,
image:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIg…wNCAzOTZINDIwWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
text:"Coinbase Wallet"
  },
  {
id:8,
image:"https://planetix.com/_nuxt/img/walletconnect.35250db.svg",
text:"WalletConnect Wallet"
  },
]


const Netempire = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <br /> <br />
          <h4 data-v-535b4c40="" class="mb-8">
            Connect Wallet
          </h4>
          <br />
          <p data-v-535b4c40="" class="mb-4 ">
            Supported wallets
          </p>
        {Wallet.map((e)=>{
return(
 <>
 <div className="container1_1 d-flex " key={e.id}>
            <img
              src={e.image}
              alt=""
              height={"25px"}
            />
            <p>{e.text}</p>
          </div>
          <br />
 </>
)
        }) }
        </div>
        <div className="col-md-8 col-sm-12 ">
          <div className="container-1">
            {" "}
            <br /> <br /> <br /> <br />
            <h4>What is a Wallet?</h4> <br />
          </div>
          <div className="svg">
            <svg
              data-v-535b4c40=""
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-535b4c40=""
                d="M41.775 38.5373L45.0002 36.6715V14.1488L41.775 16.0146V38.5373Z"
                fill="url(#paint0_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M30.9947 44.8007L34.1757 42.9349V20.4122L30.9947 22.278V44.8007Z"
                fill="url(#paint1_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M25.6046 47.9554L28.7856 46.0896V23.5669L25.6046 25.3883V47.9554Z"
                fill="url(#paint2_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M36.3846 41.6916L39.5657 39.8258V17.2587L36.3846 19.1245V41.6916Z"
                fill="url(#paint3_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M4 32.9406V36.6278L23.3513 48.0002L23.3955 44.313L4 32.9406Z"
                fill="url(#paint4_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M4.08825 20.3689L4.04407 24.1004L23.4395 35.4728V31.7413L4.08825 20.3689Z"
                fill="url(#paint5_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M4.08844 14.1055V17.837L23.4397 29.2094L23.4839 25.4779L4.08844 14.1055Z"
                fill="url(#paint6_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M4.04407 26.6771V30.3642L23.3954 41.7366L23.4395 38.005L4.04407 26.6771Z"
                fill="url(#paint7_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M27.681 2.86578L24.4999 1L5.06027 12.2391L8.28549 14.1049L27.681 2.86578Z"
                fill="url(#paint8_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M38.5052 9.12956L35.28 7.3082L15.8403 18.5473L19.0655 20.4131L38.5052 9.12956Z"
                fill="url(#paint9_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M43.8954 12.2839L40.7144 10.4181L21.2747 21.6572L24.4558 23.523L43.8954 12.2839Z"
                fill="url(#paint10_linear_6441_1517)"
              ></path>{" "}
              <path
                data-v-535b4c40=""
                d="M33.071 6.01926L29.89 4.15347L10.4503 15.3926L13.6756 17.2584L33.071 6.01926Z"
                fill="url(#paint11_linear_6441_1517)"
              ></path>{" "}
              <defs data-v-535b4c40="">
                <linearGradient
                  data-v-535b4c40=""
                  id="paint0_linear_6441_1517"
                  x1="41.0813"
                  y1="16.2958"
                  x2="46.3027"
                  y2="38.7816"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint1_linear_6441_1517"
                  x1="30.2774"
                  y1="22.5627"
                  x2="35.4988"
                  y2="45.0485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint2_linear_6441_1517"
                  x1="24.877"
                  y1="25.7057"
                  x2="30.0983"
                  y2="48.1915"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint3_linear_6441_1517"
                  x1="35.6764"
                  y1="19.4232"
                  x2="40.8978"
                  y2="41.9089"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint4_linear_6441_1517"
                  x1="23.4267"
                  y1="43.665"
                  x2="1.47675"
                  y2="36.8766"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint5_linear_6441_1517"
                  x1="23.491"
                  y1="31.1238"
                  x2="1.54104"
                  y2="24.3353"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint6_linear_6441_1517"
                  x1="23.5154"
                  y1="24.8503"
                  x2="1.56539"
                  y2="18.0619"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint7_linear_6441_1517"
                  x1="23.4659"
                  y1="37.3954"
                  x2="1.51591"
                  y2="30.607"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint8_linear_6441_1517"
                  x1="8.92175"
                  y1="14.6874"
                  x2="25.8197"
                  y2="-0.947327"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint9_linear_6441_1517"
                  x1="19.7132"
                  y1="20.9748"
                  x2="36.6111"
                  y2="5.33986"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint10_linear_6441_1517"
                  x1="25.1159"
                  y1="24.1132"
                  x2="42.0138"
                  y2="8.47822"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>{" "}
                <linearGradient
                  data-v-535b4c40=""
                  id="paint11_linear_6441_1517"
                  x1="14.3134"
                  y1="17.8363"
                  x2="31.2112"
                  y2="2.20133"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop data-v-535b4c40="" stop-color="#FF6647"></stop>{" "}
                  <stop
                    data-v-535b4c40=""
                    offset="1"
                    stop-color="#FF6647"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <h6 data-v-535b4c40="">A home for your Digital Assets</h6>
            </svg>
          </div>
          <div className="container-1">
            <h6 data-v-535b4c40="">A home for your Digital Assets</h6>
            <p data-v-535b4c40="">
              Wallets are used to send, receive, store, and display digital
              assets like IXT and PIX.
            </p>{" "}
            <br /> <br />
            <h6 data-v-535b4c40="">A secure way to Log In</h6>
            <p data-v-535b4c40="">
              Instead of creating new accounts and passwords on every website,
              just connect your wallet.
            </p>
            <br />
            <br />
            <button> CREATE WALLET</button> <br />
            <br />
            <a
              data-v-535b4c40=""
              href="/web3/learn"
              class="button btn-shoe-more text-initial"
              aria-label="Claim Page"
            >
              {" "}
              Learn More{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netempire;
