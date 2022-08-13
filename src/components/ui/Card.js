import classes from './Card.module.css';

function Card(props){
    return <div className={classes.card}>
        {/*props.children is a special prop that passes what is between the opening and closing TAGS*/}
        {props.children} 
    </div>
}

export default Card;