//createContext can be used to maintain application wide context involving multiple components in React.js
import { createContext, useState } from "react";

//createContext(initialValue) method returns a React Component that has a context Provider
const FavoritesContext = createContext({
  favorites: [], //array of favorite meetups
  totalFavorites: 0, //total number of meetups marked as favorite
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  //below are helper functions that will be used to handle te userFavorites useState

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      //special case: we are using FUNCTION inside setUseState function, as the state update is dependant on the previous state. ELSE the state update might not be on the LATEST state (this is how react states work, they take time to update).
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(
        //filter KEEPS item if True. REMOVES item if False.
        (meetup) => {
          return meetup.id !== meetupId;
        }
      );
    });
  }


  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => {
      return meetup.id === meetupId;
    });
  }

  //below context variable will be used to hold the latest context
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    //we are also adding the helper functions created above to the context, so that the helper functions can be used to change the value of useState and consequently re-render the component(s)
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {" "}
      {/**when the value of the context changes, all child components are reevaluated */}
      {
        props.children /*props.children for passing the child components, for when this component is wrapped around other components*/
      }
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext; //this default export is the Component that was created by createContext(). This is not the FavoritesContextProvider function, it is exported separately above (named export).
