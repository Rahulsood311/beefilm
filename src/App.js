import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/mainnav";
import Trending from "./pages/trending/Trending";
import Movies from "./pages/movies/Movies";
import Search from "./pages/search/Search";
import Series from "./pages/series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
