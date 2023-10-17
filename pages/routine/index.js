"use client"

import { useRouter } from "next/router";
import RutineForm from "../../Components/Header/RoutineForm";

export default function Routine() {

  //const router = useRouter();

  async function addNewRoutine(enteredData){
    const response = await fetch('/api/new-routine', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Failed to fetch data');
    }
    
   // router.push('/');
  }  

  return (
    <>
      <p >Create your routine </p> 
      <RutineForm onAddRoutine={addNewRoutine}/>
    </>
  );
}
