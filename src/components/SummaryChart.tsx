
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend, PieChart, Pie, Label } from "recharts";

interface SummaryChartProps {
  summary: {
    critical: number;
    serious: number;
    moderate: number;
    minor: number;
    total: number;
  };
}

const SummaryChart: React.FC<SummaryChartProps> = ({ summary }) => {
  const chartData = [
    { name: "Critical", value: summary.critical, color: "#EF4444" },
    { name: "Serious", value: summary.serious, color: "#F97316" },
    { name: "Moderate", value: summary.moderate, color: "#EAB308" },
    { name: "Minor", value: summary.minor, color: "#3B82F6" },
  ].filter(item => item.value > 0);

  // Calculate accessibility score based on issue severity
  const getAccessibilityScore = () => {
    const maxScore = 100;
    const weightedIssues =
      summary.critical * 10 +
      summary.serious * 5 +
      summary.moderate * 2 +
      summary.minor * 0.5;
    const score = Math.max(0, Math.round(maxScore - weightedIssues));
    return score;
  };

  const accessibilityScore = getAccessibilityScore();

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[200px] text-center text-muted-foreground">
        No issues found to display
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div>
          <h3 className="text-lg font-medium mb-2 text-center">Issues Distribution (Bar)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip formatter={(value) => [`${value} issue${value !== 1 ? 's' : ''}`, 'Count']} />
              <Bar dataKey="value" name="Issues">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-bar-${index}`} fill={entry.color} />
                ))}
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div>
          <h3 className="text-lg font-medium mb-2 text-center">Issues Distribution (Pie)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={75}
                innerRadius={38}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                isAnimationActive={true}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-pie-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: any, name: any, props: any) => [`${value} issue${value !== 1 ? 's' : ''}`, 'Count']} 
                />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Issue counts and score */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-lg font-medium mb-2 text-center">Issue Counts</h3>
          <div className="flex flex-col gap-2 items-center justify-center h-[200px]">
            {chartData.map(issue => (
              <div key={issue.name} className="flex items-center gap-2">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: issue.color }}
                  aria-label={issue.name}
                />
                <span className="font-medium">{issue.name}</span>
                <span className="text-muted-foreground">({issue.value})</span>
              </div>
            ))}
            <div className="mt-4 text-muted-foreground text-xs text-center">
              Bar and Pie charts above show the breakdown of issues by severity.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-4">
          <h3 className="text-lg font-medium mb-2">Accessibility Score</h3>
          <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-gray-200">
            <div
              className="absolute inset-0 rounded-full border-8"
              style={{
                borderColor: accessibilityScore >= 80 ? "#10B981" :
                  accessibilityScore >= 60 ? "#FBBF24" :
                    accessibilityScore >= 40 ? "#F97316" : "#EF4444",
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - accessibilityScore}%)`,
                borderBottomColor: "transparent",
                borderLeftColor: "transparent",
                transform: "rotate(-45deg)"
              }}
            ></div>
            <span className="text-3xl font-bold z-10">{accessibilityScore}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            {accessibilityScore >= 90 ? "Excellent" :
              accessibilityScore >= 70 ? "Good" :
                accessibilityScore >= 50 ? "Fair" :
                  accessibilityScore >= 30 ? "Poor" : "Critical"}
          </p>
        </div>
      </div>
    </>
  );
};

export default SummaryChart;
