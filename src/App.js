import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/home";
import Detail from "./Routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">Hello</Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//6.0 이상 버전
//<Router>
//<Routes>
//<Route path="/" element={<Home />} />
//<Route path="/movie" element={<Detail />} />
//</Routes>
//</Router>
