import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const featuredCourses = [
  "English Communication Accelerator",
  "Business Communication (English)",
  "Excel Mastery",
  "Advanced English for Interviews",
  "Professional English Presentation Skills"
];

const techCourses = [
  "Data Science Fundamentals",
  "SQL for Data Analysis",
  "Data Analysis Essentials",
  "Artificial Intelligence Basics"
];

const allCourses = [...featuredCourses, ...techCourses];

export const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    timing: "",
    experience: "",
    motivation: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.motivation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Create Google Form submission URL
      // Replace this URL with your actual Google Form URL
      const googleFormUrl = "https://sheetdb.io/api/v1/ryq7sdaj0yggi";
      
      const formDataToSubmit = new FormData();
      // Replace these entry IDs with your actual Google Form field IDs
      formDataToSubmit.append("Name", formData.name); // Name field
      formDataToSubmit.append("Email", formData.email); // Email field  
      formDataToSubmit.append("Phone", formData.phone); // Phone field
      formDataToSubmit.append("Course", formData.course); // Course field
      formDataToSubmit.append("Timing", formData.timing); // Timing field
      formDataToSubmit.append("Experience", formData.experience); // Experience field
      formDataToSubmit.append("Motivation", formData.motivation); // Motivation field

      // Submit to Google Form
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        timing: "",
        experience: "",
        motivation: ""
      });
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll contact you within 24 hours with course details and payment information.",
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly at interviewsetup1@gmail.com",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Apply for Your Course</CardTitle>
        <CardDescription>
          Join thousands of successful graduates. Start your transformation today!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Preferred Course *</Label>
              <Select onValueChange={(value) => setFormData({...formData, course: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured-header" disabled className="font-semibold text-primary">
                    Featured Courses (₹5,000)
                  </SelectItem>
                  {featuredCourses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                  <SelectItem value="tech-header" disabled className="font-semibold text-primary">
                    Tech & Data Courses (₹10,000)
                  </SelectItem>
                  {techCourses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timing">Preferred Batch Timing</Label>
            <Select onValueChange={(value) => setFormData({...formData, timing: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select timing preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9:00 AM - 10:00 AM)</SelectItem>
                <SelectItem value="evening">Evening (7:00 PM - 8:00 PM)</SelectItem>
                <SelectItem value="weekend">Weekend Only</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="experience">Previous Experience</Label>
            <Textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              placeholder="Tell us about your background in interviews, coding, communication, etc."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="motivation">Why do you want to join this course? *</Label>
            <Textarea
              id="motivation"
              required
              value={formData.motivation}
              onChange={(e) => setFormData({...formData, motivation: e.target.value})}
              placeholder="Share your goals and what you hope to achieve..."
              rows={3}
            />
          </div>
          
          <Button type="submit" variant="cta" size="lg" className="w-full">
            Submit Application
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Your data is secure and used only for course enrollment</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};