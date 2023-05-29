import { useState } from 'react';
import { Modal, Button, Card, Form, Alert } from 'react-bootstrap';
import { drugData } from '../../lib/drugs';
import styles from './TripReports.module.css';

const TAGS = ['General', 'First Experience', 'Bad Trip', 'Good Trip', 'Health Problems', 'Health Benefits', 'Addiction', 'Mystical', 'Medical Use', 'Summary', 'Preparation', 'Recipe'];

function TripReports({ drugName, reports }) {

    const [show, setShow] = useState(false);
    const [tripReports, setTripReports] = useState(reports);
    const [newReport, setNewReport] = useState({ title: '', author: '', story: '', drug: '', route: '', dose: '', gender: '', weight: 0, tag: '' });
    const [wordCount, setWordCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [filter, setFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const maxWordCount = 5000;

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setNewReport(prev => ({ ...prev, drug: drugName.toLowerCase() }));
        setShow(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (["drug", "route", "gender", "weight", "tag"].includes(name)) {
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
                const updatedReports = await fetch(`/api/reports/${drugName.toLowerCase()}`);
                setTripReports(await updatedReports.json());
                setNewReport({ title: '', author: '', story: '', drug: '', route: '', dose: '', gender: '', weight: 0, tag: '' });
                handleClose();
                setShowAlert(true);
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
            <div className={styles.alert}>
                <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                    <strong>Success!</strong> Your trip report has been submitted.
                </Alert>
            </div>
            <div className={styles.btnContainer}>
                <Button variant="secondary" onClick={handleShow}>
                    Write a Trip Report
                </Button>
                <div className={styles.filters}>
                    <select defaultValue="" className="form-select" style={{ width: '180px' }} onChange={(e) => setFilter(e.target.value)}>
                        <option disabled>-- Filter by Tag --</option>
                        <option key="default" value="">All Tags</option>
                        {TAGS.map((tag, i) =>
                            <option key={i} value={tag}>{tag}</option>
                        )}
                    </select>
                    <select defaultValue="newest" className="form-select" style={{width: '150px'}} onChange={(e) => setSortOrder(e.target.value)}>
                        <option disabled>-- Sort Options --</option>
                        <option value="newest">Sort Newest</option>
                        <option value="oldest">Sort Oldest</option>
                    </select>
                </div>
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
                                {wordCount.toLocaleString()} / {maxWordCount.toLocaleString()} Words
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="tag">
                            <Form.Label>Tag (Optional)</Form.Label>
                            <Form.Select name="tag" value={newReport.tag} onChange={handleInputChange}>
                                <option hidden>-- Select Tag --</option>
                                <option disabled>-- Select Tag --</option>
                                {TAGS.map(tag => (
                                    <option key={tag} value={tag}>{tag}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={wordCount > maxWordCount}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <div className={styles.reportsContainer}>
                {tripReports
                .filter(report => filter === "" || report.tag === filter)
                .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
                })
                .map((report, index) => (
                    <Card key={index} className={styles.card}>
                        <Card.Body className={styles.cardBody}>
                            <div className={styles.flexCol}>
                                <Card.Title>{report.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">By: {report.author}</Card.Subtitle>
                            </div>
                            <div className={styles.tagsContainer}>
                                <span className={styles.tag}>{report.tag}</span>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default TripReports;