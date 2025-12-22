import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaRocket, FaMicrochip, FaAward, FaUsers, FaArrowRight, FaComment } from 'react-icons/fa';

const MetricBox = ({ children, delay = 0, className = "", isPrimary = false, icon }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ scale: 1.02, y: -5 }}
        className={`h-100 p-4 p-md-5 rounded-5 shadow-lg d-flex flex-column justify-content-center align-items-center text-center ${className}`}
        style={{
            background: isPrimary ? 'var(--primary-color)' : 'rgba(30, 41, 59, 0.7)',
            backdropFilter: 'blur(20px)',
            border: isPrimary ? 'none' : '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            color: isPrimary ? '#000' : '#fff',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {icon && (
            <div className={`mb-4 ${isPrimary ? 'text-dark opacity-100' : 'text-primary-custom'}`} style={{ fontSize: '3.5rem' }}>
                {icon}
            </div>
        )}
        {children}
    </motion.div>
);

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-5 position-relative overflow-hidden" id="about" style={{ background: '#0f172a' }}>
            {/* Background Glows */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ pointerEvents: 'none', zIndex: 0 }}>
                <div className="position-absolute top-10 end-10" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 193, 7, 0.04) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div className="position-absolute bottom-10 start-10" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 193, 7, 0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
            </div>

            <Container className="position-relative z-1 py-lg-5">
                <div className="text-center mb-5">
                    <motion.h5
                        className="text-primary-custom fw-bold text-uppercase mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ letterSpacing: '4px' }}
                    >
                        {t('AboutUs')}
                    </motion.h5>
                    <motion.h2
                        className="display-4 fw-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Trans i18nKey="AboutTitle" components={{ span: <span className="text-primary-custom" /> }} />
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

                <Row className="g-4 align-items-stretch">
                    {/* Main Story Box */}
                    <Col lg={8}>
                        <MetricBox className="text-lg-start align-items-lg-start">
                            <h2 className="fw-bold mb-4 fs-1 text-primary-custom">{t('AboutStoryTitle') || 'Who We Are'}</h2>
                            <p className="text-white-50 fs-5 mb-5" style={{ lineHeight: '1.8' }}>{t('AboutSubtitle')}</p>
                            <div className="d-flex flex-wrap gap-3 mt-auto w-100">
                                <Button href="#courses" variant="primary" className="rounded-pill px-5 py-3 text-dark fw-bold border-0 shadow-lg flex-grow-1 flex-md-grow-0" style={{ background: 'var(--primary-color)' }}>
                                    {t('LearnMore')} <FaArrowRight className="ms-2 small" />
                                </Button>
                                <Button href="#contact" variant="outline-light" className="rounded-pill px-5 py-3 opacity-50 hover-opacity-100 transition-all border-white flex-grow-1 flex-md-grow-0">
                                    {t('ContactTitle')} <FaComment className="ms-2 small" />
                                </Button>
                            </div>
                        </MetricBox>
                    </Col>

                    {/* Stats Box (Yellow/Gold with icon) */}
                    <Col lg={4}>
                        <MetricBox isPrimary={true} icon={<FaUsers />}>
                            <motion.h2 className="display-2 fw-black mb-0" style={{ fontWeight: 900 }}>100+</motion.h2>
                            <p className="fw-bold text-uppercase fs-5 m-0" style={{ letterSpacing: '2px' }}>{t('Students') || 'Global Students'}</p>
                            <div className="mt-2 opacity-75 small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>{t('StudentsDesc') || 'Learning & Growing'}</div>
                        </MetricBox>
                    </Col>

                    {/* Feature 1 */}
                    <Col md={4}>
                        <MetricBox delay={0.1} icon={<FaRocket />}>
                            <h4 className="text-white fw-bold mb-3">{t('Feature1Title')}</h4>
                            <p className="text-white-50 small mb-0">{t('Feature1Desc')}</p>
                        </MetricBox>
                    </Col>

                    {/* Feature 2 */}
                    <Col md={4}>
                        <MetricBox delay={0.2} icon={<FaMicrochip />}>
                            <h4 className="text-white fw-bold mb-3">{t('Feature2Title')}</h4>
                            <p className="text-white-50 small mb-0">{t('Feature2Desc')}</p>
                        </MetricBox>
                    </Col>

                    {/* Feature 3 */}
                    <Col md={4}>
                        <MetricBox delay={0.3} icon={<FaAward />}>
                            <h4 className="text-white fw-bold mb-3">{t('Feature3Title')}</h4>
                            <p className="text-white-50 small mb-0">{t('Feature3Desc')}</p>
                        </MetricBox>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
