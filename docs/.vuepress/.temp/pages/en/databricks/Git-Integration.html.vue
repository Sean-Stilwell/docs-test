<template><div><h1 id="git-github-integration-with-databricks" tabindex="-1"><a class="header-anchor" href="#git-github-integration-with-databricks"><span>Git/GitHub Integration with Databricks</span></a></h1>
<h2 id="pre-requisites" tabindex="-1"><a class="header-anchor" href="#pre-requisites"><span>Pre-requisites</span></a></h2>
<ul>
<li>Familiarity with Git version control.</li>
<li>Have access to a Git repository - the creation and access to a repository is outside the scope of this guide.</li>
</ul>
<h2 id="why-use-git-github" tabindex="-1"><a class="header-anchor" href="#why-use-git-github"><span>Why use Git/GitHub</span></a></h2>
<ul>
<li>Better version control than built-in change tracker.</li>
<li>Manage code and notebooks outside Databricks.</li>
<li>Collaboration across multiple workspaces.</li>
</ul>
<h2 id="workbook-vs-repository" tabindex="-1"><a class="header-anchor" href="#workbook-vs-repository"><span>Workbook vs Repository</span></a></h2>
<ul>
<li>Once you connect Git to Databricks, you can create and use notebooks like normal and also push them to GitHub.</li>
<li>Workbook files in Git have a slightly different syntax than standard Jupyter Notebooks.</li>
</ul>
<h2 id="part-1-setup-git-github-with-databricks" tabindex="-1"><a class="header-anchor" href="#part-1-setup-git-github-with-databricks"><span>Part 1: Setup Git/GitHub with Databricks</span></a></h2>
<p>Navigate to your Settings from the top right drop down.</p>
<p><img src="@source/en/databricks/img/git-settings.png" alt="image"></p>
<p>Select Linked Accounts in the left-hand sidebar.</p>
<p><img src="@source/en/databricks/img/git-linked-accounts.png" alt="image">
Select your preferred Git provider and follow the prompts to link your account. Typically, you will need to provide your username and a token generated from your Git provider.</p>
<p>For GitHub, the access tokens can be created in Settings / Personal Access Token / Tokens (classic). On this page, click &quot;Generate new token&quot; then &quot;Generate new token (classic)&quot;.
<img src="@source/en/databricks/img/git-TokenScopes.png" alt="image"></p>
<p>As a security best practice, we do recommend configuring an expiration date of less than a year. Tokens can easily be regenerated following expiration by following these steps.</p>
<p>The scopes required are <code v-pre>repo</code> and <code v-pre>workflow</code> (optional for GitHub Actions workflows)
<img src="@source/en/databricks/img/git-tokens.png" alt="image"></p>
<p>If the token and access permissions are correctly configured - you should see a green mark in the settings page
<img src="@source/en/databricks/img/git-status.png" alt="image"></p>
<h2 id="part-2-accessing-and-modifying-repositories" tabindex="-1"><a class="header-anchor" href="#part-2-accessing-and-modifying-repositories"><span>Part 2: Accessing and Modifying Repositories</span></a></h2>
<p>To clone a repository, you will need its HTTPS access link, and its branch. In your workspace, click &quot;Create&quot; and then &quot;Git folder&quot; in the dropdown menu.
<img src="@source/en/databricks/img/git-clone-repo.png" alt="image"></p>
<p>Input the Git repository URL and then click Create Git folder.
<img src="@source/en/databricks/img/git-menu.png" alt="image"></p>
<p>Once this is configured, you can see the folder in your workspace and navigate into it.</p>
<p>Changes done from Databricks can be pushed to the repository using the built-in Git menu. Access it by right clicking in your repo files and clicking &quot;Git...&quot;.
<img src="@source/en/databricks/img/git-menu-2.png" alt="image"></p>
<p>This screen will allow you to commit and push changes, as well as pull existing changes.
<img src="@source/en/databricks/img/git-menu-3.png" alt="image"></p>
<h2 id="resolving-conflicts" tabindex="-1"><a class="header-anchor" href="#resolving-conflicts"><span>Resolving Conflicts</span></a></h2>
<p>If multiple commits impact the same code, there could be a conflict issue. The following message will appear while attempting to pull code:</p>
<p><img src="@source/en/databricks/img/git-MergeConflict.png" alt="image"></p>
<p>Select &quot;Resolve conflict using PR&quot;, which opens the following:</p>
<p><img src="@source/en/databricks/img/git-MergeConflict2.png" alt="image">
This step will ask you to create a new branch where your changes will be committed. Enter a branch name and a commit message then commit the messages again. If successful, you'll see the following message. You can follow the link in that message to make your changes.</p>
<p><img src="@source/en/databricks/img/git-MergeConflict3.png" alt="image"></p>
<!-- ## Automating Git pulls

?? -->
</div></template>


