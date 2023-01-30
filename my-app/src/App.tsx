import "./App.css";
import React, { useEffect, useState } from "react";
import booksInfo from "./api/booksInfo";
// import axios from "axios";

function App() {
  const [info, setInfo] = useState([] as any[]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await booksInfo.get("/data");
        setInfo(res.data);
        // setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {info.map((obj, i) => {
        return (
          <div key={i} className="row">
            <div className="col">
              <img className="img" src={obj.source} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
