import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// 1.Create Entry components.
// 2.Create props to replace the hardcoded data.
// 3.Import emojipedia constant
// 4.Map through the emojipedia array and render entry components.

function createEntry(emojiTerm){
  return (
    <Entry 
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
};

export default App;
