// 이벤트 버블링, 캡쳐링에 대한 시각자료 https://domevents.dev/
// React 호스트 컴포넌트의 이벤트 리스너는 기본적으로 버블링에 대한 핸들러를 받는다.
// 캡쳐링 단계에서 이벤트를 포착하고 싶다면 onClickCapture에 핸들러를 넘겨주면 된다.
// onClick 내부 먼저, div (순서변경 : div 안에 onClickCapture 사용)
export default function Event3() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}

// 위 예제에서 div의 onClick을 막고 싶다면 버튼에서 전파를 막아주면 된다.
