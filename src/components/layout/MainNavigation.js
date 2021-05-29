import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Melo-Aid</div>
      <nav>
        <ul>
          <li>
            <Link to="./">Main Page</Link>
          </li>

          <li>
            <Link to="./favourites">Upload</Link>
          </li>
          <li>
            <Link to="./new-meetup">Give Feedback</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
