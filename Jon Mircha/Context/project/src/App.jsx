import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.react.dev/learn/scaling-up-with-reducer-and-context"
        rel="noreferreer"
      >
        Documentacion
      </a>
      <hr />
      <MyPage></MyPage>
      <hr />
      <MyPageContext />
    </div>
  );
}

export default App;
