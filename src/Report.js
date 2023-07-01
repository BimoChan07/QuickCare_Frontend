import React, { useState } from "react";

const ReportGenerator = () => {
  const [reportData, setReportData] = useState("");
  const [generatedReport, setGeneratedReport] = useState("");

  const handleDataChange = (e) => {
    setReportData(e.target.value);
  };

  const handleGenerateReport = () => {
    // Perform report generation logic here based on the reportData
    const generatedReport = `Report generated with data: ${reportData}`;
    setGeneratedReport(generatedReport);
  };

  return (
    <div>
      <h2>Report Generator</h2>
      <textarea
        value={reportData}
        onChange={handleDataChange}
        placeholder="Enter report data..."
        rows={5}
      />
      <button onClick={handleGenerateReport}>Generate Report</button>
      {generatedReport && (
        <div>
          <h3>Generated Report:</h3>
          <pre>{generatedReport}</pre>
        </div>
      )}
    </div>
  );
};

export default ReportGenerator;
