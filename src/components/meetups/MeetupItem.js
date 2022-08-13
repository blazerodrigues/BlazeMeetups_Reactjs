import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

//useContext is a HOOK that is used for CONTEXT functionality
import { useContext } from "react";
//FavoritesContext is the default export of the below JS file. FavoritesContext was created using createContext(initialValue)
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  // we are fetching the CURRENT CONTEXT using useContext(object of createcontext);
  const favoritesCtx = useContext(FavoritesContext);

  //using the function that we got from current context
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite?"Remove from Favorites":"Add to Favorites"}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
