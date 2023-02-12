import "../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//API link
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
      {info.map((obj, index) => {
        return (
          <div key={index} className="firstDiv">
            <Link to={`/book/${index + 1}`}>
              <img className="img" src={obj.source} alt="book" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
