<template><div><h1 id="use-azcopy-to-interact-with-azure-storage-account" tabindex="-1"><a class="header-anchor" href="#use-azcopy-to-interact-with-azure-storage-account"><span>Use AzCopy to Interact with Azure Storage Account</span></a></h1>
<h2 id="useful-commands" tabindex="-1"><a class="header-anchor" href="#useful-commands"><span>Useful commands</span></a></h2>
<p>Here are some sample lines to interact with a workspace. In these sample lines, change <code v-pre>C:\mydata\stage</code> with the path of the folder or file of interest. For a complete guide on AzCopy utilization, see below.</p>
<p>Copy from local to Azure (upload a file or folder):</p>
<p><code v-pre>azcopy copy C:\mydata\stage &quot;&lt;sas_uri&gt;&quot;</code></p>
<p>Copy from Azure to local (download a file or folder):</p>
<p><code v-pre>azcopy copy &quot;&lt;sas_uri&gt;&quot; C:\mydata\stage</code></p>
<p>Recursively sync from local to Azure (mirror a folder your system to Azure):</p>
<p><code v-pre>azcopy sync C:\mydata\stage &quot;&lt;sas_uri&gt;&quot; --recursive</code></p>
<p>Recursively sync from Azure to local (mirror a folder in Azure to your system):</p>
<p><code v-pre>azcopy sync &quot;&lt;sas_uri&gt;&quot; C:\mydata\stage --recursive</code></p>
<h2 id="useful-flags" tabindex="-1"><a class="header-anchor" href="#useful-flags"><span>Useful flags</span></a></h2>
<p>You can add flags at the end of a command to change the behavior of AzCopy. Here are some useful ones:</p>
<ul>
<li><code v-pre>--recursive</code>: copy or sync all files and folders in the source folder. Without this flag, only the files and folders at the root of the source folder will be copied or synced.</li>
<li><code v-pre>--delete-destination</code>: delete files in the destination folder if they have been deleted in the source folder. This flag is only available for the <code v-pre>sync</code> command.</li>
<li><code v-pre>--overwrite=ifSourceNewer</code>: overwrite files in the destination folder if they are older than the source files. This flag is only available for the <code v-pre>sync</code> command.</li>
</ul>
<p>For more information on the flags that can be used on any command, run <code v-pre>azcopy &lt;command&gt; --help</code>.</p>
<h1 id="azcopy-guide" tabindex="-1"><a class="header-anchor" href="#azcopy-guide"><span>AzCopy Guide</span></a></h1>
<h2 id="pre-requisites" tabindex="-1"><a class="header-anchor" href="#pre-requisites"><span>Pre-requisites</span></a></h2>
<ul>
<li>Familarity with command line (e.g. PowerShell, Linux Shell scripting)</li>
<li>For command line interaction only. Users may choose to use Azure Storage Explorer and DataHub Portal Storage Explorer as alternatives if not using command line</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>In order to use AzCopy, you need to install it on your system. You can download the latest version of AzCopy <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10#download-azcopy" target="_blank" rel="noopener noreferrer">here</a>. For Windows machines, a zip file will be downloaded. Extract the content of the zip file to a folder of your choice. For Linux machines, a tar file will be downloaded. See the documention for your Linux distribution to learn how to extract the content of the tar file.</p>
<h2 id="using-azcopy" tabindex="-1"><a class="header-anchor" href="#using-azcopy"><span>Using AzCopy</span></a></h2>
<p>On Windows, the installation process will leave you with an executable file. In order to use AzCopy, you need to open a command prompt and navigate to the folder where you executable is located. You can then run AzCopy commands as such:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy &lt;command> &lt;arguments> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here are some of the more useful commands:</p>
<ul>
<li>
<p><strong>Copy</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy copy &lt;source> &lt;destination> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command will copy the source file/folder to the destination. When copying a folder, to ensure a deep copy is done, use the <code v-pre>--recursive</code> flag.</p>
</li>
<li>
<p><strong>Sync</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy sync &lt;source> &lt;destination> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command will mirror the source file or folder to the destination file or folder. In order to make a deep copy of your source, use the <code v-pre>--recursive</code> flag.</p>
</li>
<li>
<p><strong>Remove</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy remove &lt;source> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command will delete the source file or folder. In order to delete a folder, use the <code v-pre>--recursive</code> flag.</p>
</li>
<li>
<p><strong>List</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy list &lt;source> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command will list the files and folders in the source folder. In order to list the files and folders in a folder, use the <code v-pre>--recursive</code> flag.</p>
</li>
</ul>
<p>When working with these commands, the SAS token generated will point to the root of your workspace and will look similar to this:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"https://fsdhprojdw1poc.blob.core.windows.net/datahub?token-info"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>In order to point to a specific folder or file, you can add the path to that file/folder after <code v-pre>datahub</code>, as such:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"https://fsdhprojdw1poc.blob.core.windows.net/datahub/path/to/folder?token-info"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Examples:</strong></p>
<p>Copying the <code v-pre>sample.csv</code> file on my machine into the root of my workspace:</p>
<p><code v-pre>azcopy copy C:\mydata\sample.csv &quot;&lt;sas_uri&gt;&quot;</code></p>
<p>Copying a <code v-pre>sample</code> folder on my machine into the root of my workspace:</p>
<p><code v-pre>azcopy copy C:\mydata\sample &quot;&lt;sas_uri&gt;&quot; --recursive</code></p>
<p>Syncing the <code v-pre>sample</code> folder on my machine into a specific folder of my workspace:</p>
<p><code v-pre>azcopy sync C:\mydata\sample &quot;blob-name.blob.core windows.net/datahub/path/to/folder?token-info&quot; --recursive</code></p>
<h2 id="learn-more" tabindex="-1"><a class="header-anchor" href="#learn-more"><span>Learn more</span></a></h2>
<p>You can read more on AzCopy, including examples scenarios involving Azure storage but also Amazon S3 buckets or Google cloud storage, in the <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
</div></template>


