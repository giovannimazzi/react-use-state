import { useState } from "react";
import DetailsButton from "./components/DetailsButton";
import DetailsCard from "./components/DetailsCard";

import languages from "./languages";

const defaultTitle = "---";
const defaultDescription = "Nessun linguaggio selezionato.";

export default function App() {
  const [cardFields, setCardFields] = useState([
    0,
    defaultTitle, //languages[0].title,
    defaultDescription, //languages[0].description,
  ]);

  const handleCardFields = (language) => {
    setCardFields(() =>
      cardFields[0] === language.id
        ? [0, defaultTitle, defaultDescription]
        : [language.id, language.title, language.description],
    );
  };

  return (
    <>
      <header className="p-2">
        <h1>Learn Web development</h1>
      </header>
      <div className="container px-3 py-5">
        {languages.map((language) => (
          <DetailsButton
            key={language.id}
            title={language.title}
            isActive={cardFields[0] === language.id}
            parentFnc={() => {
              handleCardFields(language);
            }}
          />
        ))}
        <DetailsCard title={cardFields[1]} description={cardFields[2]} />
      </div>
    </>
  );
}
