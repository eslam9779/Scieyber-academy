import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import WhyChooseUs from '../components/WhyChooseUs';

const LandingPage = () => {
    return (
        <>
            <section id="home"><HeroSection /></section>
            <section id="about"><AboutSection /></section>
            <section id="courses"><CategoriesSection /></section>
            <section id="why-choose-us"><WhyChooseUs /></section>
            <section id="testimonials"><TestimonialsSection /></section>
            <section id="contact"><ContactSection /></section>
        </>
    );
};

export default LandingPage;
