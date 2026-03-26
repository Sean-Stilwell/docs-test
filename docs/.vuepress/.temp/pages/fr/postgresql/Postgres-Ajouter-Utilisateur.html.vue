<template><div><h1 id="ajouter-un-utilisateur-de-la-pfds-a-postgresql" tabindex="-1"><a class="header-anchor" href="#ajouter-un-utilisateur-de-la-pfds-a-postgresql"><span>Ajouter un utilisateur de la PFDS à PostgreSQL</span></a></h1>
<p>En tant que responsable d'un espace de travail, vous devez créer un compte utilisateur pour chaque utilisateur qui a besoin d'accéder à la base de données PostgreSQL sur le DataHub scientifique fédéral (DHSF). Ce guide vous guidera à travers les étapes pour ajouter un utilisateur à la base de données PostgreSQL sur le DHSF.</p>
<h2 id="option-a-utilisation-d-une-requete-sql" tabindex="-1"><a class="header-anchor" href="#option-a-utilisation-d-une-requete-sql"><span>Option A. Utilisation d'une requête SQL</span></a></h2>
<ol>
<li>
<p>Connectez-vous à la base de données PostgreSQL en utilisant un outil comme <code v-pre>psql</code>, Python, ou tout autre client SQL.</p>
</li>
<li>
<p>Exécutez la requête SQL suivante pour créer un nouvel utilisateur:</p>
</li>
</ol>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token operator">&lt;</span>username<span class="token operator">></span> <span class="token keyword">WITH</span> PASSWORD <span class="token string">'&lt;password>'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Remplacez <code v-pre>&lt;nom d'utilisateur&gt;</code> par le nom d'utilisateur souhaité et <code v-pre>&lt;mot de passe&gt;</code> par le mot de passe souhaité pour le nouvel utilisateur.</p>
<ol start="3">
<li>Accordez les autorisations nécessaires au nouvel utilisateur. Par exemple, pour accorder tous les privilèges sur une base de données spécifique, exécutez la requête SQL suivante:</li>
</ol>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token keyword">DATABASE</span> <span class="token operator">&lt;</span>nom_de_la_base_de_données<span class="token operator">></span> <span class="token keyword">TO</span> <span class="token operator">&lt;</span>username<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Remplacez <code v-pre>&lt;nom_de_la_base_de_données&gt;</code> par le nom de la base de données à laquelle vous souhaitez accorder l'accès.</p>
<ol start="4">
<li>Validez que l'utilisateur a été créé avec succès en vérifiant la liste des utilisateurs dans la base de données PostgreSQL.</li>
</ol>
<h2 id="option-b-utilisation-de-pgadmin" tabindex="-1"><a class="header-anchor" href="#option-b-utilisation-de-pgadmin"><span>Option B. Utilisation de pgAdmin</span></a></h2>
<ol>
<li>
<p>Ouvrez pgAdmin et connectez-vous à la base de données PostgreSQL.</p>
</li>
<li>
<p>Faites un clic droit sur le noeud <code v-pre>Login/Group Roles</code> et sélectionnez <code v-pre>Create</code> &gt; <code v-pre>Login/Group Role</code>.</p>
</li>
<li>
<p>Dans l'onglet <code v-pre>General</code>, entrez le nom d'utilisateur désiré dans le champ <code v-pre>Name</code>.</p>
</li>
</ol>
<p><img src="@source/fr/postgresql/img/database-create-user-1.png" alt="Ecran 1"></p>
<ol start="4">
<li>
<p>Dans l'onglet <code v-pre>Definition</code>, entrez le mot de passe souhaité dans le champ <code v-pre>Password</code>.</p>
</li>
<li>
<p>Dans l'onglet <code v-pre>Role Privileges</code>, accordez les privilèges nécessaires au nouvel utilisateur.</p>
</li>
<li>
<p>Cliquez sur <code v-pre>Save</code> pour créer le nouvel utilisateur.</p>
</li>
<li>
<p>Validez que l'utilisateur a été créé avec succès en vérifiant la liste des utilisateurs dans la base de données PostgreSQL.</p>
</li>
</ol>
</div></template>


