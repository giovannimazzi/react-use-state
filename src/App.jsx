import { useState } from "react";
import languages from "./languages";

export default function App() {
  const [cardFields, setCardFields] = useState([
    languages[0].title,
    languages[0].description,
  ]);

  return (
    <>
      <header className="p-2">
        <h1>Learn Web development</h1>
      </header>
      <div className="container px-3 py-5">
        {languages.map(({ id, title, description }) => {
          return (
            <button
              key={id}
              className="btn btn-primary px-3 py-2 me-3"
              onClick={() => {
                setCardFields([title, description]);
              }}
            >
              {title}
            </button>
          );
        })}
        <div className="card my-5">
          <div className="card-body">
            <h2 className="h5 card-title">{cardFields[0]}</h2>
            <p className="card-text">{cardFields[1]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
