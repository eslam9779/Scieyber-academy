import React from 'react';
import { Container, Row, Col, Button, Accordion, Badge, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaClock, FaSignal } from 'react-icons/fa';

const CourseDetails = () => {

    const { id } = useParams();

    const { t } = useTranslation();

    // Updated Data based on user requirements
    const courseData = {
        title: id === 'backend' ? t('BackEnd') : t('FrontEnd'),
        description: id === 'backend' ? t('BackEndDesc') : t('FrontEndDesc'),
        duration: "12 " + t('Weeks'),
        level: id === 'backend' ? t('Advanced') : t('Beginner'),
        price: id === 'backend' ? "600" : "500",
        instructor: {
            name: id === 'backend' ? t('Instructor_BE') : t('Instructor_FE'),
            role: "Senior Software Engineer & Educator",
            initials: id === 'backend' ? "MA" : "EA"
        },
        syllabus: id === 'backend'
            ? [t('BE_Module1'), t('BE_Module2'), t('BE_Module3'), t('BE_Module4'), t('BE_Module5')]
            : [t('FE_Module1'), t('FE_Module2'), t('FE_Module3'), t('FE_Module4'), t('FE_Module5'), t('FE_Module6')],
        whatYouWillLearn: id === 'backend'
            ? ["Python Programming", "SQL Database Management", "Django Framework Foundations", "REST API Development", "Scalable Server Architecture"]
            : ["HTML5 & CSS3 Mastery", "JavaScript (ES6+) Core Concepts", "jQuery Library & UI Interactions", "Bootstrap Responsive Design", "React JS Modern Framework"]
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
                            <Card className="bg-light text-dark p-4 border-0 rounded-4 shadow-lg">
                                <h3 className="fw-bold mb-3">{courseData.price} {t('Currency')}{t('PriceMonth')}</h3>
                                <Button variant="primary" size="lg" className="w-100 fw-bold rounded-pill mb-0 py-3">{t('EnrollNow')}</Button>
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
                                    <Accordion.Header>{t('Module')} {index + 1}: {item}</Accordion.Header>
                                    <Accordion.Body>
                                        {t('ModuleDescription')} {item} {t('ModuleDescriptionEnd')}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                        <h3 className="fw-bold mb-4">{t('Instructor')}</h3>
                        <Card className="border-0 shadow-sm p-4 rounded-4">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle bg-primary-custom text-dark d-flex align-items-center justify-content-center fw-bold fs-4 me-4" style={{ width: '80px', height: '80px' }}>
                                    {courseData.instructor.initials}
                                </div>
                                <div>
                                    <h5 className="fw-bold">{courseData.instructor.name}</h5>
                                    <p className="text-muted mb-0">{courseData.instructor.role}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={4} className="mt-4 mt-lg-0">
                        <h4 className="fw-bold mb-4">{t('WhatYouWillLearn')}</h4>
                        <ul className="list-unstyled">
                            {courseData.whatYouWillLearn.map((item, i) => (
                                <li key={i} className="mb-3 d-flex align-items-start">
                                    <FaCheckCircle className="text-success mt-1 me-2 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <style>{`
                [dir="rtl"] .accordion-button::after {
                    margin-left: 0;
                    margin-right: auto;
                }
            `}</style>
        </div>
    );
};

export default CourseDetails;
