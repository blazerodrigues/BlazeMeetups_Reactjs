/*Link is a component provided by react-router-dom.
It is used INSTEAD of the <a> anchor tag.
<a> tag sends a NEW REQUEST to the server, to navigate to href URL.
Link DOES NOT send a new request. */
import { Link } from "react-router-dom";

/*Instead of plain CSS, we are using CSS MODULES functionality of react.
To avoid plain CSS CLASHING, we instead use CSS MODULES that are SCOPED to COMPONENTS.
File naming convention is ComponentName.modules.css
import classes(flexible-name) from './MainNavigation.module.css'
classes would be a JavaScript object and its properties would be the CSS classes defined in the CSS file*/
import classes from './MainNavigation.module.css';

import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header  className = {classes.header}>
      <div className={classes.logo}>Blaze Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>{" "}
            {/*to='/' is used instead of href='/'*/}
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;