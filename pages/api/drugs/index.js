// api/drugs
import { drugData } from "../../../data/drugs";

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            // Return a list of all drugs
            res.status(200).json(Object.values(drugData));
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}