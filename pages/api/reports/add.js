// api/reports/add
import {clientPromise, databaseName} from '../../../lib/mongodb'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, author, story, drug, route, dose, tags } = req.body;

        const words = story.trim().split(/\s+/).length;
        if (words > 2500) {
            res.status(400).json({ error: 'Your trip report must be under 2,500 words.' });
            return;
        }

        try {
            const client = await clientPromise;
            const db = client.db(databaseName);
            await db.collection('reports').insertOne({ title, author, story, drug, route, dose, tags });
            res.status(200).end();
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ error: 'An error occurred while trying to add a report.' });
        }
    } else {
        res.status(405).end();  // Method Not Allowed
    }
}
