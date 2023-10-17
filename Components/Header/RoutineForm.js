import classes from "./RutineForm.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
export default function RutineForm(props) {
  const [inputValid, setInputValid] = useState(false);
  const nameRef = useRef();
  const productListRef = useRef();
  const router = useRouter();
 
 
  const clickh = () => {
    if(!inputValid)
    {return;}
    else{
    router.push("/");
    }
  };

  const submitHeader = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredProductList = productListRef.current.value;
    if (enteredName === 0 && enteredProductList === 0) {
      setInputValid(false);
      return;
    }

    const routine = {
      name: enteredName,
      products: enteredProductList,
    };

    setInputValid(true);

    console.log(routine);
    props.onAddRoutine(routine);
  };

  return (
    <form className={classes.form} onSubmit={submitHeader}>
      <div className={classes.control}>
        <label htmlFor="name"> Day/Night time routine </label>
        <input type="text" id="name" ref={nameRef}></input>
      </div>
      {!inputValid && <p>Please enter data.</p>}
      <div className={classes.control}>
        <label htmlFor="products"> The list of products </label>
        <textarea
          ref={productListRef}
          id="products"
          required
          rows="5"
        ></textarea>
        {!inputValid && <p>Please enter data.</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={clickh}>Add routine</button>
      </div>
    </form>
  );
}
