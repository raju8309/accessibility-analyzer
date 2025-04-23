import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Upload, FileCode } from "lucide-react";

interface InputFormProps {
  onAnalyze: (data: { type: string; content: string }) => void;
  isAnalyzing: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onAnalyze, isAnalyzing }) => {
  const [inputType, setInputType] = useState<"url" | "html" | "file">("url");
  const [urlInput, setUrlInput] = useState("");
  const [htmlInput, setHtmlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let content = "";
    
    switch (inputType) {
      case "url":
        content = urlInput.trim();
        break;
      case "html":
        content = htmlInput.trim();
        break;
      case "file":
        // The file content is already loaded into htmlInput when the file is selected
        content = htmlInput;
        break;
    }
    
    if (!content) return;
    
    onAnalyze({
      type: inputType,
      content
    });
  };

  const handleTabChange = (value: string) => {
    setInputType(value as "url" | "html" | "file");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setHtmlInput(event.target?.result as string);
    };
    reader.readAsText(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Analyze Web Accessibility</CardTitle>
        <CardDescription>
          Enter a URL, paste HTML code, or upload an HTML file to check for accessibility issues
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs value={inputType} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-gray-700">
              <TabsTrigger 
                value="url" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Search className="w-4 h-4 mr-2" />
                URL
              </TabsTrigger>
              <TabsTrigger 
                value="html" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <FileCode className="w-4 h-4 mr-2" />
                HTML
              </TabsTrigger>
              <TabsTrigger 
                value="file" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                File
              </TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="mt-4">
              <div className="space-y-4">
                <Input
                  type="url"
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
            </TabsContent>

            <TabsContent value="html" className="mt-4">
              <div className="space-y-4">
                <Textarea
                  placeholder="Paste your HTML code here"
                  value={htmlInput}
                  onChange={(e) => setHtmlInput(e.target.value)}
                  className="min-h-[200px] bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
            </TabsContent>

            <TabsContent value="file" className="mt-4">
              <div className="space-y-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".html,.htm"
                  className="hidden"
                />
                <div 
                  className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={triggerFileInput}
                >
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-400">
                    {fileName || "Click to upload HTML file"}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Button
            type="submit"
            disabled={isAnalyzing}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InputForm;
