import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaReact, FaPython, FaArrowRight, FaClock, FaLayerGroup, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
    const { t ,i18n } = useTranslation();

    const categories = [
        {
            id: 'frontend',
            title: t('FrontEnd'),
            icon: <FaReact />,
            desc: t('FrontEndDesc'),
            color: "#61DAFB",
            duration: `4 ${t('Months')}`,
            level: "Beginner to Pro"
        },
        {
            id: 'backend',
            title: t('BackEnd'),
            icon: <FaPython />,
            desc: t('BackEndDesc'),
            color: "#306998",
            duration: `4 ${t('Months')}`,
            level: "Beginner to Pro"
        }
    ];

    return (
        <section className="py-5 position-relative overflow-hidden" id="courses" style={{ background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)' }}>
            {/* Background Accents */}
            <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100" style={{ pointerEvents: 'none', zIndex: 0 }}>
                <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(255, 193, 7, 0.03) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <Container className="position-relative z-1 py-5">
                <div className="text-center mb-5 pb-3">
                    <motion.h5
                        className="text-primary-custom fw-bold text-uppercase mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ letterSpacing: '4px', fontSize: '1rem' }}
                    >
                        {t('ExploreOurCurriculum')}
                    </motion.h5>
                    <motion.h2
                        className="display-4 fw-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('Categories')}
                    </motion.h2>
                    <motion.div
                        className="mx-auto"
                        style={{ height: '4px', width: '80px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)', borderRadius: '2px' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    ></motion.div>
                </div>

                <Row className="justify-content-center g-5">
                    {categories.map((cat, index) => (
                        <Col lg={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="h-100 border-0 overflow-hidden position-relative"
                                    style={{
                                        borderRadius: '40px',
                                        background: 'rgba(30, 41, 59, 0.5)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                    }}>
                                    {/* Top Glow Bar */}
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: `linear-gradient(90deg, transparent, var(--primary-color), transparent)` }}></div>

                                    <Card.Body className="p-4 p-md-5 d-flex flex-column">
                                        <div className="d-md-flex align-items-start mb-4">
                                            {/* Icon Wrapper */}
                                            <div className="mb-4 mb-md-0 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    marginInlineEnd: '1.5rem',
                                                    width: '90px',
                                                    height: '90px',
                                                    background: 'rgba(255, 193, 7, 0.05)',
                                                    borderRadius: '24px',
                                                    fontSize: '40px',
                                                    color: 'var(--primary-color)',
                                                    border: '1px solid rgba(255, 193, 7, 0.1)',
                                                    boxShadow: '0 0 20px rgba(255, 193, 7, 0.05)'
                                                }}>
                                                {cat.icon}
                                            </div>

                                            <div>
                                                <Card.Title className="fw-bold text-white mb-2 h2" style={{ letterSpacing: '-0.5px' }}>{cat.title}</Card.Title>
                                                <div className="d-flex flex-wrap gap-3 mb-3">
                                                    <span className="badge rounded-pill px-3 py-2 fw-medium" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                        <FaClock style={{ marginInlineEnd: '0.5rem' }} className="text-primary-custom" /> {cat.duration}
                                                    </span>
                                                    <span className="badge rounded-pill px-3 py-2 fw-medium" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                        <FaLayerGroup style={{ marginInlineEnd: '0.5rem' }} className="text-primary-custom" /> {cat.level}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <Card.Text className="text-white-50 fs-5 mb-5 flex-grow-1" style={{ lineHeight: '1.6' }}>
                                            {cat.desc}
                                        </Card.Text>

                                        <div className="mb-5">
                                            <div className="small fw-bold text-uppercase text-primary-custom mb-3" style={{ letterSpacing: '2px' }}>{t('WhatYouWillLearn')}</div>
                                            <div className="row g-2">
                                                {cat.id === 'frontend' ? (
                                                    <>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> HTML & CSS</div>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> JavaScript</div>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> Bootstrap</div>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> React JS</div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> Python</div>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> SQL Database</div>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> Django</div>
                                                        <div className="col-6 text-white-50 small d-flex align-items-center"><FaCheckCircle className="text-primary-custom" style={{ marginInlineEnd: '5px' }} /> REST APIs</div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <Link to={`/course/${cat.id}`} className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center group">
                                            {t('LearnMore')} {i18n.resolvedLanguage === 'ar' ? <FaArrowLeft className="me-2 transition-transform group-hover-translate-x" /> : <FaArrowRight className="ms-2 transition-transform group-hover-translate-x" />}
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style>{`
                .transition-transform { transition: transform 0.3s ease; }
                .group:hover .group-hover-translate-x { transform: translateX(5px); }
            `}</style>
        </section>
    );
};

export default CategoriesSection;
