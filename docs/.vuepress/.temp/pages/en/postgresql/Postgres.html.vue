<template><div><h1 id="create-and-use-a-postgresql-database" tabindex="-1"><a class="header-anchor" href="#create-and-use-a-postgresql-database"><span>Create and use a PostgreSQL Database</span></a></h1>
<!---removed due to accessibility requirements
## Video
<video width="600" height="350" controls>
    <source src="/api/media/postgres.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
-->
<p>The Federal Science DataHub provides the ability to provision a PostgreSQL database for your workspace. This guide will walk you through the process of creating a PostgreSQL database and using it in code.</p>
<h2 id="how-to-provision-a-postgresql-database" tabindex="-1"><a class="header-anchor" href="#how-to-provision-a-postgresql-database"><span>How to provision a PostgreSQL Database</span></a></h2>
<ol>
<li>Navigate to the workspace you want to create a PostgreSQL database in.</li>
<li>Navigate to the <code v-pre>Toolbox</code> tab under the <code v-pre>Administration</code> category.
<img src="@source/en/postgresql/img/database-1.png" alt=""></li>
<li>Within a few minutes, the database will be provisioned and you will see it in the <code v-pre>Toolbox</code> tab. If the database does not provision, please fill out a support request.</li>
</ol>
<h2 id="how-to-use-your-postgresql-database" tabindex="-1"><a class="header-anchor" href="#how-to-use-your-postgresql-database"><span>How to use your PostgreSQL Database</span></a></h2>
<ol>
<li>Navigate to the workspace you want to use the PostgreSQL database in.</li>
<li>Navigate to the <code v-pre>SQL Database</code> tab under the <code v-pre>Workspace Tools</code> category. This page provides you with the needed information to connect to your database.</li>
<li><strong>Before trying to use the database</strong>, you must add your IP address to the firewall rules.
<ul>
<li>Navigate to the bottom of the page and click <code v-pre>Add Current IP Address</code> to add your local IP address to the firewall rules.</li>
<li>If you switch networks or toggle your VPN, you will need to add your new IP address to the firewall rules.</li>
<li>To give Databricks access to the database, you will need to add the address <code v-pre>0.0.0.0</code> to the firewall rules.</li>
<li><strong>NOTE:</strong> Changes can take up to 15 minutes to apply.
<img src="@source/en/postgresql/img/database-2.png" alt=""></li>
</ul>
</li>
<li>After adding your IP address to the firewall rules, you can use the connection info provided for Databricks, Python, R, Java, and C#.
<img src="@source/en/postgresql/img/database-3.png" alt=""></li>
</ol>
</div></template>


