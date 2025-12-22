import React from 'react';

// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="text-white pt-5 pb-3 mt-auto" style={{ backgroundColor: '#020617' }}>
            <Container>
                <Row className="gy-4">
                    <Col lg={4} md={12}>
                        <h3 className="fw-bold text-primary mb-3 text-uppercase">{t('app_title')}</h3>
                        <p className="text-secondary opacity-75 mb-4" style={{ maxWidth: '300px' }}>
                            Empowering the next generation of developers with world-class education and mentorship.
                        </p>
                        <div className="d-flex gap-3">
                            <div className="bg-white bg-opacity-10 p-2 rounded-circle cursor-pointer hover-scale transition hover-facebook">
                                <FaFacebook size={20} className="text-white" />
                            </div>
                            <div className="bg-white bg-opacity-10 p-2 rounded-circle cursor-pointer hover-scale transition hover-twitter">
                                <FaTwitter size={20} className="text-white" />
                            </div>
                            <div className="bg-white bg-opacity-10 p-2 rounded-circle cursor-pointer hover-scale transition hover-linkedin">
                                <FaLinkedin size={20} className="text-white" />
                            </div>
                            <div className="bg-white bg-opacity-10 p-2 rounded-circle cursor-pointer hover-scale transition hover-instagram">
                                <FaInstagram size={20} className="text-white" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={6}>
                        <h6 className="text-white fw-bold mb-3 text-uppercase small" style={{ letterSpacing: '1px' }}>{t('Categories')}</h6>
                        <ul className="list-unstyled text-secondary opacity-75 d-flex flex-column gap-2">
                            <li><Link to="/course/frontend" className="text-decoration-none text-secondary hover-primary transition">{t('FrontEnd')}</Link></li>
                            <li><Link to="/course/backend" className="text-decoration-none text-secondary hover-primary transition">{t('BackEnd')}</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={4} sm={6}>
                        <h6 className="text-white fw-bold mb-3 text-uppercase small" style={{ letterSpacing: '1px' }}>Company</h6>
                        <ul className="list-unstyled text-secondary opacity-75 d-flex flex-column gap-2">
                            <li><a href="#" className="text-decoration-none text-secondary hover-primary transition">{t('AboutUs')}</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary hover-primary transition">Careers</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary hover-primary transition">Contact</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="border-secondary opacity-25 my-5" />
                <div className="text-center text-secondary small opacity-50">
                    {t('Copyright')}
                </div>
            </Container>
            <style>{`
                .hover-scale:hover { 
                    transform: scale(1.1); 
                }
                .hover-facebook:hover { background-color: #1877F2 !important; }
                .hover-twitter:hover { background-color: #1DA1F2 !important; }
                .hover-linkedin:hover { background-color: #0A66C2 !important; }
                .hover-instagram:hover { background-color: #E4405F !important; }
                
                .hover-scale:hover svg {
                    color: white !important;
                }
                .hover-primary:hover { color: var(--primary-color) !important; }
                .transition { transition: all 0.3s ease; }
            `}</style>
        </footer>
    );
};

export default Footer;
