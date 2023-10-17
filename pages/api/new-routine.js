import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://diana:diana@atlascluster.qc6evfi.mongodb.net/routines?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('routines');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();


    res.status(201).json({ message: 'Routine added!' });
  }

  if (req.method === 'DELETE') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://diana:diana@atlascluster.qc6evfi.mongodb.net/routines?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('routines');

    const result = await meetupsCollection.deleteOne(data.name);

    console.log(result);

    client.close();


    res.status(201).json({ message: 'Routine deleted!' });
  }
}

export default handler;