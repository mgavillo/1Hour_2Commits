import './App.css';
// import character from '/nft.png'; 
function App() {
  return (
    <div className="App">
      <header className="App-header flex-row">
        <p>Soper.</p>
        <div className="flex-row">
          <p>Home</p>
          <p>About</p>
          <p>Shop</p>
          <p>Gallery</p>
          <p>Blog</p>
        </div>
        <div className="flex-row white">
          <div id="input-container" className="flex-row">
            <img src={process.env.PUBLIC_URL + "/search.ico"}/>
            <input placeholder="Search" type="text"></input>
          </div>

          <p>Cart</p>
          <div>img</div>
        </div>
      </header>
      <div id="content" className="flex-row">
        <div id="content-text" className="flex-col">
          <p className="green">The most generic</p>
          <h1>Natural Ecosystem</h1>
          <p>The basic scientific principle behind terrarium is that the glass enclosure traps moisture produced by evaporation from the soil</p>
          <div className="flex-row green">
            <div>arrow</div>
            <h2>DETAIL</h2>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/main.png"}/>
        <div id="content-socials" className="flex-col white">
          <strong className="vertical-text">SOCIAL</strong>
          <hr></hr>
          <strong>fb</strong>
          <strong>ig</strong>
          <strong>tw</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
