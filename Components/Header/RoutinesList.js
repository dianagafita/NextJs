import { useEffect } from "react";
import RoutineItem from "./RoutineItem";
import { useRouter } from "next/router";
function RoutinesList(props) {

  const router = useRouter();

  return (
    <ul>
      {props.routines.map((routin) => (
        <RoutineItem onDelete= {props.onDelete}
          key={routin.id}
          id={routin.id}
          name={routin.name}
          products={routin.products}
        />
      ))}
    </ul>
  );
}

export default RoutinesList;
