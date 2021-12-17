import './App.css';
// import character from '/nft.png'; 
function App() {
  return (
    <div className="App">
      <header className="App-header flex-row">
        <p className="green">Soper.</p>
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
          <div id="notif">
            <p>2</p>
          </div>

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
      <div id="nav" className="flex-row">
        <div id="our-vision" className="flex-row">
          <img src={process.env.PUBLIC_URL + "/main2.png"}></img>
          <div id="line"></div>
          <p className="green">Our vision</p>
        </div>
        <div id="prev-next-container" className='flex-row'>
          <strong className="green">PREV</strong>
          <div id="slash"></div>
          <p>NEXT</p>
        </div>
        <div id="nav-numbers" className="flex-row white">
            <div className="flex-col">
              <p className="numbers">01</p>
              <div className="point"></div>
            </div>
            <div className="flex-col">
              <p className="numbers">02</p>
              <div className="point"></div>
            </div>
            <div className="flex-col current">
              <p className="numbers">03</p>
              <div className="point"></div>
            </div>
            <div className="flex-col">
              <p className="numbers">04</p>
              <div className="point"></div>
            </div>
            <div className="flex-col">
              <p className="numbers">05</p>
              <div className="point"></div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
