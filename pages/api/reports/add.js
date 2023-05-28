// api/reports/add
import {clientPromise, databaseName} from '../../../lib/mongodb'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, author, story, drug } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db(databaseName);
            await db.collection('reports').insertOne({ title, author, story, drug });
            res.status(200).end();
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ error: 'An error occurred while trying to add a report.' });
        }
    } else {
        res.status(405).end();  // Method Not Allowed
    }
}
