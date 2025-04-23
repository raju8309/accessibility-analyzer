
import React from "react";
import { FileJson, FileDown, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";

interface ExportOptionsProps {
  data: any;
  url: string;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ data, url }) => {
  const filename = url.replace(/^https?:\/\//, '').replace(/[^\w]/g, '_');
  
  const exportJSON = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    saveAs(blob, `accessibility_report_${filename}.json`);
  };
  
  const exportCSV = () => {
    // Create header row
    let csvContent = "Type,Title,Description,Impact,Recommendation\n";
    
    // Add data rows
    data.issues.forEach((issue: any) => {
      const row = [
        issue.type,
        issue.title,
        issue.description,
        issue.impact,
        issue.recommendation
      ].map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',');
      
      csvContent += row + "\n";
    });
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `accessibility_report_${filename}.csv`);
  };
  
  const exportPDF = () => {
    // This is a placeholder that will be replaced with jsPDF implementation
    alert("PDF export is being prepared. It will be available soon.");
    
    // For a real implementation, we would use a library like jsPDF
    // to generate a PDF document with the scan results
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
        onClick={exportJSON}
      >
        <FileJson className="h-4 w-4" />
        Export JSON
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
        onClick={exportCSV}
      >
        <FileDown className="h-4 w-4" />
        Export CSV
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
        onClick={exportPDF}
      >
        <Upload className="h-4 w-4" />
        Export PDF
      </Button>
    </div>
  );
};

export default ExportOptions;
