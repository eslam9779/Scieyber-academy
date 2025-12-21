import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaReact, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const CategoriesSection = () => {
    const { t } = useTranslation();

    const categories = [
        { id: 'frontend', title: t('FrontEnd'), icon: <FaReact size={50} color="#61DAFB" />, desc: "Master React.js, Redux, and modern UI libraries.", color: "#e3f2fd" },
        { id: 'backend', title: t('BackEnd'), icon: <FaPython size={50} color="#306998" />, desc: "Build robust APIs with Python, Django, or Flask.", color: "#ffecb3" }
    ];

    return (
        <section className="py-5 position-relative">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: 'var(--text-main)' }}>{t('Categories')}</h2>
                    <div className="mx-auto" style={{ height: '4px', width: '60px', background: '#0d6efd', borderRadius: '2px' }}></div>
                </div>
                <Row className="justify-content-center">
                    {categories.map((cat, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                            <motion.div
                                whileHover={{ y: -15, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="h-100 shadow-lg text-center py-5 overflow-hidden position-relative" style={{ borderRadius: '25px', background: 'var(--card-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--card-border)' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #3b82f6, #f59e0b)' }}></div>
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm" style={{ width: '120px', height: '120px', background: 'rgba(59, 130, 246, 0.1)' }}>
                                            {cat.icon}
                                        </div>
                                        <Card.Title className="fw-bold mt-3 h3" style={{ color: 'var(--text-main)' }}>{cat.title}</Card.Title>
                                        <Card.Text className="px-3 mb-4 flex-grow-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                            {cat.desc}
                                            <br /><br />
                                            <ul className="list-unstyled text-start small opacity-75" style={{ color: 'var(--text-secondary)' }}>
                                                <li>✔️ {t('Duration')}: 12 {t('Weeks')}</li>
                                                <li>✔️ {t('Beginner')} to Pro</li>
                                                <li>✔️ Projects included</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to={`/course/${cat.id}`} className="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow-sm text-uppercase" style={{ letterSpacing: '1px' }}>
                                            {t('LearnMore')}
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CategoriesSection;
