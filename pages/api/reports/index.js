// api/reports
import { clientPromise, databaseName } from '../../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db(databaseName);
      const reports = await db.collection('reports').find().toArray();
      res.status(200).json(reports);
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred while trying to fetch reports.' });
    }
  } else {
    res.status(405).end();  // Method Not Allowed
  }
}
