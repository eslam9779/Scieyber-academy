import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-5 position-relative overflow-hidden" id="contact" style={{ background: 'var(--bg-body)' }}>
            {/* Background Glows */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ pointerEvents: 'none', zIndex: 0 }}>
                <div className="position-absolute top-0 end-0" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 193, 7, 0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <Container className="position-relative z-1">
                <div className="text-center mb-5 pb-3">
                    <h5 className="text-primary-custom fw-bold text-uppercase mb-3" style={{ letterSpacing: '4px' }}>{t('ContactUs')}</h5>
                    <h2 className="display-4 fw-bold text-white mb-4">{t('ContactTitle')}</h2>
                    <motion.div
                        className="mx-auto"
                        style={{ height: '4px', width: '80px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)', borderRadius: '2px' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    ></motion.div>
                    <p className="text-white-50 fs-5 mt-4">{t('ContactSubtitle')}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-100"
                        style={{ maxWidth: '700px' }}
                    >
                        <div className="p-5 rounded-4 shadow-lg" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--card-border)' }}>
                            <Form>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formName">
                                            <Form.Label className="fw-bold small" style={{ color: 'var(--text-main)' }}>{t('Name')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('Name')} className="border-0 py-3 rounded-3" style={{ background: '#ffffff', color: '#1e293b' }} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formEmail">
                                            <Form.Label className="fw-bold small" style={{ color: 'var(--text-main)' }}>{t('Email')}</Form.Label>
                                            <Form.Control type="email" placeholder={t('Email')} className="border-0 py-3 rounded-3" style={{ background: '#ffffff', color: '#1e293b' }} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label className="fw-bold small" style={{ color: 'var(--text-main)' }}>{t('Subject')}</Form.Label>
                                    <Form.Control type="text" placeholder={t('Subject')} className="border-0 py-3 rounded-3" style={{ background: '#ffffff', color: '#1e293b' }} />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label className="fw-bold small" style={{ color: 'var(--text-main)' }}>{t('Message')}</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder={t('Message')} className="border-0 py-3 rounded-3 resize-none" style={{ background: '#ffffff', color: '#1e293b' }} />
                                </Form.Group>
                                <Button variant="primary" size="lg" className="w-100 rounded-pill fw-bold shadow-sm">
                                    {t('Send')}
                                </Button>
                            </Form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
