import './App.css';
// import character from '/nft.png'; 
function App() {
  return (
    <div className="App">
      <header className="App-header flex">
        <div id="header-home">
          <div id="Logo"></div>
          <div class="header-content">CryptoHype</div>
        </div>
        <div className="flex">
          <div class="header-content">Market</div>
          <div class="header-content">Discover</div>
          <div class="header-content">About</div>
          <div class="header-content" >Artist</div>
        </div>
        <input class="header-content" type="text" placeholder='Searchs related to NFT'></input>
      </header>
      <div id="page-content" className='flex'>
        <div id="content-left">
          <h1>Best <span id="span">NFT</span> Collection for Your future</h1>
          <div class="buttons">
            <div className="btn">Explore Now</div>
            <div className="btn btn-border">Create NFT</div>
          </div>
          <div id="content-numbers" className='flex'>
            <div >
              <strong>62500</strong>
              <div>Collections</div>
            </div>
            <hr/>
            <div>
              <strong>14000 </strong>
              <div>auctions</div>
            </div>
            <hr/>
            <div>
              <strong>5200</strong>
              <div>Artist</div>
            </div>

          </div>
        </div>
        <div id="content-right">
          <img id="character" alt="nft" src={process.env.PUBLIC_URL + '/nft.png'}></img>
          <div id="nft-showcase" className='flex'>
            <div className='flex-col col-left'>
              <p>Current Bid</p>
              <strong>12.43 ETH</strong>
              <div className="btn">Place Bid</div>
            </div>
            <div className='flex-col col-right'>
              <p>Ends Inc</p>
              <strong>12:24:00</strong>
              <div className="btn btn-border btn-white">View NFT</div>  
            </div>

          </div>
        </div>
      </div>

      <div id="page-icons" className='flex'>
        <div className="flex">
          <img src={process.env.PUBLIC_URL + '/nft3.png'}/>
          <p style={{width:"150px", textAlign:"left"}}>trusted with 10 achievement</p>
        </div>
        <div className="flex">
          <img src={process.env.PUBLIC_URL + '/nft4.png'}/>
          <p style={{width:"150px", textAlign:"left"}}>Easy Buy & Submit Best NFT Art</p>
        </div>
        <div className="flex">
          <img src={process.env.PUBLIC_URL + '/nft5.png'}/>
          <p style={{width:"150px", textAlign:"left"}}>Get Discount Pro Membership</p>
        </div>
      </div>
      <div id="page-browse" className="flex">
        <h2>Latest <span>NFT</span> Artwork</h2>
        <a href="">View All Artwork</a>
      </div>

    </div>
  );
}

export default App;
