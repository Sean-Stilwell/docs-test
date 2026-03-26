<template><div><h1 id="connecting-google-api-to-databricks" tabindex="-1"><a class="header-anchor" href="#connecting-google-api-to-databricks"><span>Connecting Google API to Databricks</span></a></h1>
<p>This document details how to configure credentials to connect any google API such as Google Earth Engine, BigTable, and BigQuery.</p>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/google-apis.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
-->
<h2 id="assumptions" tabindex="-1"><a class="header-anchor" href="#assumptions"><span>Assumptions</span></a></h2>
<ul>
<li>The FSDH will not provide credentials for the Google Cloud Platform and assumes the user has been provided an access by their department</li>
<li>The user is familiar with the Google product used</li>
</ul>
<h2 id="_1-create-a-google-cloud-project" tabindex="-1"><a class="header-anchor" href="#_1-create-a-google-cloud-project"><span>1. <a href="https://developers.google.com/workspace/guides/create-project" target="_blank" rel="noopener noreferrer">Create a Google Cloud Project</a></span></a></h2>
<p>Follow the link for instructions on how to create a Google Cloud Project.</p>
<h2 id="_2-enable-the-apis-services-necessary" tabindex="-1"><a class="header-anchor" href="#_2-enable-the-apis-services-necessary"><span>2. Enable the APIs &amp; Services necessary</span></a></h2>
<p>Once your project is created and selected, in the navigation bar, click on &quot;APIs &amp; Services&quot;:</p>
<p><img src="@source/en/databricks/img/google-1.png" alt="341182784_1883945795306857_7440166856820153159_n"></p>
<p>Then click on &quot;Enable APIs &amp; Services&quot;:</p>
<p><img src="@source/en/databricks/img/google-2.png" alt="341291789_178018718053904_5458837908367107510_n"></p>
<p>Search for the services you may need such as &quot;BigQuery API&quot;, &quot;BigTable API&quot;, &quot;Earth Engine API&quot;, etc. It should then appear in the search results. Click on it, then click on &quot;Enable&quot;.</p>
<h2 id="_3-create-a-service-account-and-obtain-a-private-key" tabindex="-1"><a class="header-anchor" href="#_3-create-a-service-account-and-obtain-a-private-key"><span>3. Create a Service account and obtain a private key.</span></a></h2>
<p>Once you have enabled the APIs you need in your project, open the navigation menu and click on &quot;IAM &amp; Admin&quot;:</p>
<p><img src="@source/en/databricks/img/google-3.png" alt="341174751_558854192793790_2404372516710887907_n"></p>
<p>Then click on &quot;Service Accounts&quot;:</p>
<p><img src="@source/en/databricks/img/google-4.png" alt="342383092_889586648769272_4903323285442570884_n"></p>
<p>Then create a new service account:</p>
<p><img src="@source/en/databricks/img/google-5.png" alt="341223863_914125263146363_524864849766701058_n">
Enter the necessary information (name, ID, description) in the first step, then in the second step, select the roles necessary for your service account. Depending on what service you are using, you will have to select the proper roles: for example, when using Earth Engine API, you need to select the admin, viewer or writer roles, depending on your needs:</p>
<p><img src="@source/en/databricks/img/google-6.png" alt="341285054_594648945966990_3340994669833248652_n"></p>
<p>Then, skip the 3rd step and create your service account by clicking on &quot;Done&quot;. This should bring you back to the list of all service accounts and you should see the service account you just created listed. Click on it, then click on the &quot;Keys&quot; tab:</p>
<p><img src="@source/en/databricks/img/google-7.png" alt="328758927_2692944394192271_6807215753292084072_n">
Click on &quot;Add Key&quot; and &quot;Create new key&quot;, and select the JSON format for your key:</p>
<p><img src="@source/en/databricks/img/google-8.png" alt="341264731_1182567819100669_7664721525011167448_n"></p>
<p>This will automatically create a key and download it. Make sure you keep this key.</p>
<h2 id="_4-register-your-cloud-project" tabindex="-1"><a class="header-anchor" href="#_4-register-your-cloud-project"><span>4. Register your cloud project</span></a></h2>
<p>In the case of certain APIs, you may need to register your Google Cloud project. For example, Google Earth Engine requires us to navigate to <a href="https://code.earthengine.google.com/register" target="_blank" rel="noopener noreferrer">this registering link</a> and sign-in using the same google account you use for Google Cloud, in order to register your project.</p>
<p>To register your Google Cloud</p>
<p>Select &quot;Use with a Cloud Project&quot;</p>
<p>Select &quot;Paid&quot; or &quot;Unpaid usage&quot; depending on your personal needs and role. In our case, we will select &quot;Unpaid usage&quot;. It will prompt you to select a project type, select &quot;Government&quot;.</p>
<p>Select &quot;Choose an existing cloud project&quot; and select the project you have enabled Google Earth Engine API in.</p>
<p>Finally, review the information you have given and confirm.</p>
<h2 id="_5-install-the-client-side-sdk-for-your-service" tabindex="-1"><a class="header-anchor" href="#_5-install-the-client-side-sdk-for-your-service"><span>5. Install the client-side SDK for your service</span></a></h2>
<p>Your service may require you to install a package on Databricks in order to use it, as is the case for Google Earth Engine API. For this step, we will demonstrate the installation of Google's Earth Engine API, but any packages can be installed that way.</p>
<p>There are two ways to install a package. To install a Python package in the notebook scope, run the following Python magic line (make sure to replace <code v-pre>earthengine-api</code> with your package name, which you may need to search online for):</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%pip install earthengine-api</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Upon the success of running this line, skip to the next step. If instead you want to install the package on the cluster, open the navigation bar on Databricks, and click &quot;Compute&quot;. Select the cluster you want to install the package on, then click on libraries:</p>
<p><img src="@source/en/databricks/img/google-9.png" alt="341180939_1322586438321309_3468577516645542908_n"></p>
<p>Then click on &quot;Install new&quot;:</p>
<p><img src="@source/en/databricks/img/google-10.png" alt="341112662_216410727698121_7329229316469598703_n">
In the pop-up menu, select PyPI, and in the &quot;package name&quot; field, enter the name of your package (for us: <code v-pre>earthengine-api</code>), then click &quot;Install&quot;. Once you start your cluster, it will install the library and it will be available on all notebooks that are attached to this cluster.</p>
<h2 id="_6-using-your-google-api" tabindex="-1"><a class="header-anchor" href="#_6-using-your-google-api"><span>6. Using your Google API</span></a></h2>
<p>Begin by uploading the private key we created from step 3. You can do so by either uploading to your FSDH storage, or you can upload directly to Databricks. Take note of where your key is stored, then use the following code to link to it. This code was created for the case of using Earth Engine API, but the process is extremely similar from one service to another.</p>
<h3 id="using-a-private-key-uploaded-through-the-databricks-file-upload" tabindex="-1"><a class="header-anchor" href="#using-a-private-key-uploaded-through-the-databricks-file-upload"><span>Using a private key uploaded through the Databricks File Upload</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">import ee</span>
<span class="line"></span>
<span class="line"># Enter the email associated with your service account created in step 3:</span>
<span class="line">service_account = 'my-service-account@...gserviceaccount.com'</span>
<span class="line"># In our case:</span>
<span class="line">service_account = 'david-rene@earth-engine-384112.iam.gserviceaccount.com'</span>
<span class="line"></span>
<span class="line"># Enter the path to your credentials:</span>
<span class="line">credsPath = '/dbfs/Filestore/tables/credentials.json'</span>
<span class="line"># In our case, using a key that we uploaded through Databricks file upload:</span>
<span class="line">credsPath = '/dbfs/FileStore/tables/earth_engine_384112_03e2e02ee924.json'</span>
<span class="line"></span>
<span class="line"># EARTH ENGINE ONLY:</span>
<span class="line"># We can then initialize a session:</span>
<span class="line">credentials = ee.ServiceAccountCredentials(service_account, credsPath)</span>
<span class="line">ee.Initialize(credentials)</span>
<span class="line"></span>
<span class="line"># Let's test it out:</span>
<span class="line">print(ee.Image("NASA/NASADEM_HGT/001").get("title").getInfo())</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-a-private-key-uploaded-to-fsdh-storage" tabindex="-1"><a class="header-anchor" href="#using-a-private-key-uploaded-to-fsdh-storage"><span>Using a private key uploaded to FSDH storage</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">import ee</span>
<span class="line">import json</span>
<span class="line"></span>
<span class="line"># Enter the email associated with your service account created in step 3:</span>
<span class="line">service_account = 'my-service-account@...gserviceaccount.com'</span>
<span class="line"># In our case:</span>
<span class="line">service_account = 'david-rene@earth-engine-384112.iam.gserviceaccount.com'</span>
<span class="line"></span>
<span class="line"># Enter the path to your credentials:</span>
<span class="line">credsPath = '/mnt/fsdh-dbk-main-mount/path/to/credentials.json'</span>
<span class="line"># In our case, using a key that we uploaded to FSDH storage:</span>
<span class="line">credsPath = '/mnt/fsdh-dbk-main-mount/David/earth-engine-384112-72d27e31c3b7.json'</span>
<span class="line"></span>
<span class="line">json_rows = spark.read.text(credsPath).collect() # Read the file using spark</span>
<span class="line">creds = json.loads("".join([row.value for row in json_rows])) # Load it into a proper json/dict</span>
<span class="line"></span>
<span class="line"># Dump into a json file with the original name but in filestore</span>
<span class="line">newPath = "/dbfs/FileStore/tables/"+credsPath.split("/")[-1]</span>
<span class="line">with open(newPath, "w") as f:</span>
<span class="line">    json.dump(creds,f)</span>
<span class="line"></span>
<span class="line"># EARTH ENGINE ONLY:</span>
<span class="line"># We can then initialize a session:</span>
<span class="line">credentials = ee.ServiceAccountCredentials(service_account, newPath)</span>
<span class="line">ee.Initialize(credentials)</span>
<span class="line"></span>
<span class="line"># Let's test it out:</span>
<span class="line">print(ee.Image("NASA/NASADEM_HGT/001").get("title").getInfo())</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


