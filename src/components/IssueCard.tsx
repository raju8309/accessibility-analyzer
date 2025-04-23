
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

interface IssueProps {
  issue: {
    id: string;
    type: string;
    title: string;
    description: string;
    impact: string;
    recommendation: string;
    snippet?: string;
    fixedSnippet?: string;
  };
}

const IssueCard: React.FC<IssueProps> = ({ issue }) => {
  const [showCode, setShowCode] = useState(false);
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "critical": return "bg-red-500";
      case "serious": return "bg-orange-500";
      case "moderate": return "bg-yellow-500";
      case "minor": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };
  
  const getTypeName = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };
  
  return (
    <Card className={`issue-${issue.type} overflow-hidden`}>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-lg">{issue.title}</CardTitle>
          <Badge className={getTypeColor(issue.type)}>
            {getTypeName(issue.type)}
          </Badge>
        </div>
        <CardDescription>{issue.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Impact</h4>
            <p className="text-sm text-muted-foreground">{issue.impact}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Recommendation</h4>
            <p className="text-sm text-muted-foreground">{issue.recommendation}</p>
          </div>
        </div>
        
        {(issue.snippet || issue.fixedSnippet) && showCode && (
          <div className="mt-4 space-y-4">
            {issue.snippet && (
              <div>
                <h4 className="text-sm font-medium mb-1 flex items-center">
                  <Code className="h-4 w-4 mr-1" /> 
                  <span>Problematic Code</span>
                </h4>
                <pre className="p-2 bg-muted rounded-md overflow-x-auto text-xs">
                  <code>{issue.snippet}</code>
                </pre>
              </div>
            )}
            
            {issue.fixedSnippet && (
              <div>
                <h4 className="text-sm font-medium mb-1 flex items-center">
                  <Code className="h-4 w-4 mr-1" /> 
                  <span>Suggested Fix</span>
                </h4>
                <pre className="p-2 bg-muted rounded-md overflow-x-auto text-xs">
                  <code>{issue.fixedSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {(issue.snippet || issue.fixedSnippet) && (
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1"
          >
            <Code className="h-4 w-4" />
            {showCode ? "Hide Code" : "Show Code"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default IssueCard;
