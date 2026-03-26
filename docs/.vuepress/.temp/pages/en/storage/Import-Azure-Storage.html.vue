<template><div><h1 id="importing-an-existing-azure-storage-account" tabindex="-1"><a class="header-anchor" href="#importing-an-existing-azure-storage-account"><span>Importing an Existing Azure Storage Account</span></a></h1>
<p>Importing your own Azure Storage account in Datahub's File Explorer interface is quite simple. You only need the account name and an access key to set it up. To get this information, use the following steps.</p>
<ol>
<li>
<p>Navigate to your FSDH storage and click the Current Container dropdown:
<img src="@source/en/storage/img/storage-dropdown.png" alt="Current container dropdown"></p>
</li>
<li>
<p>Under &quot;Add Account&quot;, click &quot;Azure&quot; to open this menu:
<img src="@source/en/storage/img/storage-add-azure.png" alt="Add Azure storage"></p>
</li>
<li>
<p>Navigate to the storage account in your Azure Portal, and select <strong>Access keys</strong> under the <strong>Security + networking</strong> section in the left menu.<br>
<img src="@source/en/storage/img/import_azure-01.png" alt="Access keys in menu"></p>
</li>
<li>
<p>Note the <strong>Storage account name</strong> - this will need to be entered into the account configuration dialog in Datahub. For the access key, you can use either of the keys. If the key being used gets rotated (i.e. a new one is generated to replace it), the setting in Datahub will need to be updated. Click on the <strong>Show</strong> button beside the key you wish to use.<br>
<img src="@source/en/storage/img/import_azure-02.png" alt="Access keys page"></p>
</li>
<li>
<p>When the key is revealed, you can use the <strong>Copy to clipboard</strong> button to copy the key.<br>
<img src="@source/en/storage/img/import_azure-03.png" alt="Copy access key"></p>
</li>
</ol>
<p>The <strong>Storage Account Name</strong> and <strong>Account Key</strong> can now be entered into the Azure storage dialogue.<br>
<img src="@source/en/storage/img/import_azure-04.png" alt="Azure storage dialogue"></p>
</div></template>


