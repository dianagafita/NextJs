import { useRouter } from "next/router";
import RoutinesList from "../../Components/Header/RoutinesList";
import { MongoClient } from "mongodb";
import classes from "../../Components/Header/RutineForm.module.css";

function RoutineList(props) {
  const router = useRouter();

  const backH = () => {
    router.push("/");
  };

  async function deleteRoutine(props){
    const response = await fetch('/api/new-routine', {
      method: 'DELETE',
      body: JSON.stringify(props._id),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/routinelist");

    } else {
      console.error('Failed to fetch data');
    }
}
  return (
    <>
      <RoutinesList onDelete={deleteRoutine} routines={props.routines}/>
     <div className={classes.actions}><button onClick={backH}>Back</button></div> 
    </>
  );
}

export default RoutineList;

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://diana:diana@atlascluster.qc6evfi.mongodb.net/routines?retryWrites=true&w=majority'  );
  const db = client.db();

  const routinelist = db.collection('routines');

  const routines = await routinelist.find().toArray();
  //const routinesdelete = await routinelist.find({},{_id:1}).toArray();

  client.close();

  return {
    props: {
        routines: routines.map((routin) => ({
        name: routin.name,
        products:routin.products,
        id:routin._id.toString()
      })),
    },
    revalidate: 1,
  };
}