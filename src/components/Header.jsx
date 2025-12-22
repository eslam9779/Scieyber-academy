import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    };

    const [activeLink, setActiveLink] = useState('home');

    // Update active link based on location
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveLink('');
        } else if (!location.hash) {
            setActiveLink('home');
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== '/') return; // Don't spy on other pages

            const sections = ['home', 'about', 'courses', 'testimonials', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Helper to scroll to section if on home page, or navigate to home#section
    const NavItem = ({ to, label, id }) => {
        const isHome = location.pathname === '/';
        const href = isHome ? `#${id}` : `/#${id}`;
        const isActive = activeLink === id;

        // Use as={Link} for client-side routing.
        return (
            <Nav.Link
                as={Link}
                to={href}
                active={isActive}
                className={`mx-2 fw-semibold position-relative nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={() => setActiveLink(id)}
            >
                {label}
            </Nav.Link>
        );
    };

    const handleBrandClick = () => {
        setActiveLink('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Navbar expand="lg" className="navbar-custom sticky-top py-3" style={{ background: 'var(--navbar-bg)', backdropFilter: 'var(--glass-effect)', borderBottom: '1px solid var(--navbar-border)', transition: 'background 0.3s ease' }}>
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="fw-bold fs-3 text-uppercase d-flex align-items-center"
                    style={{ letterSpacing: '1px' }}
                    onClick={handleBrandClick}
                >
                    <div className="me-2 rounded-circle bg-primary-custom d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px' }}>S</div>
                    <div><span className="text-primary-custom" style={{ color: 'var(--primary-color)' }}>Scieyber</span> <span className="small fw-light d-block fs-6" style={{ lineHeight: '0.8', letterSpacing: '3px', color: 'var(--text-main)' }}>ACADEMY</span></div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none opacity-75" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center">
                        <NavItem id="home" label={t('Home')} />
                        <NavItem id="about" label={t('AboutUs')} />
                        <NavItem id="courses" label={t('Categories')} />
                        <NavItem id="testimonials" label={t('Testimonials')} />
                        <NavItem id="contact" label={t('ContactUs')} />
                    </Nav>

                    <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
                        {/* Theme Toggle */}
                        {/* <div
                            onClick={toggleTheme}
                            className="cursor-pointer d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                            style={{ width: '38px', height: '38px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-main)' }}
                        >
                            {theme === 'dark' ? <FaSun size={18} className="text-warning" /> : <FaMoon size={16} />}
                        </div> */}

                        {/* Language Dropdown */}
                        {/* <Dropdown>
                            <Dropdown.Toggle
                                variant="outline-secondary"
                                id="dropdown-basic"
                                className="rounded-pill d-flex align-items-center justify-content-between px-3 fw-bold shadow-sm py-2 btn-sm"
                                style={{ borderColor: 'var(--navbar-border)', background: 'transparent', width: '100px', color: 'var(--text-main)' }}
                            >
                                <span className="small">{i18n.language === 'en' ? 'English' : 'العربية'}</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" className="shadow border-0 mt-2 rounded-3 overflow-hidden" style={{ background: 'var(--card-bg)' }}>
                                <Dropdown.Item onClick={() => changeLanguage('en')} className="small py-2" style={{ color: 'var(--text-main)' }}>English</Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage('ar')} className="small py-2" style={{ color: 'var(--text-main)' }}>العربية</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}

                        {/* Login Button */}
                        <Link to="/login">
                            <Button variant="primary" className="rounded-pill px-4 fw-bold shadow-sm btn-sm py-2">
                                {t('Login')}
                            </Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
            <style>{`
                .nav-link-custom { color: var(--nav-link-color) !important; }
                .nav-link-custom:hover, .nav-link-custom.active { color: var(--primary-color) !important; }
                .nav-link-custom:after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 2px;
                    background: var(--primary-color);
                    transition: width .3s;
                    position: absolute;
                    bottom: 5px;
                    left: 0;
                }
                .nav-link-custom:hover:after, .nav-link-custom.active:after {
                    width: 100%;
                }
                .cursor-pointer { cursor: pointer; }
                .hover-scale:hover { transform: scale(1.05); }
            `}</style>
        </Navbar>
    );
};

export default Header;
