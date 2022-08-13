import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const FIREBASE_URL = process.env.REACT_APP_FIREBASE;


/*const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
*/

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]); //initializing to empty array. this will contain array of meetups loaded from the database

  /**useEffect is a Hook that allows us to run certain code under certain conditions
   * It has two arguments - FIRST an Anonymous function that executes, SECOND external dependencies array (function executes when any of the dependency values change).
   * If the dependencies array is left empty, then the function will execute only ONCE
   *
   * If we do not use useEffect, the fetch code will be called whenever any useState updates and re-renders the component
   */
  useEffect(() => {
    setIsLoading(true);
    fetch(
      //fetch by default sends a GET request
      FIREBASE_URL
    )
      .then((response) => {
        //fetch returns a promise that has response passed to it
        return response.json(); //response.json() converts the JSON to STRING. this method also RETURNS a PROMISE that has to be handled by THEN
      })
      .then((data) => {

        //below is special code to parse FIREBASE database object and form required meetups array
        const meetups = [];
        for (const key in data) { //KEY is the (individual)ID in firebase, data is LIST of (individual)IDs
          const meetup = {
            id: key,
            ...data[key], //destructuring individual data items, basis the KEY
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
