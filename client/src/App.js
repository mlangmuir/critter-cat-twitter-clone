import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";
import HomeFeed from "./HomeFeed";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import PageError from "./PageError";
import ScrollToTop from "./ScrollToTop";
import Support from "./Support";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route exact path="/page-error">
          <PageError />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path= "/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
