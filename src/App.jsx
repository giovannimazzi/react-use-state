export default function App() {
  return (
    <>
      <header className="p-2">
        <h1>Learn Web development</h1>
      </header>
      <div className="container px-3 py-5">
        <button className="btn btn-primary px-3 py-2 me-3">UNO</button>
        <button className="btn btn-primary px-3 py-2 me-3">DUE</button>
        <button className="btn btn-primary px-3 py-2 me-3">TRE</button>
        <div className="card my-5">
          <div className="card-body">
            <h2 className="h5 card-title">Card title</h2>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
