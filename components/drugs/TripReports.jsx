import { useState, useEffect } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import styles from './TripReports.module.css';

function TripReports() {
    const [show, setShow] = useState(false);
    const [tripReports, setTripReports] = useState([]);
    const [newReport, setNewReport] = useState({ title: '', author: '', story: '', drug: '' });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch('/api/reports')
        .then(response => response.json())
        .then(data => setTripReports(data))
        .catch(error => console.log(error));
    }, []);

    const handleInputChange = (e) => {
        setNewReport({ ...newReport, [e.target.name]: e.target.value });
    };

    // Handles submission of trip reports to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newReport.title.trim() && newReport.author.trim() && newReport.story.trim() && newReport.drug.trim()) {
            try {
                const response = await fetch('/api/add-report', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newReport),
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const updatedReports = await fetch('/api/reports');
                setTripReports(await updatedReports.json());
                setNewReport({ title: '', author: '', story: '', drug: '' });
                handleClose();
            } catch (error) {
                console.error('An error occurred:', error);
            }
        } else {
            alert('All fields are required.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Trip Reports</h2>
            <div className={styles.btnContainer}>
                <Button variant="secondary" onClick={handleShow}>
                    Write a Trip Report
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Write a Trip Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name="title" value={newReport.title} onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter author name" name="author" value={newReport.author} onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group controlId="story">
                            <Form.Label>Story</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Write your story" name="story" value={newReport.story} onChange={handleInputChange} maxLength={50000} required />
                            <Form.Text className="text-muted">
                                {newReport.story.length}/50,000
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <div className="tripReports">
                {tripReports.map((report, index) => (
                    <Card key={index} className="tripReport">
                        <Card.Body>
                            <Card.Title>{report.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{report.author}</Card.Subtitle>
                            <Card.Text>
                                {report.story.split(" ", 50).join(" ") + '...'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default TripReports;