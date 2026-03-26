<template><div><h1 id="working-with-azure-storage" tabindex="-1"><a class="header-anchor" href="#working-with-azure-storage"><span>Working with Azure Storage</span></a></h1>
<h2 id="what-is-azure-storage" tabindex="-1"><a class="header-anchor" href="#what-is-azure-storage"><span>What is Azure Storage</span></a></h2>
<p>The Federal Science DataHub uses Azure Storage, Microsoft's cloud storage solution for modern data storage scenarios. Azure Storage offers highly available, massively scalable, durable, and secure storage for a variety of data objects in the cloud.</p>
<p>There are two key types of storage accounts:</p>
<ul>
<li><strong>Azure Data Lake Storage (Gen2)</strong> - designed for big data analytics and provides Access Control Lists at the file and folder level</li>
<li><strong>Azure Blob Storage</strong> - basic storage account - doesn't provide Access Control at the file and folder level but is required for compatibility in certain scenarios.</li>
</ul>
<h2 id="how-to-copy-files-to-azure" tabindex="-1"><a class="header-anchor" href="#how-to-copy-files-to-azure"><span>How to copy files to Azure</span></a></h2>
<p>You have the option to use the browser interface or command line interface (CLI) options to upload/download.</p>
<p><strong>Datahub Storage Explorer</strong> is the simple method for working with Azure Storage accounts. The storage explorer provides a drag and drop interface and is accessible from the Workspace page. The tool enables users to upload and download files.</p>
<h2 id="automated-upload-and-large-files" tabindex="-1"><a class="header-anchor" href="#automated-upload-and-large-files"><span>Automated upload and large files</span></a></h2>
<p>AzCopy is the recommended option for working with large files and the tool can also be integrated into scripts. The tool is available for Windows and Linux.</p>
</div></template>


