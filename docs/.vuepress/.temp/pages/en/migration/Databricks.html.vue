<template><div><h1 id="migrating-databricks" tabindex="-1"><a class="header-anchor" href="#migrating-databricks"><span>Migrating Databricks</span></a></h1>
<p>This document provides information about:</p>
<ul>
<li>migrating your Databricks resources from the proof-of-concept (PoC) environment to your new FSDH workspace in the production (prod) environment</li>
<li>offboarding your Databricks resources from the PoC environment should you not be shifting your research to the prod environment</li>
</ul>
<p><strong>Please note: Active analysis and experimentation in PoC can continue until Oct. 31, 2025. All databases, storage, web apps, and Databricks resources must be migrated or offboarded from PoC by Nov. 30, 2025.</strong></p>
<h2 id="a-migrating-from-poc-to-prod" tabindex="-1"><a class="header-anchor" href="#a-migrating-from-poc-to-prod"><span>A. Migrating from PoC to prod</span></a></h2>
<p>To migrate your Databricks resources, you must have a new workspace in prod. Once we launch at the end of June, you can proceed with the workspace intake process through the <a href="https://hosting-services-hebergement.canada.ca/s/gc-cloud-fa-catalogue?language=en_US" target="_blank">GC Hosting Services Portal</a>. Guidance is available on the <a href="https://gcxgce.sharepoint.com/teams/10002160" target="_blank">FSDH GCXchange site</a> and <a href="https://gcxgce.sharepoint.com/:p:/t/10002160/ERGOIa1qBxFListkKG_0vXkBbJdvvBAMvOnUATGmzd2uuQ?download=1" target="_blank" rel="noopener noreferrer">FSDH product guide</a>.</p>
<p>Once your workspace has been provisioned in prod, you can migrate resources from PoC to prod. The Federal Science DataHub support team will assist you with migrating your Databricks resources to your new workspace in the PROD environment. Please submit a Support Request to get started.</p>
<p>Please note, only the following Databricks resources can be migrated from the POC environment to the PROD environment:</p>
<ul>
<li>Notebooks</li>
<li>Repositories</li>
<li>Jobs</li>
<li>Secrets</li>
<li>Table ACLs</li>
<li>ML models</li>
</ul>
<p>If you have Databricks resources not listed above (e.g., clusters, including custom conda clusters, or mounted storage), they will need to be recreated in your new workspace. Please refer to <a href="https://github.com/databrickslabs/migrate" target="_blank" rel="noopener noreferrer">Databricks documentation</a> or reach out to the FSDH team for more information.</p>
<h2 id="b-offboarding-from-poc" tabindex="-1"><a class="header-anchor" href="#b-offboarding-from-poc"><span>B. Offboarding from POC</span></a></h2>
<p>If you are not opening a workspace in the PROD environment, you may want to export your Databricks resources (e.g., notebooks, repositories, etc.) from the POC environment and import them into your local environment or another Databricks workspace.</p>
</div></template>


