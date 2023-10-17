import { useRouter } from 'next/router';
import { Fragment } from 'react';
import classes from "../../Components/Header/RutineForm.module.css";


function RoutineItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }
 const deleteH =()=>
 {
  props.onDelete(props.id)
 }
  return (
    <Fragment>
    <li >
        <div >
          <h3>{props.name}</h3>
          <h3>{props.products}</h3>
        </div>
       
    </li>
    <div className={classes.actions}>
    <button onClick={deleteH}>Delete</button>
    <button onClick={showDetailsHandler}>Details</button>
    </div>
    </Fragment>
  );
}

export default RoutineItem;
