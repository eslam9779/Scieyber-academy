import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero_illustration.png';

const HeroSection = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
        <section className="position-relative overflow-hidden py-5 d-flex align-items-center" style={{ minHeight: '85vh' }}>
            {/* Background Glow Effect */}
            <div style={{ position: 'absolute', top: '-20%', right: isRTL ? 'auto' : '-10%', left: isRTL ? '-10%' : 'auto', width: '50%', height: '50%', background: 'rgba(59, 130, 246, 0.15)', filter: 'blur(100px)', borderRadius: '50%' }}></div>

            <Container className="position-relative z-1">
                <Row className="align-items-center">
                    <Col lg={6} className={isRTL ? 'order-lg-2 ps-lg-5' : 'pe-lg-5'}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-3 fw-bold mb-4 lh-sm" style={{ color: 'var(--text-main)' }}>
                                <Trans i18nKey="HeroTitle" components={{ span: <span className="text-accent" /> }} />
                            </h1>
                            <p className="lead mb-5 opacity-75" style={{ fontSize: '1.25rem', maxWidth: '500px', color: 'var(--text-secondary)' }}>
                                {t('HeroSubtitle')}
                            </p>
                            <div className="d-flex gap-3">
                                <Button
                                    href="#courses"
                                    variant="primary"
                                    size="lg"
                                    className="rounded-pill px-5 py-3 fw-bold shadow-lg text-dark text-uppercase"
                                    style={{ letterSpacing: '1px' }}
                                >
                                    {t('LearnMore')}
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={6} className={isRTL ? 'order-lg-1' : ''}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center"
                        >
                            <img
                                src={heroImage}
                                alt="Hero Illustration"
                                className="img-fluid floating-animation"
                                style={{ maxHeight: '550px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <style>{`
                .floating-animation {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .text-accent { color: var(--accent-color) !important; text-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
            `}</style>
        </section>
    );
};

export default HeroSection;
