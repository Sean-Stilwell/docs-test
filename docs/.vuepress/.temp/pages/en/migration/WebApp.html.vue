<template><div><h1 id="migrating-web-apps" tabindex="-1"><a class="header-anchor" href="#migrating-web-apps"><span>Migrating Web Apps</span></a></h1>
<p>This document provides instructions about:</p>
<ul>
<li>migrating your web apps from the proof-of-concept (PoC) environment to your new FSDH workspace in the production (prod) environment</li>
<li>offboarding your web apps from PoC should you not be shifting your research to prod</li>
</ul>
<p><strong>Please note: Active analysis and experimentation in PoC can continue until Oct. 31, 2025. All databases, storage, web apps, and Databricks resources must be migrated or offboarded from PoC by Nov. 30, 2025.</strong></p>
<h2 id="a-migrating-from-poc-to-prod" tabindex="-1"><a class="header-anchor" href="#a-migrating-from-poc-to-prod"><span>A. Migrating from PoC to Prod</span></a></h2>
<p>To migrate your web apps, you must have a new workspace in prod. Once we launch at the end of June, you can proceed with the workspace intake process through the <a href="https://hosting-services-hebergement.canada.ca/s/gc-cloud-fa-catalogue?language=en_US" target="_blank">GC Hosting Services Portal</a>. Guidance is available on the <a href="https://gcxgce.sharepoint.com/teams/10002160" target="_blank">FSDH GCXchange site</a> and <a href="https://gcxgce.sharepoint.com/:p:/t/10002160/ERGOIa1qBxFListkKG_0vXkBbJdvvBAMvOnUATGmzd2uuQ?download=1" target="_blank" rel="noopener noreferrer">FSDH product guide</a>.</p>
<p>To migrate your web apps from PoC to prod, you can simply redeploy your web app in prod using your existing <code v-pre>docker-compose.yml</code> file stored in your Git repository. Please stop your web app in PoC once you have successfully deployed it in prod.</p>
<p><strong>NOTE:</strong> You may need to update your images or <code v-pre>docker-compose.yml</code> file, especially if you use any configurations specific to PoC, such as PostgreSQL connection strings or Databricks connection strings.</p>
<h2 id="b-offboarding-from-poc" tabindex="-1"><a class="header-anchor" href="#b-offboarding-from-poc"><span>B. Offboarding from PoC</span></a></h2>
<p>To offboard your web apps from PoC, you can simply stop your web app in the FSDH portal. The app can then be redeployed on a different platform or environment using your images.</p>
<h2 id="c-support" tabindex="-1"><a class="header-anchor" href="#c-support"><span>C. Support</span></a></h2>
<p>If you encounter any issues during the migration process, please contact the Federal Science DataHub support team by submitting a Support Request. Our team is happy to assist with migration or offboarding your web app.</p>
</div></template>


