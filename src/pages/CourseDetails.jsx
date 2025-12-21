import React from 'react';
import { Container, Row, Col, Button, Accordion, Badge, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaClock, FaSignal } from 'react-icons/fa';

const CourseDetails = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    // Mock Data
    const courseData = {
        title: id === 'backend' ? t('BackEnd') : t('FrontEnd'),
        description: id === 'backend'
            ? "Deep dive into Python, Django, REST APIs, and Database management. Build scalable server-side applications."
            : "Master React.js, Hooks, Redux Toolkit, and connect with REST APIs. Build modern, interactive user interfaces.",
        duration: "12 " + t('Weeks'),
        level: id === 'backend' ? t('Advanced') : t('Beginner'),
        syllabus: [
            "Introduction & Environment Setup",
            "Core Concepts & Syntax",
            "Advanced Topics & Best Practices",
            "Project Implementation",
            "Deployment & Testing"
        ]
    };

    return (
        <div className="py-5">
            <div className="bg-dark text-white py-5 mb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <Badge bg="warning" text="dark" className="mb-3">{courseData.level}</Badge>
                            <h1 className="display-4 fw-bold">{courseData.title}</h1>
                            <p className="lead opacity-75">{courseData.description}</p>
                            <div className="d-flex gap-4 mt-4 text-white-50">
                                <span><FaClock className="me-2" />{courseData.duration}</span>
                                <span><FaSignal className="me-2" />{courseData.level}</span>
                            </div>
                        </Col>
                        <Col lg={4} className="mt-4 mt-lg-0 text-center">
                            <Card className="bg-light text-dark p-4 border-0 rounded-4">
                                <h3 className="fw-bold mb-3">$199.99</h3>
                                <Button variant="primary" size="lg" className="w-100 fw-bold rounded-pill mb-3">{t('EnrollNow')}</Button>
                                <small className="text-muted">30-Day Money-Back Guarantee</small>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col lg={8}>
                        <h3 className="fw-bold mb-4">{t('CourseContent')}</h3>
                        <Accordion defaultActiveKey="0" className="mb-5">
                            {courseData.syllabus.map((item, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>{`Module ${index + 1}: ${item}`}</Accordion.Header>
                                    <Accordion.Body>
                                        In this module, we will cover {item} in depth with practical examples and assignments.
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                        <h3 className="fw-bold mb-4">{t('Instructor')}</h3>
                        <Card className="border-0 shadow-sm p-4 rounded-4">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle bg-secondary me-4" style={{ width: '80px', height: '80px' }}></div>
                                <div>
                                    <h5 className="fw-bold">Dr. Code Master</h5>
                                    <p className="text-muted mb-0">Senior Software Engineer & Educator</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <h4 className="fw-bold mb-4">What you'll learn</h4>
                        <ul className="list-unstyled">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <li key={i} className="mb-3 d-flex align-items-start">
                                    <FaCheckCircle className="text-success mt-1 me-2 flex-shrink-0" />
                                    <span>Professional skill item {i} relating to {courseData.title}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;
