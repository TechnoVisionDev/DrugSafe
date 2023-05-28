// api/drugs/[drug].js
import { drugData } from "../../../data/drugs";

export default function handler(req, res) {
    const {
        query: { drug },
        method,
    } = req;

    switch (method) {
        case 'GET':
            // Find the drug by name
            const drugInfo = Object.values(drugData).find(d => d.name.toLowerCase() === drug.toLowerCase());
            if (!drugInfo) {
                res.status(404).json({ message: 'That drug does not exist.' });
            } else {
                res.status(200).json(drugInfo);
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}