import React, { useState } from "react";
import { sculptureList } from "../data";
//지역변수는 렌더링 간 유지 되지 않음
//지역변수를 변경을 해도 렌더링 되지 않음
//리렌더링이 필요
export default function StateInReact() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <div className="state1">
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}
