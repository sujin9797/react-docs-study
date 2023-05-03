import React, { useState } from "react";

//render != Dom update
//render = 컴포넌트 실행

// 렌더발생 -> 첫 렌더링 , 컴포넌트 state 업데이트 된 경우
// 렌더단계 -> 루트컴포넌트 호출, 재귀적으로 호출
// 커밋

export default function RenderAndCommit() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
