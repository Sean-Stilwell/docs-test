<template><div><h1 id="gestion-des-comptes-et-controle-d-acces-aux-espaces-de-travail" tabindex="-1"><a class="header-anchor" href="#gestion-des-comptes-et-controle-d-acces-aux-espaces-de-travail"><span>Gestion des comptes et contrôle d'accès aux espaces de travail</span></a></h1>
<p>La gestion des comptes et le contrôle d'accès ainsi que la maintenance continue des espaces de travail relèvent de la responsabilité des départements qui utilisent le DataHub scientifique federal (DHSF). Au sein du département, le rôle de contrôle d'accès, de gestion des comptes et de maintenance continue incombe au responsable de l'espace de travail. Un utilisateur du département qui demande l'accès au portail du DHSF se voit attribuer le rôle de responsable de l'espace de travail et ses responsabilités, et les responsabilités de chaque utilisateur sont détaillées ci-dessous:</p>
<p>Les rôles et responsabilités des composants de l'espace de travail sont les suivants.</p>
<table>
<thead>
<tr>
<th>Rôle</th>
<th>Rôle Databricks</th>
<th>Rôle de l'application Web</th>
<th>Rôle de stockage</th>
<th>Rôle PostgreSQL</th>
</tr>
</thead>
<tbody>
<tr>
<td>Responsable de l'espace de travail</td>
<td>Administrateurs <br/> - Accès à l'espace de travail <br/> - Accès SQL Databricks <br/> - Autoriser la création de clusters sans restriction <br/> - allow-instance-pool-create</td>
<td>Configuration de l'accès, ouverture de l'application Web</td>
<td>Parcourir, télécharger, télécharger, générer un jeton</td>
<td>Informations de connexion à la base de données</td>
</tr>
<tr>
<td>Administrateur</td>
<td>Administrateurs <br/> - Accès à l'espace de travail <br/> - Accès SQL Databricks <br/> - Autoriser la création de clusters sans restriction <br/> - allow-instance-pool-create</td>
<td>Configuration de l'accès, ouverture de l'application Web</td>
<td>Parcourir, télécharger, télécharger, générer un jeton</td>
<td>Informations de connexion à la base de données</td>
</tr>
<tr>
<td>Collaborateur</td>
<td>Utilisateurs <br /> - Accès à l'espace de travail <br/> - Accès SQL Databricks</td>
<td>Ouvrir l'application Web</td>
<td>Parcourir, télécharger, télécharger</td>
<td>Aucun rôle</td>
</tr>
<tr>
<td>Invité</td>
<td>Pas d'accès Databricks</td>
<td>Ouvrir l'application Web</td>
<td>Pas d'accès au stockage</td>
<td>Aucun rôle</td>
</tr>
<tr>
<td>Responsable des données</td>
<td>Utilisateurs <br/> - Accès à l'espace de travail <br/> - Accès SQL Databricks</td>
<td>Ouvrir l'application Web</td>
<td>Parcourir, télécharger, télécharger</td>
<td>Aucun rôle</td>
</tr>
</tbody>
</table>
<p>Les rôles et responsabilités détaillés sont dans les annexes 1 et 2 des <a href="https://163gc.sharepoint.com/:w:/r/sites/ScienceProgram/Shared%20Documents/Data%20Solutions%20for%20Science/Federal%20Science%20DataHub%20(FSDH)/Project%20Planning%20%26%20Execution/Cyber%20Security/Gate%204/Evidence/Terms%26Conditions.docx?d=w1c8fdbc8e07d4cf6b1dc68fd3394e227&amp;csf=1&amp;web=1&amp;e=u7GGfp" target="_blank" rel="noopener noreferrer">conditions générales</a>.</p>
<p>5.1 Octroi d'un accès et attribution d'un rôle au sein d'un espace de travail
L'utilisateur se voit attribuer le rôle de responsable de l'espace de travail lorsqu'il demande l'accès au portail FSDG en remplissant la demande via le portail Salesforce. L'utilisateur doit accepter les <a href="https://163gc.sharepoint.com/:w:/r/sites/ScienceProgram/Shared%20Documents/Data%20Solutions%20for%20Science/Federal%20Science%20DataHub%20(FSDH)/Project%20Planning%20%26%20Execution/Cyber%20Security/Gate%204/Evidence/Terms%26Conditions.docx?d=w1c8fdbc8e07d4cf6b1dc68fd3394e227&amp;csf=1&amp;web=1&amp;e=u7GGfp" target="_blank" rel="noopener noreferrer">conditions générales</a> et remplir toutes les obligations en matière de financement et de politique avant que l'accès ne lui soit accordé. Le responsable de l'espace de travail peut ensuite attribuer des rôles supplémentaires en invitant des utilisateurs à l'espace de travail. Les utilisateurs doivent accepter les <a href="https://163gc.sharepoint.com/:w:/r/sites/ScienceProgram/Shared%20Documents/Data%20Solutions%20for%20Science/Federal%20Science%20DataHub%20(FSDH)/Project%20Planning%20%26%20Execution/Cyber%20Security/Gate%204/Evidence/Terms%26Conditions.docx?d=w1c8fdbc8e07d4cf6b1dc68fd3394e227&amp;csf=1&amp;web=1&amp;e=u7GGfp" target="_blank" rel="noopener noreferrer">conditions générales</a> et satisfaire à toutes les politiques et exigences ministérielles associées à leur rôle (par exemple, l'habilitation de sécurité pour la fiabilité). En outre, les utilisateurs doivent disposer d'un compte de courrier électronique valide du gouvernement du Canada. Le responsable de l'espace de travail doit consulter les responsables de la sécurité des TI de son ministère pour s'assurer de la conformité aux exigences de gestion de l'accès établies par la Directive sur la gestion de la sécurité (<a href="https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32611" target="_blank" rel="noopener noreferrer">Directive sur la gestion de la sécurité - Canada.ca</a> - B.2.3.2).</p>
<p>5.2 Gestion du contrôle d'accès ou du changement de type de compte</p>
<p>Les départements et, en particulier, le responsable de l'espace de travail sont chargés de notifier tout changement de compte/rôle au sein de l'espace de travail. Si un responsable d'espace de travail n'est plus le responsable de l'espace de travail, il est chargé de désigner un nouveau responsable d'espace de travail.</p>
<p>Remarque : si le responsable de l'espace de travail abandonne l'espace de travail (quitte l'organisation), tous les rôles au sein de cet espace de travail peuvent soumettre une demande d'assistance à la DHSF pour demander l'affectation d'un nouveau responsable de l'espace de travail.</p>
<p>En outre, tous les rôles au sein de l'espace de travail sont chargés de notifier le responsable de l'espace de travail dans les cas suivants:</p>
<ul>
<li>L'accès n'est plus nécessaire ou requis.</li>
<li>L'accès est modifié ou n'est plus nécessaire en raison d'un transfert ou d'une résiliation.</li>
<li>Lorsque des privilèges d'accès sont associés à des types de comptes ou si de nouveaux types de comptes sont créés à la suite d'une modification ou d'une mise à jour du système ?</li>
<li>Lorsque l'utilisation d'un espace de travail individuel ou le besoin de savoir change.</li>
</ul>
<p>Le responsable de l'espace de travail est chargé d'examiner régulièrement les utilisateurs de son espace de travail. Dans le cas où l'accès à l'espace de travail n'est plus nécessaire pour l'utilisateur (cessation d'emploi, changement de projet, de service, etc). Le responsable de l'espace de travail doit:</p>
<ul>
<li>Désactiver l'accès à l'espace de travail de la DHSF dans les deux jours ouvrables.</li>
<li>Informer l'équipe DHSF de la résiliation afin que celle-ci puisse mettre fin à l'accès à l'ensemble du système.</li>
</ul>
</div></template>


