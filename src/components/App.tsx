import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokemonsListPage from "../pages/PokemonsListPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pokemon/:id" component={PokemonDetailPage} />
        <Route exact path="/" component={PokemonsListPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
