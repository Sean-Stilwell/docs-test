<template><div><h1 id="databricks-workflows" tabindex="-1"><a class="header-anchor" href="#databricks-workflows"><span>Databricks Workflows</span></a></h1>
<p>Workflows in Databricks are a way to orchestrate notebooks in your environment. They provide you with a high-level interface that allows you to design end-to-end workloads, such as machine learning.</p>
<p>In Databricks Workflows, you create <em>jobs</em>. <em>Jobs</em> are a list of <em>tasks</em> that you customize the order and linearity of. Here is an example <em>job</em> that contains 4 <em>tasks</em>, two of which are run in parallel:</p>
<p><img src="@source/en/databricks/img/Workflow-ExWorkflow.png" alt="Alt text"></p>
<p><em>Tasks</em> are the building blocks of jobs, they can be of any of the following type:</p>
<ul>
<li><strong>Notebook</strong>: A notebook task runs a notebook in your workspace. You can pass parameters to the notebook task, and the notebook can return a result that can be used by other tasks.</li>
<li><strong>Python script</strong>: this task can run a Python script in your workspace using any parameters.</li>
<li><strong>Python wheel</strong>: this task will allow you to install Python packages on a selected cluster, in case normal installation methods are not optimal.</li>
<li><strong>Spark SQL</strong>: A Spark SQL task runs a SQL query on a Spark cluster. You can pass parameters to the SQL query, and the query can return a result that can be used by other tasks.</li>
<li><strong>Delta live tables</strong>: This task will allow you to run a delta live tables pipeline. Delta live tables are special data flow pipeline, which you can read more about <a href="https://www.databricks.com/product/delta-live-tables" target="_blank" rel="noopener noreferrer">here</a>.</li>
<li><strong>DBT</strong>: DBT (Data Build Tool) is an open-source command-line tool that allows you to build, test, and deploy data pipelines. It is often used in conjunction with Databricks to build data pipelines that transform and load data into a data warehouse. DBT allows you to define data transformations in SQL, and it provides a way to test and document your data pipelines. You can use DBT to build data pipelines that run on Databricks, and you can also use DBT to deploy your data pipelines to other environments.</li>
<li><strong>JAR files</strong>: This task allows you to run a Java archive file on a Spark cluster.</li>
<li><strong>Spark Submit</strong>: You can submit any Java, Scala, Python or R files as a <code v-pre>spark-submit</code> task, which will run those files on a Spark cluster.</li>
</ul>
<h2 id="creating-a-job" tabindex="-1"><a class="header-anchor" href="#creating-a-job"><span><strong>Creating a job</strong></span></a></h2>
<p>To create a job, make sure you are in &quot;Data Science &amp; Engineering&quot; mode, then click on the <code v-pre>Workflows</code> icon on the navigation tab on the left, and then click on <code v-pre>Create Job</code>:</p>
<p><img src="@source/en/databricks/img/Workflow-TabWorkflow.png" alt="Alt text"></p>
<p><img src="@source/en/databricks/img/Workflow-CreateWorkflow.png" alt="Alt text"></p>
<p>This will bring you to the Job creation page, where you will be setting up your first task:</p>
<p><img src="@source/en/databricks/img/Workflow-TaskWorkflow.png" alt="Alt text">
You can define the name, type and cluster of the task. This is a great feature as this allows you to optimize your cluster usage. Once you have created your first task, you will be given the opportunity to create new tasks:</p>
<p><img src="@source/en/databricks/img/Workflow-NewTaskWorkflow.png" alt="Alt text"></p>
<p>Once you have created a second task, you will be given the opportunity to define which other tasks it depends on:</p>
<p><img src="@source/en/databricks/img/Workflow-DependencyWorkflow.png" alt="Alt text">
Tasks run only when all tasks it depends on are done running. Several tasks can depend on a single task, which creates parallel workflows, and a single task can depend on several tasks.</p>
<p>Once you are done designing your job, you can test out your job, by clicking &quot;Run now&quot; and clicking on &quot;Runs&quot; in the top left:</p>
<p><img src="@source/en/databricks/img/Workflow-RunWorkflow.png" alt="Alt text"></p>
<p>This will trigger your job, and from the &quot;runs&quot; screen, you will be able to monitor each run of your job as well as each task of your runs.</p>
<h2 id="monitoring-a-job" tabindex="-1"><a class="header-anchor" href="#monitoring-a-job"><span><strong>Monitoring a job</strong></span></a></h2>
<p>From the &quot;Runs&quot; menu, you can easily monitor each run and each task of your jobs:</p>
<p><img src="@source/en/databricks/img/Workflow-MonitorWorkflow.png" alt="Alt text"></p>
<p>The bar diagrams correspond to each run and their size corresponds to the time taken. Under each bar is a list of squares which corresponds to the individual tasks if your jobs. For each element, the colors indicate the state: green for completed, red for failure and grey for canceled.</p>
<p>In the table at the bottom, you can see and inspect every previous and ongoing run.</p>
<h2 id="job-configuration-and-scheduling" tabindex="-1"><a class="header-anchor" href="#job-configuration-and-scheduling"><span><strong>Job configuration and scheduling</strong></span></a></h2>
<p>While a job is open, from either of the &quot;runs&quot; tab or the &quot;tasks&quot; tab, you can open the right side panel, which makes many configurations available to you:</p>
<p><img src="@source/en/databricks/img/Workflow-ConfigWorkflow.png" alt="Alt text"></p>
<p>From this panel, you can:</p>
<ul>
<li><strong>See Job details</strong>, such as the Job ID, the job creator, which user is it run as and job tags.</li>
<li><strong>Configure Git</strong>: this allows you to create tasks using scripts and notebooks from remote repositories.</li>
<li><strong>Schedule jobs</strong>: you can select manual triggers (job will only run when triggered from the UI), scheduled trigger (job will run when triggered from the UI and on the schedule provided) or continuous trigger (job will be triggered whenever the previous job ran into an error or succeeded).</li>
<li><strong>View Compute details</strong>: you can view all clusters involved in the job
, see their details, swap which cluster is being used, etc.</li>
<li><strong>Notifications</strong>: set notifications (through emails or other providers) for when a job encounters an issue, succeeds, or starts.</li>
<li><strong>Permissions</strong>: select who can view, run, manage your jobs.</li>
<li><strong>Maximum concurrent runs</strong>: this allows you to define the maximum amount of runs that can be executed at the same time. By default, it is set to 1.</li>
</ul>
<p>Using these configurations, you can customize your jobs however you like and need them.</p>
<h2 id="single-notebook-scheduling" tabindex="-1"><a class="header-anchor" href="#single-notebook-scheduling"><span><strong>Single notebook scheduling</strong></span></a></h2>
<p>As part of Databricks Workflows, you can also easily schedule a notebook. In order to do so, navigate to the notebook of your choice, and click &quot;Schedule&quot;:</p>
<p><img src="@source/en/databricks/img/Workflow-ScheduleWorkflow.png" alt="Alt text"></p>
<p>This will pop up a menu that will allow you to schedule this notebook to be run as a single-task job:</p>
<p><img src="@source/en/databricks/img/Workflow-NotebookWorkflow.png" alt="Alt text">
From there, you can easily configure a schedule as well as alerts for your notebook runs. Once your job is created, you can access it from the Workflows menu as any other job:</p>
<p><img src="@source/en/databricks/img/Workflow-NbJobWorkflow.png" alt="Alt text"></p>
<h2 id="learn-more-about-databricks-workflows" tabindex="-1"><a class="header-anchor" href="#learn-more-about-databricks-workflows"><span><strong><a href="https://docs.databricks.com/workflows/index.html" target="_blank" rel="noopener noreferrer">Learn more about Databricks Workflows</a></strong></span></a></h2>
</div></template>


