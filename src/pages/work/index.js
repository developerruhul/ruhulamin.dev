import React from "react";
import Layout from "../../components/layout";
import Projects from "./projects";
import WorkHeader from "./work-header";

const Work = () => {
  return (
    <Layout>
      <div className="container section-margin-top">
        <WorkHeader />
        <Projects />
      </div>
    </Layout>
  );
};

export default Work;
