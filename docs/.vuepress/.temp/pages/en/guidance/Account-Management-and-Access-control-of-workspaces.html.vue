<template><div><h1 id="account-management-and-access-control-of-workspaces" tabindex="-1"><a class="header-anchor" href="#account-management-and-access-control-of-workspaces"><span>Account Management and Access control of workspaces</span></a></h1>
<p>The account management and access control and ongoing maintenance of workspaces are the responsibility of the departments using the Federal Science DataHub (FSDH). Within the department, the role of access control, account management and ongoing maintenance is the responsibility of the Workspace lead. A departmental user requesting access to the FSDH portal is assigned the role of Workspace lead and their responsibilities, and each user's responsibilities are detailed below:</p>
<p>The following are roles and responsibilities for components within the workspace.</p>
<table>
<thead>
<tr>
<th>Role</th>
<th>Databricks Role</th>
<th>Web Application Role</th>
<th>Storage Role</th>
<th>PostgreSQL Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>Workspace lead</td>
<td>Administrators <br/> - Workspace Access <br/> - Databricks SQL Access <br/> - Allow unrestricted cluster creation <br/> - allow-instance-pool-create</td>
<td>Access Configuration, Open web application</td>
<td>Browse, Upload, Download, Generate Token</td>
<td>Database Access Connection Info</td>
</tr>
<tr>
<td>Administrator</td>
<td>Administrators <br/> - Workspace Access <br/> - Databricks SQL Access <br/> - Allow unrestricted cluster creation <br/> - allow-instance-pool-create</td>
<td>Access Configuration, Open web application</td>
<td>Browse, Upload, Download, Generate Token</td>
<td>Database Access Connection Info</td>
</tr>
<tr>
<td>Collaborator</td>
<td>Users <br /> - Workspace Access <br/> - Databricks SQL access</td>
<td>Open web application</td>
<td>Browse, Upload, Download</td>
<td>No role</td>
</tr>
<tr>
<td>Guest</td>
<td>No Databricks Access</td>
<td>Open web application</td>
<td>No Storage Access</td>
<td>No role</td>
</tr>
<tr>
<td>Data Steward</td>
<td>Users <br/> - Workspace Access <br/> - Databricks SQL Access</td>
<td>Open web application</td>
<td>Browse, Upload, Download</td>
<td>No role</td>
</tr>
</tbody>
</table>
<p>The detail roles and responsibilities are in Annex 1 and 2 of the <a href="https://163gc.sharepoint.com/:w:/r/sites/ScienceProgram/Shared%20Documents/Data%20Solutions%20for%20Science/Federal%20Science%20DataHub%20(FSDH)/Project%20Planning%20%26%20Execution/Cyber%20Security/Gate%204/Evidence/Terms%26Conditions.docx?d=w1c8fdbc8e07d4cf6b1dc68fd3394e227&amp;csf=1&amp;web=1&amp;e=u7GGfp" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.</p>
<p>5.1 Granting access and assigning a role within a workspace</p>
<p>The user is assigned the workspace lead role when they request access to the FSDG portal by completing the request via the Salesforce Portal. The user must agree to the <a href="https://163gc.sharepoint.com/:w:/r/sites/ScienceProgram/Shared%20Documents/Data%20Solutions%20for%20Science/Federal%20Science%20DataHub%20(FSDH)/Project%20Planning%20%26%20Execution/Cyber%20Security/Gate%204/Evidence/Terms%26Conditions.docx?d=w1c8fdbc8e07d4cf6b1dc68fd3394e227&amp;csf=1&amp;web=1&amp;e=u7GGfp" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and fulfil all funding and policy obligations before granting access. The workspace lead can then assign additional roles by inviting users to the workspace. The users must agree to the <a href="https://163gc.sharepoint.com/:w:/r/sites/ScienceProgram/Shared%20Documents/Data%20Solutions%20for%20Science/Federal%20Science%20DataHub%20(FSDH)/Project%20Planning%20%26%20Execution/Cyber%20Security/Gate%204/Evidence/Terms%26Conditions.docx?d=w1c8fdbc8e07d4cf6b1dc68fd3394e227&amp;csf=1&amp;web=1&amp;e=u7GGfp" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and meet all departmental policies and requirements associated with their role (for example, Reliability security clearance). In addition, the users must have a valid Government of Canada email account. Workspace lead should consult with their Departmental IT Security authorities to ensure compliance with Access Management requirements established by the Directive on Security Management (<a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32611" target="_blank" rel="noopener noreferrer">Directive on Security Management- Canada.ca</a> - B.2.3.2)</p>
<p>5.2 Managing Access control or account type change</p>
<p>Departments and, specifically, the workspace lead are responsible for notifying if any account/role changes within the workspace occur. If a workspace lead is no longer the lead of the workspace, they are responsible for assigning a new workspace lead.</p>
<p>Note: If the workspace lead abandons the workspace (leaves the organization), all roles within that workspace can submit a support request to FSDH requesting the assignment of a new workspace lead.</p>
<p>In addition, all roles within the workspace are responsible for notifying the workspace lead if:</p>
<ul>
<li>When access is no longer needed or required.</li>
<li>Access is changed or no longer needed due to transfer or termination</li>
<li>When access privileges are associated with account types or if new account types are created due to a system change or update?</li>
<li>When individual workspace usage or need-to-know changes.</li>
</ul>
<p>The workspace lead is responsible for reviewing the users within its workspace regularly. In the case the access to the workspace (termination of employment, moving projects, departments, etc.) is no longer required for the user. The workspace lead must:</p>
<ul>
<li>Disable FSDH workspace access within two business days.</li>
<li>Advise the FSDH team of the termination so that the FSDH team can terminate system-wide access.</li>
</ul>
</div></template>


