import { useState } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import { drugData } from '../../lib/drugs';
import styles from './TripReports.module.css';

const TAGS = ['First Experience', 'Bad Trip', 'Good Trip', 'Health Problems', 'Health Benefits', 'Addiction', 'Mystical', 'Medical Use', 'Summary', 'Preparation'];

function TripReports({drugName, reports}) {

    const [show, setShow] = useState(false);
    const [tripReports, setTripReports] = useState(reports);
    const [newReport, setNewReport] = useState({ title: '', author: '', story: '', drug: '', route: '', dose: '', gender: '', weight: 0, tags: [] });
    const [wordCount, setWordCount] = useState(0);
    const maxWordCount = 5000;

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setNewReport(prev => ({...prev, drug: drugName.toLowerCase()}));
        setShow(true);
    }; 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "drug" || name === "route") {
            setNewReport({ ...newReport, [name]: value });
        } else if (["dose", "title"].includes(name)) {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount <= 10 && value.length <= 50) {
                setNewReport({ ...newReport, [name]: value });
            }
        } else if (name === "author") {
            if (value.length <= 30) {
                setNewReport({ ...newReport, [name]: value.replace(/\s/g, '') });
            }
        } else if (name === "story") {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount <= maxWordCount) {
                setNewReport({ ...newReport, [name]: value });
                setWordCount(wordCount);
            }
        } else if (["gender", "weight"].includes(name)) {
            setNewReport({ ...newReport, [name]: value });
        } 
    };      

    // Handles submission of trip reports to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newReport.title.trim() && newReport.author.trim() && newReport.story.trim() && newReport.dose.trim() && newReport.drug && newReport.route) {
            try {
                const response = await fetch('/api/reports/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newReport),
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const updatedReports = await fetch('/api/reports');
                setTripReports(await updatedReports.json());
                setNewReport({ title: '', author: '', story: '', dose: '', tags: [] });
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

            <Modal show={show} onHide={handleClose} className='reportModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Write a Trip Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.modalRow}>
                            <Form.Group controlId="drug" className={styles.flexGroup}>
                                <Form.Label>Drug</Form.Label>
                                <Form.Select name="drug" value={newReport.drug} onChange={handleInputChange} required>
                                    <option disabled>-- Select Drug --</option>
                                    {Object.values(drugData).map(drug => (
                                        <option key={drug.name.toLowerCase()} value={drug.name.toLowerCase()}>{drug.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="route" className={styles.flexGroup}>
                                <Form.Label>Route of Administration</Form.Label>
                                <Form.Select name="route" value={newReport.route || ''} onChange={handleInputChange} required>
                                    <option hidden>-- Select ROA --</option>
                                    <option disabled>-- Select ROA --</option>
                                    <option key='oral' value='oral'>Oral</option>
                                    <option key='smoked' value='smoked'>Smoked</option>
                                    <option key='insufflated' value='insufflated'>Insufflated</option>
                                    <option key='rectal' value='rectal'>Rectal</option>
                                    <option key='intravenous' value='intravenous'>Intravenous</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className={styles.modalRow}>
                            <Form.Group controlId="gender" className={styles.flexGroup}>
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" value={newReport.gender} onChange={handleInputChange} required>
                                    <option hidden>-- Select Gender --</option>
                                    <option disabled>-- Select Gender --</option>
                                    <option key='male' value='male'>Male</option>
                                    <option key='female' value='female'>Female</option>
                                    <option key='nonbinary' value='nonbinary'>Nonbinary</option>
                                    <option key='pnta' value='Prefer Not to Answer'>Prefer Not to Answer</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="weight" className={styles.flexGroup}>
                                <Form.Label>Body Weight (kg)</Form.Label>
                                <Form.Control type="number" placeholder="Enter weight in kilograms" name="weight" value={newReport.weight} onChange={handleInputChange} min={0} max={650} step={1} required />
                            </Form.Group>
                        </div>

                        <Form.Group controlId="dose">
                            <Form.Label>Dose</Form.Label>
                            <Form.Control type="text" placeholder="Enter dose taken" name="dose" value={newReport.dose} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name="title" value={newReport.title} onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="author" value={newReport.author} onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group controlId="story">
                            <Form.Label>Trip Report</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tell us about your experience" name="story" value={newReport.story} onChange={handleInputChange} maxLength={100000} required />
                            <Form.Text className="text-muted">
                                {wordCount.toLocaleString()} / 2,500 Words
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="tags">
                            <Form.Label>Tags (Optional)</Form.Label>
                            <div>
                                {TAGS.map(tag => (
                                    <Button
                                        key={tag}
                                        variant="outline-success"
                                        active={newReport.tags.includes(tag)}
                                        onClick={() => {
                                            const tagIndex = newReport.tags.indexOf(tag);
                                            let newTags;
                                            if (tagIndex > -1) {
                                                // The tag already exists, remove it
                                                newTags = [...newReport.tags];
                                                newTags.splice(tagIndex, 1);
                                            } else {
                                                // The tag does not exist, add it
                                                newTags = [...newReport.tags, tag];
                                            }
                                            setNewReport({ ...newReport, tags: newTags });
                                        }}
                                        className={styles.tagButton}
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" disabled={wordCount > maxWordCount}>
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