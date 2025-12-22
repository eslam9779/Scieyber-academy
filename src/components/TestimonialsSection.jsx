import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaQuoteLeft } from 'react-icons/fa';

import studentImage from '../assets/images/students.png';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const { t } = useTranslation();

    const testimonials = [
        { name: "Ahmed Ali", role: "Frontend Developer", text: "Sciber Academy transformed my career. The React course is top-notch!", image: studentImage },
        { name: "Sara Hassan", role: "Backend Developer", text: "The Python Backend course is deep and practical. Highly recommended.", image: studentImage },
        { name: "Omar Youssef", role: "Full Stack Developer", text: "Great community and support. I learned so much in such a short time.", image: studentImage }
    ];

    return (
        <section className="py-5 position-relative overflow-hidden" style={{ background: '#0f172a' }}>
            {/* Background Glows */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ pointerEvents: 'none', zIndex: 0 }}>
                <div className="position-absolute top-10 start-10" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 193, 7, 0.03) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div className="position-absolute bottom-0 end-0" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 193, 7, 0.03) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
            </div>

            <Container className="position-relative z-1">
                <div className="text-center mb-5 pb-3">
                    <h5 className="text-primary-custom fw-bold text-uppercase mb-3" style={{ letterSpacing: '4px' }}>{t('Testimonials')}</h5>
                    <h2 className="display-4 fw-bold text-white mb-4">What Our Students Say</h2>
                    <motion.div
                        className="mx-auto"
                        style={{ height: '4px', width: '80px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)', borderRadius: '2px' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    ></motion.div>
                </div>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <motion.div
                                whileHover={{ y: -10 }}
                            >
                                <Card className="h-100 shadow text-center p-4" style={{ borderRadius: '20px', background: 'var(--card-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--card-border)' }}>
                                    <div className="mx-auto mb-4 p-1 rounded-circle bg-primary-custom bg-opacity-25" style={{ width: '90px', height: '90px' }}>
                                        <div className="w-100 h-100 rounded-circle overflow-hidden">
                                            <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <Card.Body className="p-0">
                                        <Card.Text className="fst-italic mb-4 opacity-75" style={{ color: 'var(--text-secondary)' }}>
                                            "{testimonial.text}"
                                        </Card.Text>
                                        <h5 className="fw-bold mb-1" style={{ color: 'var(--text-main)' }}>{testimonial.name}</h5>
                                        <small className="text-primary-custom fw-bold">{testimonial.role}</small>
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

export default TestimonialsSection;
