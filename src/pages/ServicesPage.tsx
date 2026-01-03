import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import GSAPWrapper from "@/components/GSAPWrapper";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaHeart, FaBrain, FaBone, FaEye, FaStethoscope, FaSyringe, FaAmbulance, FaHospital, FaUserMd, FaMicroscope, FaXRay, FaHeartbeat, FaNotesMedical, FaShieldAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contentData from "@/data/content.json";
import serviceCardiology from "@/assets/service-cardiology.jpg";
import serviceNeurology from "@/assets/service-neurology.jpg";
import serviceOrthopedics from "@/assets/service-orthopedics.jpg";
import heroHospital from "@/assets/hero-hospital.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const heroSlides = [
    {
      image: serviceCardiology,
      title: language === "en" ? "Comprehensive Healthcare Services" : "व्यापक स्वास्थ्य सेवाएं",
      subtitle: language === "en" ? "Our Services" : "हमारी सेवाएं",
      description: language === "en"
        ? "From routine check-ups to specialized treatments, we offer a complete range of medical services."
        : "नियमित जांच से लेकर विशेष उपचार तक, हम चिकित्सा सेवाओं की पूरी श्रृंखला प्रदान करते हैं।",
    },
    {
      image: serviceNeurology,
      title: language === "en" ? "Advanced Medical Care" : "उन्नत चिकित्सा देखभाल",
      subtitle: language === "en" ? "Expert Treatment" : "विशेषज्ञ उपचार",
      description: language === "en"
        ? "We offer the latest treatment methods and technologies for better patient outcomes."
        : "हम बेहतर रोगी परिणामों के लिए नवीनतम उपचार विधियां और प्रौद्योगिकियां प्रदान करते हैं।",
    },
  ];

  const whyChooseData = language === "en" 
    ? contentData.en.services.whyChoose 
    : contentData.hi.services.whyChoose;

  const departments = [
    { name: language === "en" ? "Cardiology" : "हृदय रोग विभाग", desc: language === "en" ? "Heart care specialists" : "हृदय देखभाल विशेषज्ञ", icon: FaHeart },
    { name: language === "en" ? "Neurology" : "तंत्रिका विज्ञान", desc: language === "en" ? "Brain & nerve specialists" : "मस्तिष्क और तंत्रिका विशेषज्ञ", icon: FaBrain },
    { name: language === "en" ? "Orthopedics" : "आर्थोपेडिक्स", desc: language === "en" ? "Bone & joint experts" : "हड्डी और जोड़ों के विशेषज्ञ", icon: FaBone },
    { name: language === "en" ? "Pediatrics" : "बाल रोग", desc: language === "en" ? "Child healthcare" : "बाल स्वास्थ्य देखभाल", icon: FaUserMd },
    { name: language === "en" ? "General Medicine" : "सामान्य चिकित्सा", desc: language === "en" ? "Primary healthcare" : "प्राथमिक स्वास्थ्य देखभाल", icon: FaStethoscope },
    { name: language === "en" ? "Emergency Care" : "आपातकालीन देखभाल", desc: language === "en" ? "24/7 urgent care" : "24/7 तत्काल देखभाल", icon: FaAmbulance },
  ];

  const diagnosticServices = [
    { name: language === "en" ? "X-Ray" : "एक्स-रे", desc: language === "en" ? "Digital X-ray imaging" : "डिजिटल एक्स-रे इमेजिंग", icon: FaXRay },
    { name: language === "en" ? "ECG" : "ईसीजी", desc: language === "en" ? "Heart rhythm monitoring" : "हृदय गति निगरानी", icon: FaHeartbeat },
    { name: language === "en" ? "Ultrasound" : "अल्ट्रासाउंड", desc: language === "en" ? "Non-invasive imaging" : "गैर-आक्रामक इमेजिंग", icon: FaMicroscope },
    { name: language === "en" ? "Pathology" : "पैथोलॉजी", desc: language === "en" ? "Blood & tissue tests" : "रक्त और ऊतक परीक्षण", icon: FaSyringe },
  ];

  const preventiveCarePrograms = [
    { name: language === "en" ? "Health Checkups" : "स्वास्थ्य जांच", desc: language === "en" ? "Complete body checkup packages" : "पूर्ण शरीर जांच पैकेज", icon: FaNotesMedical },
    { name: language === "en" ? "Vaccination" : "टीकाकरण", desc: language === "en" ? "Immunization for all ages" : "सभी उम्र के लिए टीकाकरण", icon: FaShieldAlt },
    { name: language === "en" ? "Health Education" : "स्वास्थ्य शिक्षा", desc: language === "en" ? "Awareness programs" : "जागरूकता कार्यक्रम", icon: FaHospital },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Section 1: Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* Section 2: Comprehensive Healthcare Content */}
        <section className="container mx-auto px-4 py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <GSAPWrapper animation="fadeLeft">
                <div>
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {language === "en" ? "Our Services" : "हमारी सेवाएं"}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                    {contentData[language].comprehensiveHealthcare.title}
                  </h1>
                  <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                    {contentData[language].comprehensiveHealthcare.description}
                  </p>
                  <div className="space-y-3">
                    {contentData[language].comprehensiveHealthcare.highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                        <span className="text-xl">{highlight.split(' ')[0]}</span>
                        <p className="text-foreground text-sm leading-relaxed flex-1">
                          {highlight.substring(highlight.indexOf(' ') + 1)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </GSAPWrapper>
              <GSAPWrapper animation="fadeRight">
                <div className="relative">
                  <img 
                    src={serviceCardiology} 
                    alt="Healthcare Services"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-float"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm">{language === "en" ? "Years Experience" : "वर्षों का अनुभव"}</div>
                  </div>
                </div>
              </GSAPWrapper>
            </div>
          </div>
        </section>

        {/* Section 3: Services Grid */}
        <Services />

        {/* Section 4: Why Choose Us - Accordion */}
        <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-muted/30 via-primary/5 to-secondary/5 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <GSAPWrapper animation="fadeUp">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">
                {language === "en" ? "Why Choose Our Services?" : "हमारी सेवाएं क्यों चुनें?"}
              </h2>
            </GSAPWrapper>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {whyChooseData.map((item, index) => (
                <GSAPWrapper key={index} animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={index * 0.1}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-card/90 backdrop-blur-sm rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline px-6 py-6 hover:bg-primary/5">
                      <span className="text-foreground font-heading font-bold text-xl flex items-center gap-3">
                        <span className="text-3xl icon-flip">{item.question.split(' ')[0]}</span>
                        <span>{item.question.substring(item.question.indexOf(' ') + 1)}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-1">
                          <img 
                            src={item.image} 
                            alt={item.question}
                            className="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <p className="text-muted-foreground font-body leading-relaxed text-base">
                            {item.answer}
                          </p>
                          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-glow"></div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </GSAPWrapper>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 5: Departments */}
        <section className="container mx-auto px-4 py-20 overflow-hidden">
          <GSAPWrapper animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-12">
              {language === "en" ? "Our Departments" : "हमारे विभाग"}
            </h2>
          </GSAPWrapper>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <GSAPWrapper key={index} animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={index * 0.1}>
                <Card className="hover-lift border-2 border-primary/20 hover:border-primary/40 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center icon-flip">
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{dept.name}</h3>
                    <p className="text-sm font-body text-muted-foreground">{dept.desc}</p>
                  </CardContent>
                </Card>
              </GSAPWrapper>
            ))}
          </div>
        </section>

        {/* Section 6: Treatment Process */}
        <section className="bg-muted/30 py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <GSAPWrapper animation="fadeUp">
              <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-12">
                {language === "en" ? "Our Treatment Process" : "हमारी उपचार प्रक्रिया"}
              </h2>
            </GSAPWrapper>
            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
              {[
                { num: 1, title: language === "en" ? "Consultation" : "परामर्श", desc: language === "en" ? "Initial assessment" : "प्रारंभिक मूल्यांकन", color: "bg-primary" },
                { num: 2, title: language === "en" ? "Diagnosis" : "निदान", desc: language === "en" ? "Advanced testing" : "उन्नत परीक्षण", color: "bg-secondary" },
                { num: 3, title: language === "en" ? "Treatment" : "उपचार", desc: language === "en" ? "Expert care" : "विशेषज्ञ देखभाल", color: "bg-accent" },
                { num: 4, title: language === "en" ? "Follow-up" : "अनुवर्ती", desc: language === "en" ? "Continued support" : "निरंतर समर्थन", color: "bg-primary" },
              ].map((step, index) => (
                <GSAPWrapper key={index} animation="fadeUp" delay={index * 0.15}>
                  <Card className="hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full ${step.color} text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold`}>
                        {step.num}
                      </div>
                      <h3 className="font-heading font-bold mb-2">{step.title}</h3>
                      <p className="text-sm font-body text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                </GSAPWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Emergency Services with Image */}
        <section className="container mx-auto px-4 py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <GSAPWrapper animation="fadeLeft">
              <div className="relative">
                <img 
                  src={heroHospital} 
                  alt="Emergency Services"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl animate-pulse-glow"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                  24/7
                </div>
              </div>
            </GSAPWrapper>
            <GSAPWrapper animation="fadeRight">
              <div>
                <span className="inline-block px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-semibold mb-4">
                  {language === "en" ? "Emergency" : "आपातकाल"}
                </span>
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  {language === "en" ? "24/7 Emergency Services" : "24/7 आपातकालीन सेवाएं"}
                </h2>
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                  {language === "en"
                    ? "Our emergency department is always ready to provide immediate medical attention when you need it most. With fully equipped ambulance services, experienced trauma care specialists, and state-of-the-art emergency facilities, we ensure the fastest response time for critical situations."
                    : "हमारा आपातकालीन विभाग हमेशा तत्काल चिकित्सा ध्यान प्रदान करने के लिए तैयार है। पूरी तरह से सुसज्जित एम्बुलेंस सेवाओं, अनुभवी ट्रॉमा केयर विशेषज्ञों और अत्याधुनिक आपातकालीन सुविधाओं के साथ, हम गंभीर स्थितियों के लिए सबसे तेज प्रतिक्रिया समय सुनिश्चित करते हैं।"}
                </p>
                <div className="flex items-center gap-4">
                  <FaAmbulance className="w-12 h-12 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">9110142755</div>
                    <div className="text-sm text-muted-foreground">{language === "en" ? "Emergency Helpline" : "आपातकालीन हेल्पलाइन"}</div>
                  </div>
                </div>
              </div>
            </GSAPWrapper>
          </div>
        </section>

        {/* Section 8: Diagnostic Services with Content and Image */}
        <section className="bg-muted/30 py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <GSAPWrapper animation="fadeLeft">
                <div>
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {language === "en" ? "Diagnostics" : "निदान"}
                  </span>
                  <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                    {language === "en" ? "Diagnostic Services" : "नैदानिक सेवाएं"}
                  </h2>
                  <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
                    {language === "en"
                      ? "Our advanced diagnostic center offers comprehensive testing facilities with modern equipment and experienced technicians. We provide accurate and timely results to ensure proper diagnosis and treatment planning."
                      : "हमारा उन्नत नैदानिक केंद्र आधुनिक उपकरणों और अनुभवी तकनीशियनों के साथ व्यापक परीक्षण सुविधाएं प्रदान करता है। हम उचित निदान और उपचार योजना सुनिश्चित करने के लिए सटीक और समय पर परिणाम प्रदान करते हैं।"}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {diagnosticServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm">
                        <service.icon className="w-8 h-8 text-primary" />
                        <div>
                          <div className="font-semibold text-foreground">{service.name}</div>
                          <div className="text-xs text-muted-foreground">{service.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GSAPWrapper>
              <GSAPWrapper animation="fadeRight">
                <img 
                  src={serviceNeurology} 
                  alt="Diagnostic Services"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-swing"
                />
              </GSAPWrapper>
            </div>
          </div>
        </section>

        {/* Section 9: Preventive Care with Content and Image */}
        <section className="container mx-auto px-4 py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <GSAPWrapper animation="fadeLeft">
              <img 
                src={serviceOrthopedics} 
                alt="Preventive Care"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-zoom-in-out"
              />
            </GSAPWrapper>
            <GSAPWrapper animation="fadeRight">
              <div>
                <span className="inline-block px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold mb-4">
                  {language === "en" ? "Prevention" : "रोकथाम"}
                </span>
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  {language === "en" ? "Preventive Care Programs" : "निवारक देखभाल कार्यक्रम"}
                </h2>
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
                  {language === "en"
                    ? "Prevention is better than cure. Our preventive care programs focus on early detection and health maintenance through regular screenings, vaccination drives, and health education sessions. We help you stay healthy and catch potential issues before they become serious."
                    : "रोकथाम इलाज से बेहतर है। हमारे निवारक देखभाल कार्यक्रम नियमित जांच, टीकाकरण अभियान और स्वास्थ्य शिक्षा सत्रों के माध्यम से प्रारंभिक पहचान और स्वास्थ्य रखरखाव पर ध्यान केंद्रित करते हैं।"}
                </p>
                <div className="space-y-4">
                  {preventiveCarePrograms.map((program, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{program.name}</div>
                        <div className="text-sm text-muted-foreground">{program.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GSAPWrapper>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
