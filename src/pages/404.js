import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./404.less";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className="not-found">
            <h1 clas>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
);

export default NotFoundPage;
