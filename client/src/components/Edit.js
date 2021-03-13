import React, {useState, useEffect} from "react";


export default function Edit() {
  const [oneEntry, setOneEntry] = useState([]);

  let temp_id = window.location.pathname.replace("/Edit/", "")

  useEffect(() => {
    if (oneEntry.length === 0 ) {
      fetch ("/api/" + temp_id)
      .then((res) =>res.json())
      .then((restList) => {
        setOneEntry(restList);
      });
    }
  })

  return (
    <div>
      <hr />
      <h1 id="page-headers">This is the edit page</h1>
      {/* <h3 key={index + "-author"}>{entry.author}</h3> */}

      <button className="on-page-buttons">Edit Entry Data</button>
      <button className="on-page-buttons">Delete Entry</button>
    </div>
    
  );
}
