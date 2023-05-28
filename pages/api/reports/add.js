// api/reports/add
import {clientPromise, databaseName} from '../../../lib/mongodb'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { title, author, story, drug, route, dose, gender, weight, tag } = req.body;

        const words = story.trim().split(/\s+/).length;
        if (words > 2500) {
            res.status(400).json({ error: 'Your trip report must be under 5,000 words.' });
            return;
        }

        const titleWordCount = title.trim().split(/\s+/).length;
        const authorWordCount = author.trim().split(/\s+/).length;
        const doseWordCount = dose.trim().split(/\s+/).length;
        if (titleWordCount > 10 || authorWordCount > 1 || doseWordCount > 10) {
            res.status(400).json({ error: 'One of your fields is too long.' });
            return;
        }

        if (!Number(weight)) {
            res.status(400).json({ error: 'Body weight must be a number.' });
            return;
        }

        if (!tag) {
            tag = 'General';
        }

        try {
            const client = await clientPromise;
            const db = client.db(databaseName);
            await db.collection('reports').insertOne({ title, author, story, drug, route, dose, gender, weight: Math.floor(weight), date: new Date(), tag });
            res.status(200).end();
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ error: 'An error occurred while trying to add a report.' });
        }
    } else {
        res.status(405).end();  // Method Not Allowed
    }
}
