
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

export default function SkillCard({ icon: Icon, title, description, color, delay = 0 }: SkillCardProps) {
  return (
    <div 
      className="group relative overflow-hidden glassmorphism p-6 rounded-xl hover-lift cursor-pointer transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
}
