import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseCard } from "@/components/CourseCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import heroImage from "@/assets/hero-image.jpg";
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

  const courses = [
    {
      title: "EdTech Fundamentals Bootcamp",
      description: "Gain an overview of modern educational technology, tools, and pedagogy. Design and present your own EdTech-based lesson or project.",
      icon: <GraduationCap className="h-6 w-6" />,
      days: [
        "Day 1: EdTech Landscape & Overview",
        "Day 2: Learning Theories & Digital Pedagogy",
        "Day 3: Content Creation Tools",
        "Day 4: Learning Management Systems",
        "Day 5: Assessment & Analytics",
        "Day 6: Project Development",
        "Day 7: Presentation & Future Trends"
      ],
      highlights: ["Live Interactive Sessions", "Project-Based Learning", "Industry Tools", "Certificate of Completion"]
    },
    {
      title: "Interview Mastery: Coding & HR",
      description: "Complete interview preparation combining technical coding challenges with behavioral HR questions. Includes mock sessions and personalized feedback.",
      icon: <Code className="h-6 w-6" />,
      days: [
        "Day 1: Interview Strategy & Mindset",
        "Day 2: Data Structures & Algorithms",
        "Day 3: Coding Practice & Problem Solving",
        "Day 4: Behavioral Questions & STAR Method",
        "Day 5: Mock Technical Interviews",
        "Day 6: Mock HR Interviews",
        "Day 7: Final Assessment & Feedback"
      ],
      highlights: ["100% Interview Guarantee", "Mock Interview Sessions", "Personalized Feedback", "Resume Review"]
    },
    {
      title: "English Communication Accelerator",
      description: "Boost your English fluency, pronunciation, and presentation skills. 70% speaking practice with roleplay scenarios and confidence building.",
      icon: <MessageSquare className="h-6 w-6" />,
      days: [
        "Day 1: Pronunciation & Accent Training",
        "Day 2: Grammar & Sentence Structure",
        "Day 3: Business Vocabulary",
        "Day 4: Presentation Skills",
        "Day 5: Interview Communication",
        "Day 6: Group Discussions & Debates",
        "Day 7: Confidence Building & Assessment"
      ],
      highlights: ["70% Speaking Practice", "Accent Training", "Roleplay Scenarios", "Confidence Building"]
    },
    {
      title: "Advanced Excel Mastery",
      description: "Master Excel from basics to advanced dashboards with hands-on tasks. Learn formulas, pivot tables, macros, and data visualization.",
      icon: <BarChart3 className="h-6 w-6" />,
      days: [
        "Day 1: Excel Fundamentals & Functions",
        "Day 2: Advanced Formulas & Logic",
        "Day 3: Data Analysis & Pivot Tables",
        "Day 4: Charts & Data Visualization",
        "Day 5: Macros & Automation",
        "Day 6: Dashboard Creation",
        "Day 7: Real-world Projects"
      ],
      highlights: ["Hands-on Projects", "Dashboard Creation", "Macro Programming", "Data Analysis Skills"]
    },
    {
      title: "Complete SQL Master",
      description: "SQL fundamentals to advanced queries for data analysis and backend roles. Practice with real-world datasets and database design.",
      icon: <Database className="h-6 w-6" />,
      days: [
        "Day 1: SQL Basics & Database Concepts",
        "Day 2: SELECT Statements & Filtering",
        "Day 3: Joins & Relationships",
        "Day 4: Aggregate Functions & Grouping",
        "Day 5: Subqueries & Advanced Queries",
        "Day 6: Database Design & Optimization",
        "Day 7: Real-world Projects"
      ],
      highlights: ["Real-world Datasets", "Database Design", "Query Optimization", "Industry Best Practices"]
    },
    {
      title: "AI for Everyone: Practical Introduction",
      description: "Learn AI/ML basics with Python and create a capstone project. No prior experience needed - designed for absolute beginners.",
      icon: <Brain className="h-6 w-6" />,
      days: [
        "Day 1: AI Fundamentals & Applications",
        "Day 2: Python for AI (Crash Course)",
        "Day 3: Machine Learning Concepts",
        "Day 4: Data Processing & Analysis",
        "Day 5: Building Your First AI Model",
        "Day 6: AI Tools & Platforms",
        "Day 7: Capstone Project Presentation"
      ],
      highlights: ["No Prerequisites", "Python Crash Course", "Hands-on AI Models", "Capstone Project"]
    },
    {
      title: "System Design Interview Crash Course",
      description: "Master system design concepts and methodologies. Practice with mock exercises and learn to architect scalable systems.",
      icon: <Settings className="h-6 w-6" />,
      days: [
        "Day 1: System Design Fundamentals",
        "Day 2: Scalability & Load Balancing",
        "Day 3: Database Design & Storage",
        "Day 4: Caching & Performance",
        "Day 5: Microservices Architecture",
        "Day 6: Mock System Design Interviews",
        "Day 7: Advanced Topics & Best Practices"
      ],
      highlights: ["Mock Design Sessions", "Scalability Concepts", "Architecture Patterns", "Industry Standards"]
    },
    {
      title: "Effective Business Communication",
      description: "Professional English for emails, meetings, and negotiations. Master workplace communication and presentation skills.",
      icon: <Briefcase className="h-6 w-6" />,
      days: [
        "Day 1: Professional Email Writing",
        "Day 2: Meeting & Conference Calls",
        "Day 3: Presentation Techniques",
        "Day 4: Negotiation Skills",
        "Day 5: Cross-cultural Communication",
        "Day 6: Leadership Communication",
        "Day 7: Personal Branding & Networking"
      ],
      highlights: ["Email Templates", "Meeting Scripts", "Presentation Skills", "Negotiation Tactics"]
    },
    {
      title: "EdTech Product Design Workshop",
      description: "Design an EdTech product from ideation to pitch. Learn user research, prototyping, and product strategy for education technology.",
      icon: <Palette className="h-6 w-6" />,
      days: [
        "Day 1: Product Design Thinking",
        "Day 2: User Research & Personas",
        "Day 3: Ideation & Problem Definition",
        "Day 4: Prototyping & Wireframing",
        "Day 5: User Testing & Iteration",
        "Day 6: Business Model & Strategy",
        "Day 7: Final Pitch & Presentation"
      ],
      highlights: ["Design Thinking Process", "Prototyping Tools", "User Research", "Pitch Presentation"]
    },
    {
      title: "AI Tools for Teachers",
      description: "AI tools for assessments, content creation, and student success. Transform your teaching with practical AI applications.",
      icon: <Sparkles className="h-6 w-6" />,
      days: [
        "Day 1: AI in Education Overview",
        "Day 2: Content Creation with AI",
        "Day 3: Assessment & Grading Tools",
        "Day 4: Student Analytics & Insights",
        "Day 5: Personalized Learning Platforms",
        "Day 6: Classroom Management AI",
        "Day 7: Implementation Strategy"
      ],
      highlights: ["Teacher-Focused", "Practical AI Tools", "Assessment Automation", "Student Analytics"]
    }
  ];

  const testimonials = [
    {
      name: "Pooja R.",
      review: "I cracked my first job interview after the coding bootcamp! The mock sessions and personalized feedback were game-changers.",
      course: "Interview Mastery",
      rating: 5
    },
    {
      name: "Ravi T.",
      review: "The English course boosted my confidence daily. Now I speak fluently in meetings and presentations.",
      course: "English Communication",
      rating: 5
    },
    {
      name: "Sneha M.",
      review: "Mock interviews and feedback were incredible! I got selected in 3 companies within 2 weeks.",
      course: "Interview Mastery",
      rating: 5
    },
    {
      name: "Arjun K.",
      review: "Excel course made data analysis so easy! I got promoted within 3 months of completing the course.",
      course: "Excel Mastery",
      rating: 5
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Interview Setup</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => scrollToSection('courses')}>
                Courses
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>
                Reviews
              </Button>
              <Button variant="cta" onClick={() => scrollToSection('enrollment')}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-6 text-primary bg-white/90">
            🎯 100% Interview Guarantee
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Job-Ready Skills in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warning to-white">
              Just 7 Days
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our live, instructor-led bootcamps to boost your English communication, 
            technical skills, or EdTech expertise. Includes certifications, mock sessions, 
            and personalized feedback.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('courses')}
              className="text-lg px-8 py-4"
            >
              Explore Courses
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              onClick={() => scrollToSection('enrollment')}
            >
              Apply Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="h-6 w-6 text-warning" />
              <span className="font-semibold">5000+ Students</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Award className="h-6 w-6 text-warning" />
              <span className="font-semibold">100% Live Sessions</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
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
              10 Professional Bootcamps
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your Career Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each 7-day bootcamp is designed to give you job-ready skills with live instruction,
              practical projects, and industry-recognized certification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                days={course.days}
                price="5,000"
                originalPrice="7,000"
                onApply={() => handleApply(course.title)}
                icon={course.icon}
                highlights={course.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              ⭐ 4.9/5 Average Rating
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Success Stories from Our Students
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real students, real results. See how our bootcamps transformed their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
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
                  onClick={() => scrollToSection('testimonials')}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  Student Reviews
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
