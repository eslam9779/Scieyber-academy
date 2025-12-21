import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    // i18next-http-backend
    // loads translations from your server
    // https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languagedetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    welcome: "Welcome to Scieyber Academy",
                    app_title: "Scieyber Academy",
                    Home: "Home",
                    Login: "Login",
                    Register: "Register",
                    Language: "Language",
                    HeroTitle: "Unlock Your Potential in <span class='text-accent'>Digital Innovation</span>",
                    HeroSubtitle: "Join Scieyber Academy to master the art of coding. From Frontend aesthetics to Backend logic, build the future today.",
                    GetStarted: "Start Learning",
                    LearnMore: "Explore Courses",
                    Categories: "Our Courses",
                    FrontEnd: "Front End",
                    BackEnd: "Back End",
                    AboutUs: "About Us",
                    Testimonials: "Students Success Stories",
                    FAQ: "Frequently Asked Questions",
                    Copyright: "© 2024 Scieyber Academy. All rights reserved.",
                    Email: "Email Address",
                    Password: "Password",
                    ConfirmPassword: "Confirm Password",
                    Name: "Full Name",
                    LoginTitle: "Login to your account",
                    RegisterTitle: "Create new account",
                    HaveAccount: "Already have an account?",
                    NoAccount: "Don't have an account?",
                    Submit: "Submit",
                    CourseContent: "Course Content",
                    Instructor: "Instructor",
                    EnrollNow: "Enroll Now",
                    Duration: "Duration",
                    Level: "Level",
                    Weeks: "Weeks",
                    Beginner: "Beginner",
                    Advanced: "Advanced",
                    ContactUs: "Contact Us",
                    Subject: "Subject",
                    Message: "Message",
                    Send: "Send Message",
                    ContactTitle: "Get in Touch",
                    ContactSubtitle: "Have questions? We'd love to hear from you.",
                    AboutTitle: "Redefining <span class='text-primary-custom'>Digital Education</span>",
                    AboutSubtitle: "Scieyber Academy is an industry-leading training center dedicated to nurturing the next generation of technical leaders through immersive and practical learning.",
                    Feature1Title: "Industry-Led Mentorship",
                    Feature1Desc: "Learn directly from senior engineers who have built large-scale production systems.",
                    Feature2Title: "Production-Ready Projects",
                    Feature2Desc: "Build real-world applications that showcase your skills to top-tier employers.",
                    Feature3Title: "Advanced Career Strategy",
                    Feature3Desc: "Gain access to exclusive networking opportunities and professional development resources.",
                    WhyChooseUs: "Why Choose Us",
                    WhyTitle1: "Expert Mentorship",
                    WhyDesc1: "Guided by industry veterans with years of production experience.",
                    WhyTitle2: "Flexible Learning",
                    WhyDesc2: "Study at your own pace with lifetime access to all course materials.",
                    WhyTitle3: "Official Certification",
                    WhyDesc3: "Receive recognized certificates upon completion to boost your resume.",
                    WhyTitle4: "Career Support",
                    WhyDesc4: "Resume building, portfolio review, and interview preparation.",
                    WhyTitle5: "Community Access",
                    WhyDesc5: "Join a global network of ambitious developers and tech leaders.",
                    WhyTitle6: "Practical Projects",
                    WhyDesc6: "Build real-world apps that solve actual business problems."
                }
            },
            ar: {
                translation: {
                    welcome: "مرحباً بكم في Scieyber Academy",
                    app_title: "Scieyber Academy",
                    Home: "الرئيسية",
                    Login: "دخول",
                    Register: "تسيجل",
                    Language: "اللغة",
                    HeroTitle: "اكتشف قدراتك في <span class='text-accent'>الابتكار الرقمي</span>",
                    HeroSubtitle: "انضم إلى Scieyber Academy لتتعلم فن البرمجة. ابنِ المستقبل اليوم من خلال أحدث تقنيات التطوير.",
                    GetStarted: "ابدأ التعلم",
                    LearnMore: "استكشف الدورات",
                    Categories: "دوراتنا",
                    FrontEnd: "تطوير الواجهات",
                    BackEnd: "تطوير الخلفيات",
                    AboutUs: "من نحن",
                    Testimonials: "قصص نجاح طلابنا",
                    FAQ: "الأسئلة الشائعة",
                    Copyright: "© 2024 Scieyber Academy. جميع الحقوق محفوظة.",
                    Email: "البريد الإلكتروني",
                    Password: "كلمة المرور",
                    ConfirmPassword: "تأكيد كلمة المرور",
                    Name: "الاسم الكامل",
                    LoginTitle: "تسجيل الدخول",
                    RegisterTitle: "إنشاء حساب جديد",
                    HaveAccount: "لديك حساب بالفعل؟",
                    NoAccount: "ليس لديك حساب؟",
                    Submit: "إرسال",
                    CourseContent: "محتوى الدورة",
                    Instructor: "المحاضر",
                    EnrollNow: "سجل الآن",
                    Duration: "المدة",
                    Level: "المستوى",
                    Weeks: "أسابيع",
                    Beginner: "مبتدئ",
                    Advanced: "متقدم",
                    ContactUs: "اتصل بنا",
                    Subject: "الموضوع",
                    Message: "الرسالة",
                    Send: "إرسال الرسالة",
                    ContactTitle: "تواصل معنا",
                    ContactSubtitle: "لديكم أي استفسارات؟ يسعدنا سماعكم.",
                    AboutTitle: "إعادة تعريف <span class='text-primary-custom'>التعليم الرقمي</span>",
                    AboutSubtitle: "Scieyber Academy هي مركز تدريب رائد مكرس لتمكين الجيل القادم من القادة التقنيين من خلال تجارب تعليمية عملية.",
                    Feature1Title: "توجيه من خبراء الصناعة",
                    Feature1Desc: "تعلم مباشرة من كبار المهندسين الذين قاموا ببناء أنظمة برمجية ضخمة.",
                    Feature2Title: "مشاريع جاهزة للإنتاج",
                    Feature2Desc: "قم ببناء تطبيقات حقيقية تعرض مهاراتك لأصحاب العمل في كبريات الشركات.",
                    Feature3Title: "استراتيجية مهنية متقدمة",
                    Feature3Desc: "احصل على فرص حصرية للتواصل المباشر مع رواد الأعمال في المجال التقني.",
                    WhyChooseUs: "لماذا تختارنا؟",
                    WhyTitle1: "توجيه من الخبراء",
                    WhyDesc1: "بإرشاد من خبراء الصناعة ذوي سنوات من الخبرة العملية.",
                    WhyTitle2: "تعلم مرن",
                    WhyDesc2: "ادرس بالوتيرة التي تناسبك مع إمكانية الوصول مدى الحياة للمواد.",
                    WhyTitle3: "شهادات رسمية",
                    WhyDesc3: "احصل على شهادات معتمدة عند الإكمال لتعزيز سيرتك الذاتية.",
                    WhyTitle4: "دعم مهني",
                    WhyDesc4: "بناء السيرة الذاتية، مراجعة المحفظة، والتحضير للمقابلات.",
                    WhyTitle5: "وصول للمجتمع",
                    WhyDesc5: "انضم إلى شبكة عالمية من المطورين والقادة التقنيين الطموحين.",
                    WhyTitle6: "مشاريع عملية",
                    WhyDesc6: "قم ببناء تطبيقات حقيقية تحل مشاكل أعمال فعلية."
                }
            }
        }
    });

export default i18n;
