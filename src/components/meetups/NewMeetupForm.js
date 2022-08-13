import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

//useRef is a react hook (like useState). useRef will be used to set reference to DOM elements to get direct access to DOM elements
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    //event argument is automatically passed by javascript onSubmit of the form
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value; //refobject.current.value will return the current value of the DOM that the ref is reffering to.
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription
    }

    // console.log(meetupData);
    props.onAddMeetup(meetupData);

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        {/*className and htmlFor are two important jsx exceptions to remember*/}
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />{" "}
          {/* ref is a special prop in react which is used for useRef hook */}{" "}
          {/*We are not using onChange={set useState} as it would update on every keypress*/}
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
