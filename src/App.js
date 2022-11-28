
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/home.png" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>foot store</p>
        </div>
        </div>
        <ul className="headerRight d-flex">
          <li>
          <img width={17} height={17} src="/img/search.svg" />
            <span>1205$</span>
          </li>
          <li>
          <img width={17} height={17} src="/img/person.svg" />
          </li>
        </ul>
      </header>

      <div className="content">
      <h1 className="mb-40">All Sneakers</h1>

      <div className="d-flex">

      <div className="card">
        <img width={133} height={112} src="/img/foto2.jpg" alt="sneakers" />
        <p> womens sneakers</p>
        <div className="d-flex justify-between  align-center">
          <div className="d-flex flex-column">
        <p>price</p>
        <b>12222</b>
        </div>
        <button className="button">Add</button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112} src="/img/foto2.jpg" alt="sneakers" />
        <p> womens sneakers</p>
        <div className="d-flex justify-between  align-center">
          <div className="d-flex flex-column">
        <p>price</p>
        <b>12222</b>
        </div>
        <button className="button">Add</button>
        </div>
      </div>
      

      <div className="card">
        <img width={133} height={112} src="/img/foto2.jpg" alt="sneakers" />
        <p> womens sneakers</p>
        <div className="d-flex justify-between  align-center">
          <div className="d-flex flex-column">
        <p>price</p>
        <b>12222</b>
        </div>
        <button className="button">Add</button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112} src="/img/foto2.jpg" alt="sneakers" />
        <p> womens sneakers</p>
        <div className="d-flex justify-between  align-center">
          <div className="d-flex flex-column">
        <p>price</p>
        <b>12222</b>
        </div>
        <button className="button">Add</button>
        </div>
      </div>

      </div>

      </div>
    </div>
  );
}

export default App;
