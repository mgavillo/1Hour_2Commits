import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header-home">
          <div id="Logo"></div>
          <div class="header-content">CryptoHype</div>
        </div>
        <div id="header-browse">
          <div class="header-content">Market</div>
          <div class="header-content">Discover</div>
          <div class="header-content">About</div>
          <div class="header-content" >Artist</div>
        </div>
        <input class="header-content" type="text"></input>
      </header>
      <div id="page-content">
        <div id="content-left">
          <h1>Best NFT Collection for Your future</h1>
          <div class="buttons">
            <button>Explore Now</button>
            <button>Create NFT</button>
          </div>
          <div id="content-numbers">
            <div>
              <strong>62500</strong>
              <div>Collections</div>
            </div>
            <br></br>
            <div>
              <strong>14000 </strong>
              <div>auctions</div>
            </div>
            <br></br>
            <div>
              <strong>5200</strong>
              <div>Artist</div>
            </div>

          </div>
        </div>
        <div id="content-right">
          <img alt="nft" src="../public/nft.png"></img>
          <div id="nft-showcase">
            <div>Current Bid</div>
            <strong>12.43 ETH</strong>
            <button>Place Bid</button>
            <div>Ends Inc</div>
            <strong>12:24:00</strong>
            <button>View NFT</button>
          </div>
        </div>
      </div>

      <div id="page-icons">
        <div>
          <div>image</div>
          <p>trusted with 10 achievement</p>
        </div>
        <div>
          <div>image</div>
          <p>Easy Buy & Submit Best NFT Art</p>
        </div>
        <div>
          <div>image</div>
          <p>Get Discount Pro Membership</p>
        </div>
      </div>
      <div id="page-browse">
        <h2>Latest NFT Artwork</h2>
        <a href="">View All Artwork</a>
      </div>

    </div>
  );
}

export default App;
