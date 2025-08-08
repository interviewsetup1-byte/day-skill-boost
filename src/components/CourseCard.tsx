import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Award, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  days: string[];
  price: string;
  originalPrice?: string;
  onApply: () => void;
  icon: React.ReactNode;
  highlights: string[];
}

export const CourseCard = ({ 
  title, 
  description, 
  days, 
  price, 
  originalPrice,
  onApply, 
  icon,
  highlights
}: CourseCardProps) => {
  return (
    <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/40">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs">
            7-Day Bootcamp
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>
        
        {/* Key Features */}
        <div className="space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>
        
        {/* Course Structure */}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            7-Day Structure:
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
            {days.slice(0, 3).map((day, index) => (
              <div key={index} className="truncate">• {day}</div>
            ))}
            {days.length > 3 && (
              <div className="text-primary font-medium">+ {days.length - 3} more days</div>
            )}
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={onApply}
          variant="cta" 
          className="w-full"
        >
          Apply Now
        </Button>
        
        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>Live Sessions</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-3 w-3" />
            <span>Certificate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};