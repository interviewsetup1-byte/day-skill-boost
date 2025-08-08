import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  review: string;
  course: string;
  rating: number;
}

export const TestimonialCard = ({ name, review, course, rating }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'fill-warning text-warning' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-4 italic">
          "{review}"
        </blockquote>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{course} Graduate</p>
        </div>
      </CardContent>
    </Card>
  );
};