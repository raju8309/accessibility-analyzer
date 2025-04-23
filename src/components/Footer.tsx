
import { Accessibility } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Accessibility className="h-5 w-5" />
            <p className="font-medium">AccessibilityAnalyzer</p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p id="about">
              Accessibility Analyzer helps identify accessibility issues in your web content.
              This tool highlights common WCAG issues and provides recommendations to improve accessibility.
            </p>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} AccessibilityAnalyzer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
