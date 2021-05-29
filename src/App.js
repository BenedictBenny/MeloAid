import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Ap from "./pages/Upload";
import FeedbackPage from "./pages/Feedback";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainPage></MainPage>
        </Route>
        <Route path="/new-meetup">
          <FeedbackPage />
        </Route>
        <Route path="/favourites">
          <Ap />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
