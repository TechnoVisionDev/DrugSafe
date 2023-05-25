import { drugData } from "../../../data/drugs";

export default function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            if (!drugData[id]) {
                res.status(404).json({ message: 'That drug does not exist.' });
            } else {
                res.status(200).json(drugData[id]);
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}