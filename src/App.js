import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // Route는 URL중 페이지를 넘겼을 때 더 붙는 코드를 이야기한다. localhost:3000/(~~~~)
  // path 에 / 만 붙이면 home page으로 이동한다.
  return (
    // react-router-dom@6 을 썼고 Switch(v5) 대신 Routes와 element을 사용
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
