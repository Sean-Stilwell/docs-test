<template><div><h1 id="databricks-vs-code-extension" tabindex="-1"><a class="header-anchor" href="#databricks-vs-code-extension"><span>Databricks VS Code Extension</span></a></h1>
<p>Using the Databricks VS Code extension, you can connect to a Databricks workspace from within VS Code. This allows you to:</p>
<ul>
<li>Write your code locally in VS Code, and then run it remotely on a Databricks cluster.</li>
<li>Run SQL queries on a Databricks cluster and see the results directly in VS Code.</li>
<li>Manage your Databricks clusters.</li>
</ul>
<h2 id="why-use-it" tabindex="-1"><a class="header-anchor" href="#why-use-it"><span>Why use it?</span></a></h2>
<p>Visual Studio Code is an extremely popular code editor. As an open source system, it has a large community of contributors and users. It is also highly extensible, allowing users to install a wide variety of extensions to support for different programming languages, debugging, and more.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<ul>
<li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>.</li>
<li>A Databricks workspace on the Federal Science DataHub.</li>
</ul>
<h2 id="install-the-extension" tabindex="-1"><a class="header-anchor" href="#install-the-extension"><span>Install the extension</span></a></h2>
<ol>
<li>Open Visual Studio Code.</li>
<li>Click the <strong>Extensions</strong> icon in the left navigation bar.</li>
<li>Search for <strong>Databricks</strong>.</li>
<li>Click <strong>Install</strong>. The correct extension is shown in the screenshot below.
<img src="@source/en/databricks/img/vscode_databricks_1.png" alt="Databricks extension"></li>
</ol>
<h2 id="connect-to-a-databricks-workspace" tabindex="-1"><a class="header-anchor" href="#connect-to-a-databricks-workspace"><span>Connect to a Databricks workspace</span></a></h2>
<ol>
<li>Click the <strong>Databricks</strong> icon in the left navigation bar.</li>
<li>Click <strong>Configure</strong>.</li>
<li>Enter the URL of your Databricks workspace in the space shown below, up until <code v-pre>.net/</code>. For example, if your workspace URL is <code v-pre>https://sample.azuredatabricks.net/?o=111111111111#</code>, enter <code v-pre>https://sample.azuredatabricks.net/</code>.
<img src="@source/en/databricks/img/vscode_databricks_2.png" alt="Databricks extension"></li>
<li>On the next screen, select <strong>Edit Databricks profiles</strong></li>
<li>On the screen that opens, complete the following and save the file:</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[DEFAULT]</span>
<span class="line">host = https://sample.azuredatabricks.net/</span>
<span class="line">token = your_token</span>
<span class="line">jobs-api-version = 2.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>[DEFAULT]</strong> is the name of the profile. You can change it to anything you want.</li>
<li><strong>host</strong> is the same that you entered in the previous step.</li>
<li><strong>token</strong> is your personal access token. To generate a token, see <a href="https://docs.databricks.com/en/dev-tools/auth.html#databricks-personal-access-token-authentication" target="_blank" rel="noopener noreferrer">Databricks personal access token authentication</a></li>
<li><strong>jobs-api-version</strong> should remain unchanged.</li>
</ul>
<p>After completing these steps, click <strong>Configure</strong> again and access your saved <strong>[DEFAULT]</strong> profile. Databricks will connect automatically.</p>
<h2 id="run-local-code" tabindex="-1"><a class="header-anchor" href="#run-local-code"><span>Run Local Code</span></a></h2>
<blockquote>
<p><strong>NOTE:</strong> You must open a folder to use this part of the extension. To do so, click File &gt; Open Folder and select the folder where you keep your code.</p>
</blockquote>
<h3 id="attach-a-cluster" tabindex="-1"><a class="header-anchor" href="#attach-a-cluster"><span>Attach a Cluster</span></a></h3>
<p>Before running code, you must attach a cluster.</p>
<ol>
<li>Open the <strong>Databricks</strong> icon in the left navigation bar.</li>
<li>If no cluster is attached, hover over the <strong>Cluster</strong> bar and click <strong>Configure Cluster</strong>, as shown in the screenshot below.
<img src="@source/en/databricks/img/vscode_databricks_3.png" alt="Databricks extension"></li>
<li>From the dropdown, select the cluster you want to attach, as shown in the screenshot below.
<img src="@source/en/databricks/img/vscode_databricks_4.png" alt="Databricks extension"></li>
<li>You can now start the cluster from the extension.</li>
</ol>
<blockquote>
<p><strong>NOTE:</strong> You cannot create a cluster in the extension. You must create it in Databricks itself.</p>
</blockquote>
<h3 id="writing-your-code" tabindex="-1"><a class="header-anchor" href="#writing-your-code"><span>Writing Your Code</span></a></h3>
<p>Any <code v-pre>.py</code> file works, but you can format them to leverage the notebook functionality of Databricks.</p>
<p>To use a notebook, put <code v-pre># Databricks notebook source</code> at the top of your <code v-pre>.py</code> file. This tells Databricks to treat the file as a notebook. You can then use the following commands to control the notebook:</p>
<ul>
<li><code v-pre># COMMAND ----------</code> creates a new cell.</li>
<li><code v-pre># MAGIC %md</code> creates a markdown cell.</li>
<li><code v-pre># MAGIC %sql</code> creates a SQL cell.</li>
<li><code v-pre># MAGIC %scala</code> creates a Scala cell.</li>
<li><code v-pre># MAGIC %r</code> creates an R cell.</li>
<li><code v-pre># MAGIC %python</code> creates a Python cell.</li>
</ul>
<blockquote>
<p><strong>NOTE:</strong> You should ensure that any libraries you import are installed on the cluster. You can do this by including the <code v-pre>pip install</code> command in your code or by installing the libraries on the cluster itself.</p>
</blockquote>
<h3 id="run-local-code-on-a-cluster" tabindex="-1"><a class="header-anchor" href="#run-local-code-on-a-cluster"><span>Run Local Code on a Cluster</span></a></h3>
<ol>
<li>Open the <strong>Explorer</strong> menu in the left navigation bar.</li>
<li>Navigate to the file you want to run. You can use any time of file that you can run in Databricks (R, Python, etc).</li>
<li>Ensure the cluster is started, then right-click the file and select <strong>Run File as Workflow in Databricks</strong>, as shown in the screenshot below.
<img src="@source/en/databricks/img/vscode_databricks_5.png" alt="Databricks extension"></li>
<li>The file will run on the cluster. You can see the results in the <strong>Output</strong> window.
<img src="@source/en/databricks/img/vscode_databricks_6.png" alt="Databricks extension"></li>
</ol>
<blockquote>
<p><strong>NOTE:</strong> Your code will get copied to Databricks under the <code v-pre>.ide</code> folder in your workspace.</p>
</blockquote>
</div></template>


