import './App.scss';
import {ReactComponent as Logo} from "./assets/logo.svg"
import {ReactComponent as Medias} from "./assets/medias.svg"
import {ReactComponent as Wallet} from "./assets/wallet.svg"
import {ReactComponent as Svg1} from "./assets/Group 22.svg"
import {ReactComponent as Svg2} from "./assets/Group 21.svg"
import {ReactComponent as Svg3} from "./assets/Group 19.svg"
import {ReactComponent as Svg4} from "./assets/Group 20.svg"
import {ReactComponent as Svg5} from "./assets/Group 19.1.svg"

// import character from '/nft.png'; 
function App() {
  return (
    <div className="App">
      <header className="App-header flex-row">
        <div className="flex-row">
          <Logo id="logo"/>
          <p>How it works</p>
          <p>Blog</p>
          <p>Support</p>
        </div>
        <Medias id="medias"/>
      </header>
      <div id="home" className='flex-row'>
        <div className='flex-col'>
          <h1>Create your first decentralized wallet</h1>
          <p>The easiest way to manage multiple cryptocurrency assets</p>
          <div id="wallet-button">CREATE WALLET</div>
        </div>
        <Wallet/>
      </div>
      <div id="page-content" className='flex-row'>
        <div id="left-col">
          <p>Dappy is light wallet powered by Blockstack. It uses Gaia decentralized storage and encryption option. Dappy doesn't store or proceed user private key, the all data are securely stored in the Gaia. Dappy was created by the BC Net that trust in crypto and decentralized applications.</p>
          <h2>Free and open source</h2>
          <Svg1/>
          <p>Fully open and transparent wallet. Our code is <strong>open source</strong> and trusted by Blockstack Team.</p>
          <h2>Roadmap</h2>
          <Svg2/>
        </div>
        <div id="right-col">
          <h2>Multi-currencies</h2>
          <Svg3/>
          <p>Receive, send and store the most popular coins, like Bitcoin, Ethereum, Litecoin, Dash and lots more.</p>
          <h2>Tokens</h2>
          <Svg4/>
          <p>Full support for any tokens on Ethereum network Bitcoin tokens (Omnilayer) is coming soon.</p>
          <h2>Exchange</h2>
          <p>In-app exchange is supported by ShapeShift, it allows to convert coins to each other in the most intuitive and easiest way.</p>
          <Svg5/>
        </div>
      </div>
      <footer className='flex-row'>
        <div className='flex-col'>
          <h3>About</h3>
          <p>Introducing</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className='flex-col'>
          <h3>Contact</h3>
          <p>hello@dappywallet.com</p>
          <Medias/>
        </div>
        <div className='flex-col'>
          <h3>Newsletter</h3>
          <p>Please enter your e-mail if want to receive updates</p>
          <div id="input-wrapper" className='flex-row'>
            <input type="text" placeholder='Your e-mail'/>
            <div id="subscribe-btn">subscribe</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
