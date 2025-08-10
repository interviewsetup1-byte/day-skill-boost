import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseCard } from "@/components/CourseCard";

import { EnrollmentForm } from "@/components/EnrollmentForm";
import heroImage from "@/assets/hero-illustration.jpg";
import logoImage from "@/assets/logo.png";
import Favicon from "@/components/Favicon";
import { 
  BookOpen, 
  Code, 
  MessageSquare, 
  BarChart3, 
  Database, 
  Brain, 
  Settings, 
  Briefcase, 
  Palette, 
  GraduationCap,
  CheckCircle,
  Star,
  Clock,
  Award,
  Users,
  Sparkles,
  Target,
  TrendingUp,
  Phone,
  Mail,
  Shield
} from "lucide-react";

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  const featuredCourses = [
    {
      title: "English Communication Accelerator",
      description: "Boost your English fluency, pronunciation, and presentation skills. 70% speaking practice with roleplay scenarios and confidence building.",
      icon: <MessageSquare className="h-6 w-6" />,
      price: "5,000",
      category: "featured",
      days: [
        "Day 1: Pronunciation & Accent Training",
        "Day 2: Grammar & Sentence Structure",
        "Day 3: Business Vocabulary",
        "Day 4: Presentation Skills",
        "Day 5: Interview Communication",
        "Day 6: Group Discussions & Debates",
        "Day 7: Confidence Building & Assessment"
      ],
      highlights: ["70% Speaking Practice", "Accent Training", "Roleplay Scenarios", "Guaranteed Job Interviews"]
    },
    {
      title: "Business Communication (English)",
      description: "Professional English for emails, meetings, and negotiations. Master workplace communication and presentation skills.",
      icon: <Briefcase className="h-6 w-6" />,
      price: "5,000",
      category: "featured",
      days: [
        "Day 1: Professional Email Writing",
        "Day 2: Meeting & Conference Calls",
        "Day 3: Presentation Techniques",
        "Day 4: Negotiation Skills",
        "Day 5: Cross-cultural Communication",
        "Day 6: Leadership Communication",
        "Day 7: Personal Branding & Networking"
      ],
      highlights: ["Email Templates", "Meeting Scripts", "Presentation Skills", "Guaranteed Job Interviews"]
    },
    {
      title: "Excel Mastery",
      description: "Master Excel from basics to advanced dashboards with hands-on tasks. Learn formulas, pivot tables, macros, and data visualization.",
      icon: <BarChart3 className="h-6 w-6" />,
      price: "5,000",
      category: "featured",
      days: [
        "Day 1: Excel Fundamentals & Functions",
        "Day 2: Advanced Formulas & Logic",
        "Day 3: Data Analysis & Pivot Tables",
        "Day 4: Charts & Data Visualization",
        "Day 5: Macros & Automation",
        "Day 6: Dashboard Creation",
        "Day 7: Real-world Projects"
      ],
      highlights: ["Hands-on Projects", "Dashboard Creation", "Macro Programming", "Guaranteed Job Interviews"]
    },
    {
      title: "Advanced English for Interviews",
      description: "Specialized English training focused on interview success. Learn to answer confidently and professionally in any interview setting.",
      icon: <Users className="h-6 w-6" />,
      price: "5,000",
      category: "featured",
      days: [
        "Day 1: Interview Basics & Confidence",
        "Day 2: Common Interview Questions",
        "Day 3: Technical Interview English",
        "Day 4: Behavioral Questions & STAR Method",
        "Day 5: Mock Interview Practice",
        "Day 6: Advanced Interview Techniques",
        "Day 7: Final Assessment & Feedback"
      ],
      highlights: ["Mock Interviews", "Interview-specific Training", "Confidence Building", "Guaranteed Job Interviews"]
    },
    {
      title: "Professional English Presentation Skills",
      description: "Master the art of professional presentations in English. Build confidence and deliver impactful presentations that impress.",
      icon: <Award className="h-6 w-6" />,
      price: "5,000",
      category: "featured",
      days: [
        "Day 1: Presentation Structure & Planning",
        "Day 2: Engaging Opening & Closing",
        "Day 3: Visual Aids & Storytelling",
        "Day 4: Body Language & Voice",
        "Day 5: Handling Q&A Sessions",
        "Day 6: Advanced Presentation Techniques",
        "Day 7: Final Presentation & Feedback"
      ],
      highlights: ["Live Presentations", "Storytelling Techniques", "Visual Design", "Guaranteed Job Interviews"]
    }
  ];

  const techCourses = [
    {
      title: "Data Science Fundamentals",
      description: "Learn the foundations of data science including statistics, Python programming, and data visualization for modern analytics roles.",
      icon: <BarChart3 className="h-6 w-6" />,
      price: "10,000",
      category: "tech",
      days: [
        "Day 1: Data Science Overview & Tools",
        "Day 2: Python for Data Science",
        "Day 3: Statistics & Probability",
        "Day 4: Data Cleaning & Preprocessing",
        "Day 5: Data Visualization",
        "Day 6: Introduction to Machine Learning",
        "Day 7: Capstone Project & Presentation"
      ],
      highlights: ["Python Programming", "Real Datasets", "Visualization Tools", "Guaranteed Job Interviews"]
    },
    {
      title: "SQL for Data Analysis",
      description: "Master SQL from basics to advanced queries for data analysis roles. Practice with real-world datasets and database optimization.",
      icon: <Database className="h-6 w-6" />,
      price: "10,000",
      category: "tech",
      days: [
        "Day 1: SQL Basics & Database Concepts",
        "Day 2: SELECT Statements & Filtering",
        "Day 3: Joins & Relationships",
        "Day 4: Aggregate Functions & Grouping",
        "Day 5: Subqueries & Advanced Queries",
        "Day 6: Database Design & Optimization",
        "Day 7: Real-world Projects"
      ],
      highlights: ["Real-world Datasets", "Database Design", "Query Optimization", "Guaranteed Job Interviews"]
    },
    {
      title: "Data Analysis Essentials",
      description: "Complete data analysis workflow using Excel, SQL, and Python. Transform raw data into actionable business insights.",
      icon: <TrendingUp className="h-6 w-6" />,
      price: "10,000",
      category: "tech",
      days: [
        "Day 1: Data Analysis Framework",
        "Day 2: Excel for Data Analysis",
        "Day 3: SQL for Data Extraction",
        "Day 4: Python for Data Processing",
        "Day 5: Statistical Analysis",
        "Day 6: Creating Business Reports",
        "Day 7: End-to-End Project"
      ],
      highlights: ["Multi-tool Approach", "Business Insights", "Report Creation", "Guaranteed Job Interviews"]
    },
    {
      title: "Artificial Intelligence Basics",
      description: "Introduction to AI and machine learning concepts with practical implementation. No prior experience needed - perfect for beginners.",
      icon: <Brain className="h-6 w-6" />,
      price: "10,000",
      category: "tech",
      days: [
        "Day 1: AI Fundamentals & Applications",
        "Day 2: Python for AI (Crash Course)",
        "Day 3: Machine Learning Concepts",
        "Day 4: Data Processing & Analysis",
        "Day 5: Building Your First AI Model",
        "Day 6: AI Tools & Platforms",
        "Day 7: Capstone Project Presentation"
      ],
      highlights: ["No Prerequisites", "Python Training", "Hands-on AI Models", "Guaranteed Job Interviews"]
    }
  ];


  const faqs = [
    {
      question: "Are these courses completely live?",
      answer: "Yes, 100% live interactive sessions with real instructors. No pre-recorded content. You get personalized attention and can ask questions in real-time."
    },
    {
      question: "Will I get a certificate?",
      answer: "Absolutely! You'll receive a verified certificate upon successful completion of the course, which you can add to your LinkedIn profile and resume."
    },
    {
      question: "Who are these courses designed for?",
      answer: "Our courses are perfect for job seekers, freshers, college students, working professionals, and educators looking to upgrade their skills and advance their careers."
    },
    {
      question: "Do you provide interview guarantee?",
      answer: "Yes! We provide 100% interview guarantee. If you don't get interview calls within 30 days of course completion, we'll provide additional support and extended mentorship until you succeed."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible payment options. You can pay in 2 parts or contact us for EMI options. We believe in making quality education accessible to everyone."
    },
    {
      question: "What if I miss a live session?",
      answer: "All sessions are recorded and shared with enrolled students. However, we highly recommend attending live sessions for maximum interaction and personalized feedback."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApply = (courseName: string) => {
    setSelectedCourse(courseName);
    scrollToSection('enrollment');
  };

  return (
    <div className="min-h-screen bg-background">
      <Favicon />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="Interview Setup Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-primary">Interview Setup</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => scrollToSection('courses')}>
                Courses
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('why-choose')}>
                Why Choose Us
              </Button>
              <Button variant="cta" onClick={() => scrollToSection('enrollment')}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background Image + Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background/95"></div>
        </div>

        {/* Decorative Blurs */}
        <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-center text-card">
          <Badge variant="secondary" className="mb-6 text-primary bg-card animate-fade-in">
            🎯 100% Interview Guarantee
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Master Job‑Ready Skills in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary-foreground">
              Just 7 Days
            </span>
          </h1>

          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-card/90 animate-fade-in">
            Live, instructor‑led bootcamps to boost your English communication, technical skills, and confidence.
            Includes certification, mock sessions, and personalized feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('courses')}
              className="text-lg px-8 py-4"
            >
              Explore Courses
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-card text-primary hover:bg-card/90 text-lg px-8 py-4 border-0"
              onClick={() => scrollToSection('enrollment')}
            >
              Apply Now
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-3 p-4 bg-card/80 rounded-lg backdrop-blur-sm">
              <Users className="h-6 w-6 text-warning" />
              <span className="font-semibold">5000+ Students</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/80 rounded-lg backdrop-blur-sm">
              <Award className="h-6 w-6 text-warning" />
              <span className="font-semibold">100% Live Sessions</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/80 rounded-lg backdrop-blur-sm">
              <TrendingUp className="h-6 w-6 text-warning" />
              <span className="font-semibold">95% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              9 Professional Bootcamps
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your Career Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each 7-day bootcamp is designed to give you job-ready skills with live instruction,
              practical projects, and industry-recognized certification.
            </p>
          </div>
          
          {/* Featured Courses - ₹5,000 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 bg-success/10 text-success">
                Featured Courses - ₹5,000 each
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-success">
                Guaranteed Job Interviews
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  days={course.days}
                  price={course.price}
                  onApply={() => handleApply(course.title)}
                  icon={course.icon}
                  highlights={course.highlights}
                />
              ))}
            </div>
          </div>

          {/* Tech & Data Courses - ₹10,000 */}
          <div>
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 bg-warning/10 text-warning">
                Tech & Data Courses - ₹10,000 each
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-warning">
                Guaranteed Job Interviews
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  days={course.days}
                  price={course.price}
                  onApply={() => handleApply(course.title)}
                  icon={course.icon}
                  highlights={course.highlights}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Interview Setup?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just teach - we transform careers with proven methods and personalized attention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Live Interactive Sessions</h3>
              <p className="text-muted-foreground">No pre-recorded content. Real instructors, real-time interaction, and immediate doubt resolution.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Feedback</h3>
              <p className="text-muted-foreground">Individual attention for every student with detailed feedback on your progress and areas of improvement.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Interview Guarantee</h3>
              <p className="text-muted-foreground">If you don't get interview calls within 30 days, we provide extended mentorship until you succeed.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-world Scenarios</h3>
              <p className="text-muted-foreground">Practice with actual interview questions, real projects, and industry-standard tools and processes.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Certification</h3>
              <p className="text-muted-foreground">Verified certificates that you can proudly display on LinkedIn and your resume to stand out.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground">95% of our students get interview calls within 2 weeks of course completion with significant skill improvement.</p>
            </Card>
          </div>
        </div>
      </section>


      {/* Enrollment Form Section */}
      <section id="enrollment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful graduates. Fill out the form below and start your journey today!
            </p>
          </div>
          
          <EnrollmentForm />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about our bootcamps.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-8 w-8" />
                <span className="text-2xl font-bold">Interview Setup</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Transforming careers through live, interactive bootcamps. 
                Join thousands of successful graduates.
              </p>
              <div className="flex gap-4">
                <Badge variant="secondary" className="text-primary">
                  100% Live Sessions
                </Badge>
                <Badge variant="secondary" className="text-primary">
                  Interview Guarantee
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>interviewsetup1@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-63921 61153</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-9335172143</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  All Courses
                </button>
                <button 
                  onClick={() => scrollToSection('why-choose')}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  Why Choose Us
                </button>
                <button 
                  onClick={() => scrollToSection('enrollment')}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2025 Interview Setup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
