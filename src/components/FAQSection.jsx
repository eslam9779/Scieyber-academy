import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
    const { t } = useTranslation();

    const faqs = [
        { q: "What courses do you offer?", a: "We currently specialize in Frontend Development with React.js and Backend Development with Python." },
        { q: "Are the certificates recognized?", a: "Yes, our certificates are recognized by top tech companies and serve as a proof of your practical skills." },
        { q: "Is there a mentorship program?", a: "ABSOLUTELY. All our courses come with 1-on-1 mentorship sessions to guide you through your learning path." },
        { q: "Can I learn at my own pace?", a: "Yes, our courses are self-paced but we recommend following the schedule for best results." }
    ];

    return (
        <section className="py-5 mb-5 bg-light-subtle">
            <Container>
                <div className="text-center mb-5">
                    <h5 className="text-primary-custom fw-bold text-uppercase">{t('FAQ')}</h5>
                    <h2 className="display-6 fw-bold">Everything You Need to Know</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{ maxWidth: '800px', width: '100%' }}>
                        <Accordion defaultActiveKey="0" flush>
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
                                    <Accordion.Header className="accordion-custom">
                                        <div className="d-flex align-items-center w-100 justify-content-between pe-3">
                                            <span className="fw-bold fs-5">{faq.q}</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className="text-muted opacity-75">
                                        {faq.a}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </Container>
            <style>{`
                .accordion-custom .accordion-button {
                    background-color: white;
                    box-shadow: none;
                    color: var(--dark-bg);
                }
                .accordion-custom .accordion-button:not(.collapsed) {
                    color: var(--primary-color);
                    background-color: white;
                    box-shadow: none;
                }
                .accordion-custom .accordion-button:focus {
                     box-shadow: none;
                }
            `}</style>
        </section>
    );
};

export default FAQSection;
