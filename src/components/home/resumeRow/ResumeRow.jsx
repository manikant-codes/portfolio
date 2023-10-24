import React from "react";
import Card from "../../common/Card";
import Skills from "./Skills";

function ResumeRow() {
  return (
    <div>
      <h2 className="row-title">Resume</h2>
      <div className="row">
        <Card title="Education" />
        <Card title="Experience" />
        <Card title="Skills" content={<Skills />} />
      </div>
    </div>
  );
}

export default ResumeRow;
