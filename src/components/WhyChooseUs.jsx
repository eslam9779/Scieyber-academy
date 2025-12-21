import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaClock, FaCertificate, FaUserTie, FaUsers, FaLaptopCode } from 'react-icons/fa';

import mentorshipImg from '../assets/images/mentorship_icon.png';
import flexibilityImg from '../assets/images/flexibility_icon.png';
import certificationImg from '../assets/images/certification_icon.png';

const WhyChooseUs = () => {
    const { t } = useTranslation();

    const features = [
        { image: mentorshipImg, title: t('WhyTitle1'), desc: t('WhyDesc1') },
        { image: flexibilityImg, title: t('WhyTitle2'), desc: t('WhyDesc2') },
        { image: certificationImg, title: t('WhyTitle3'), desc: t('WhyDesc3') },
        { icon: <FaUserTie />, title: t('WhyTitle4'), desc: t('WhyDesc4'), color: '#ffc107' },
        { icon: <FaUsers />, title: t('WhyTitle5'), desc: t('WhyDesc5'), color: '#4f46e5' },
        { icon: <FaLaptopCode />, title: t('WhyTitle6'), desc: t('WhyDesc6'), color: '#10b981' },
    ];

    return (
        <section className="py-5" style={{ background: 'var(--bg-body)' }}>
            <Container>
                <div className="text-center mb-5">
                    <motion.h2
                        className="display-5 fw-bold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        style={{ color: 'var(--text-main)' }}
                    >
                        {t('WhyChooseUs')}
                    </motion.h2>
                    <motion.div
                        className="mx-auto bg-primary-custom"
                        style={{ width: '60px', height: '4px', borderRadius: '2px' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    ></motion.div>
                </div>

                <Row className="g-4">
                    {features.map((feature, index) => (
                        <Col key={index} md={6} lg={4}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="h-100 border-0 shadow-sm text-center p-4 bg-glass-card" style={{ background: 'var(--card-bg)', backdropFilter: 'var(--glass-effect)', border: '1px solid var(--card-border)', transition: 'all 0.3s ease', borderRadius: '24px' }}>
                                    <div className="mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '120px', height: '120px' }}>
                                        {feature.image ? (
                                            <img src={feature.image} alt={feature.title} className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
                                        ) : (
                                            <div
                                                className="d-flex align-items-center justify-content-center shadow-inner"
                                                style={{
                                                    width: '90px',
                                                    height: '90px',
                                                    fontSize: '44px',
                                                    color: feature.color,
                                                    background: `linear-gradient(135deg, ${feature.color}22 0%, ${feature.color}05 100%)`,
                                                    borderRadius: '20px',
                                                    border: `1px solid ${feature.color}33`
                                                }}
                                            >
                                                {feature.icon}
                                            </div>
                                        )}
                                    </div>
                                    <Card.Body className="p-0">
                                        <Card.Title className="fw-bold mb-3 fs-4" style={{ color: 'var(--primary-color)' }}>
                                            {feature.title}
                                        </Card.Title>
                                        <Card.Text className="opacity-75" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                            {feature.desc}
                                        </Card.Text>
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

export default WhyChooseUs;
