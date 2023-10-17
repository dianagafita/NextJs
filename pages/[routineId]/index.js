import { useRouter } from "next/router";
import MainNavigation from "../../Components/Header/MainNavigation";
import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import RoutinDetail from "../../Components/Header/RoutinDetail";
export default function Routine(props) {
  return (
    <RoutinDetail
      name={props.routines.name}
      products={props.routines.products}
    />
  );
}

export async function getStaticPaths() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://diana:diana@atlascluster.qc6evfi.mongodb.net/routines?retryWrites=true&w=majority"
  );
  const db = client.db();

  const routinelist = db.collection("routines");

  const routines = await routinelist.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: routines.map((routin) => ({
      params: { routineId: routin._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const routineId = context.params.routineId;
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://diana:diana@atlascluster.qc6evfi.mongodb.net/routines?retryWrites=true&w=majority"
  );
  const db = client.db();

  const routinelist = db.collection("routines");

  const selroutine = await routinelist.findOne({ _id: new ObjectId(routineId) });

  client.close();
  return {
    props: {
      routines: {
        id: selroutine._id.toString(),
        name: selroutine.name,
        products: selroutine.products,
      },
    },
  };
}
