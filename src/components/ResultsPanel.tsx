import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Info, Code } from "lucide-react";
import IssueCard from "./IssueCard";
import SummaryChart from "./SummaryChart";
import ExportOptions from "./ExportOptions";

interface ResultsPanelProps {
  results: {
    issues: any[];
    score: number;
    timestamp: string;
    url?: string;
  };
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ results }) => {
  const [activeTab, setActiveTab] = useState("issues");
  const { issues, score, timestamp, url = "local_analysis" } = results;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };
  
  return (
    <div className="space-y-6">
      {/* Score Card */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Accessibility Score</h3>
          <div className="text-4xl font-bold text-blue-400">
            {score}%
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          Analyzed on {formatDate(timestamp)}
        </div>
      </div>

      {/* Issues Summary */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Issues Found</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{issues.filter(i => i.severity === 'high').length}</div>
            <div className="text-sm text-gray-400">High Priority</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{issues.filter(i => i.severity === 'medium').length}</div>
            <div className="text-sm text-gray-400">Medium Priority</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{issues.filter(i => i.severity === 'low').length}</div>
            <div className="text-sm text-gray-400">Low Priority</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{issues.length}</div>
            <div className="text-sm text-gray-400">Total Issues</div>
          </div>
        </div>
      </div>

      {/* Issues List */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Detailed Issues</h3>
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-4 border border-gray-700"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white">{issue.message}</h4>
                  <p className="text-sm text-gray-400 mt-1">Element: {issue.element}</p>
                </div>
                <Badge 
                  variant={issue.severity === 'high' ? 'destructive' : 'secondary'}
                  className="ml-2"
                >
                  {issue.severity}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Export Results</h3>
        <ExportOptions data={results} url={url} />
      </div>
    </div>
  );
};

export default ResultsPanel;
