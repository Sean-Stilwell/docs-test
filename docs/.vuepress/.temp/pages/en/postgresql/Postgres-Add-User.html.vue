<template><div><h1 id="add-a-user-to-postgresql-on-fsdh" tabindex="-1"><a class="header-anchor" href="#add-a-user-to-postgresql-on-fsdh"><span>Add a User to PostgreSQL on FSDH</span></a></h1>
<p>As a workspace lead, you must create a user account for each user who needs access to the PostgreSQL database on the Federal Science DataHub (FSDH). This guide will walk you through the steps to add a user to the PostgreSQL database on FSDH.</p>
<h2 id="option-a-using-an-sql-query" tabindex="-1"><a class="header-anchor" href="#option-a-using-an-sql-query"><span>Option A. Using an SQL Query</span></a></h2>
<ol>
<li>
<p>Connect to the PostgreSQL database using a tool like <code v-pre>psql</code>, Python, or any other SQL client.</p>
</li>
<li>
<p>Run the following SQL query to create a new user:</p>
</li>
</ol>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token operator">&lt;</span>username<span class="token operator">></span> <span class="token keyword">WITH</span> PASSWORD <span class="token string">'&lt;password>'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Replace <code v-pre>&lt;username&gt;</code> with the desired username and <code v-pre>&lt;password&gt;</code> with the desired password for the new user.</p>
<ol start="3">
<li>Grant the necessary permissions to the new user. For example, to grant all privileges on a specific database, run the following SQL query:</li>
</ol>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token keyword">DATABASE</span> <span class="token operator">&lt;</span>database_name<span class="token operator">></span> <span class="token keyword">TO</span> <span class="token operator">&lt;</span>username<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Replace <code v-pre>&lt;database_name&gt;</code> with the name of the database you want to grant access to.</p>
<ol start="4">
<li>Validate that the user has been created successfully by checking the list of users in the PostgreSQL database.</li>
</ol>
<h2 id="option-b-using-pgadmin" tabindex="-1"><a class="header-anchor" href="#option-b-using-pgadmin"><span>Option B. Using pgAdmin</span></a></h2>
<ol>
<li>
<p>Open pgAdmin and connect to the PostgreSQL database.</p>
</li>
<li>
<p>Right-click on the <code v-pre>Login/Group Roles</code> node and select <code v-pre>Create</code> &gt; <code v-pre>Login/Group Role</code>.</p>
</li>
<li>
<p>In the <code v-pre>General</code> tab, enter the desired username in the <code v-pre>Name</code> field.</p>
</li>
</ol>
<p><img src="@source/en/postgresql/img/database-create-user-1.png" alt="Preview 1"></p>
<ol start="4">
<li>
<p>In the <code v-pre>Definition</code> tab, enter the desired password in the <code v-pre>Password</code> field.</p>
</li>
<li>
<p>In the <code v-pre>Role Privileges</code> tab, grant the necessary privileges to the new user.</p>
</li>
<li>
<p>Click <code v-pre>Save</code> to create the new user.</p>
</li>
<li>
<p>Validate that the user has been created successfully by checking the list of users in the PostgreSQL database.</p>
</li>
</ol>
</div></template>


