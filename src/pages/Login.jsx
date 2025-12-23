import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const { t } = useTranslation();

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-100"
                style={{ maxWidth: '500px' }}
            >
                <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                    <Card.Body className="p-5">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold text-primary">{t('LoginTitle')}</h3>
                            <p className="text-muted">{t('welcome')}</p>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{t('Email')}</Form.Label>
                                <Form.Control type="email" placeholder={t('enter_email')} className="rounded-pill p-3 border-0 bg-light" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>{t('Password')}</Form.Label>
                                <Form.Control type="password" placeholder={t('enter_password')} className="rounded-pill p-3 border-0 bg-light" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 rounded-pill p-3 fw-bold mb-3">
                                {t('Login')}
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <small className="text-muted">{t('NoAccount')} <Link to="/register" className="fw-bold text-decoration-none">{t('Register')}</Link></small>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    );
};

export default Login;
