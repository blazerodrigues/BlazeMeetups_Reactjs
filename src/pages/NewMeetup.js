import NewMeetupForm from "../components/meetups/NewMeetupForm";

//useHistory is a react hook. We can manipulate/navigate the browser history/routes
import { useHistory } from "react-router-dom";

const FIREBASE_URL = process.env.REACT_APP_FIREBASE;

function NewMeetupPage() {
  //useHistory() gives us a history object with methods that can be used to navigate to different routes
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    /*FETCH is used in vanilla JS to send requests. First parameter is the URL, second parameter is an object to be sent with the request 
     fetch returns a PROMISE which can be handled in THEN*/
    fetch(
      FIREBASE_URL,
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(
        ()=>{
            history.replace("/"); //history.replace("url route") .. the replace method will redirect to the route but will not allow to go back to the previous page. history.push() will however allow to go back to the previous page.
        }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
