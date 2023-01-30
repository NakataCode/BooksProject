import React from "react";
import "./bookPageComponent.css";

function bookPageComponent() {
  return (
    <div>
      <div className="containerSecond">
        <img src="/images/sapiens.png" alt="Book"></img>
        <div className="ContainerThird">
          <h1>Sapiens</h1>
          <h2>Yuval Noah Harari</h2>
          <p className="discription">
            100,000 years ago, at least six human species inhabited the earth.
            Today there is just one. Us. Homo sapiens. How did our species
            succeed in the battle for dominance? Why did our foraging ancestors
            come together to create cities and kingdoms? How did we come to
            believe in gods, nations and human rights; to trust money, books and
            laws; and to be enslaved by bureaucracy, timetables and consumerism?
            And what will our world be like in the millennia to come? In
            Sapiens, Dr Yuval Noah Harari spans the whole of human history, from
            the very first humans to walk the earth to the radical – and
            sometimes devastating – breakthroughs of the Cognitive, Agricultural
            and Scientific Revolutions. Drawing on insights from biology,
            anthropology, paleontology and economics, he explores how the
            currents of history have shaped our human societies, the animals and
            plants around us, and even our personalities. Have we become happier
            as history has unfolded? Can we ever free our behaviour from the
            heritage of our ancestors? And what, if anything, can we do to
            influence the course of the centuries to come? Bold, wide-ranging
            and provocative, Sapiens challenges everything we thought we knew
            about being human: our thoughts, our actions, our power ... and our
            future
          </p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <input type="text"></input>
        </div>
        <div className="checkbox-wrapper-2">
          <input type="checkbox" className="sc-gJwTLC ikxBAC" />
          <span className="available">available</span>
        </div>
      </div>
    </div>
  );
}

export default bookPageComponent;