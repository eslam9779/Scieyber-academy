import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Registration = () => {
    const { t } = useTranslation();

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-100"
                style={{ maxWidth: '600px' }}
            >
                <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                    <Card.Body className="p-5">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold text-primary">{t('RegisterTitle')}</h3>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>{t('Name')}</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" className="rounded-pill p-3 border-0 bg-light" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{t('Email')}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="rounded-pill p-3 border-0 bg-light" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t('Password')}</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="rounded-pill p-3 border-0 bg-light" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formConfirmPassword">
                                <Form.Label>{t('ConfirmPassword')}</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" className="rounded-pill p-3 border-0 bg-light" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 rounded-pill p-3 fw-bold mb-3">
                                {t('Register')}
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <small className="text-muted">{t('HaveAccount')} <Link to="/login" className="fw-bold text-decoration-none">{t('Login')}</Link></small>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    );
};

export default Registration;
