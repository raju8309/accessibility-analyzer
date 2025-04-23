import { useState } from "react";
import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import ResultsPanel from "@/components/ResultsPanel";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Search, Code, FileText } from "lucide-react";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async (inputData: { type: string; content: string }) => {
    setIsAnalyzing(true);
    setAnalysisResults(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const results = generateMockResults(inputData.content);
      setAnalysisResults(results);
      
      toast({
        title: "Analysis completed",
        description: `Found ${results.issues.length} accessibility issues.`,
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis failed",
        description: "There was a problem analyzing your content.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateMockResults = (content: string) => {
    const issues = [];
    
    if (!content.includes("alt=")) {
      issues.push({
        type: "image",
        message: "Missing alt text for images",
        severity: "high",
        element: "img",
      });
    }
    
    if (!content.includes("aria-label")) {
      issues.push({
        type: "aria",
        message: "Missing ARIA labels",
        severity: "medium",
        element: "button",
      });
    }
    
    if (content.includes("<div onclick=")) {
      issues.push({
        type: "semantics",
        message: "Using div for clickable elements",
        severity: "medium",
        element: "div",
      });
    }
    
    return {
      issues,
      score: Math.max(0, 100 - (issues.length * 10)),
      timestamp: new Date().toISOString(),
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <main className="container max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Web Accessibility Analyzer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Ensure your web content is accessible to everyone with our comprehensive analysis tool.
          </p>
          <div className="flex justify-center gap-8 mb-16">
            <div className="flex items-center gap-2 text-gray-300">
              <Search className="w-5 h-5 text-blue-400" />
              <span>URL Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Code className="w-5 h-5 text-blue-400" />
              <span>HTML Input</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FileText className="w-5 h-5 text-blue-400" />
              <span>File Upload</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Input Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Start Your Analysis</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <InputForm onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
            </div>
          </section>

          {/* Results Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">Analysis Results</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              {isAnalyzing ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
                </div>
              ) : analysisResults ? (
                <ResultsPanel results={analysisResults} />
              ) : (
                <div className="text-center text-gray-400 py-12">
                  <p className="text-lg">Enter your content and click "Analyze" to get started</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
