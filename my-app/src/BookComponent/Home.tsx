import "../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import booksInfo from "../api/booksInfo";

const Home: React.FC = () => {
  const [info, setInfo] = useState([] as any[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await booksInfo.get(`/data`);
        setInfo(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {info.map((obj) => (
        <div key={obj.id} className="firstDiv">
          <Link to={`/book/${obj.id}`}>
            <img className="img" src={obj.source} alt={obj.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
