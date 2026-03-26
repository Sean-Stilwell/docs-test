<template><div><h1 id="migration-ou-retrait-des-applications-web" tabindex="-1"><a class="header-anchor" href="#migration-ou-retrait-des-applications-web"><span>Migration ou retrait des applications web</span></a></h1>
<p>Ce document fournit des instructions sur:</p>
<ul>
<li>la migration des applications web de l'environnement de validation de concept (POC) vers votre nouvel espace de travail DHSF dans l'environnement de production (PROD)</li>
<li>le retrait des applications web de l'environnement POC si vous ne transférez pas vos recherches vers l'environnement PROD</li>
</ul>
<h2 id="a-migrer-les-applications-web-de-l-environnement-poc-vers-l-environnement-prod" tabindex="-1"><a class="header-anchor" href="#a-migrer-les-applications-web-de-l-environnement-poc-vers-l-environnement-prod"><span>A. Migrer les applications web de l'environnement POC vers l'environnement PROD</span></a></h2>
<p>Pour migrer vos applications web, il faut avoir un espace de travail dans l'environnement PROD. L'équipe de support du DataHub scientifique fédéral fournira de l'information lorsqu'il sera prêt et fournira de l'aide quand nécessaire.</p>
<p>Pour migrer vos applications web de l'environnement POC vers l'environnement PROD, vous pouvez simplement redéployer votre application web dans PROD en utilisant votre fichier <code v-pre>docker-compose.yml</code> existant stocké dans votre repo Git. Veuillez arrêter votre application web dans l'environnement POC une fois que vous l'avez déployée avec succès dans l'environnement PROD.</p>
<p><strong>NOTE:</strong> Il faut mettre à jour vos images ou le fichier <code v-pre>docker-compose.yml</code>, particulièrement si vous utilisez des configurations spécifiques à l'environnement POC, telles que les chaînes de connexion PostgreSQL ou les chaînes de connexion Databricks.</p>
<h2 id="b-retirer-les-applications-web-du-poc" tabindex="-1"><a class="header-anchor" href="#b-retirer-les-applications-web-du-poc"><span>B. Retirer les applications web du POC</span></a></h2>
<p>Pour retirer vos applications web de l'environnement POC, vous pouvez simplement arrêter votre application web en utilisant le portail DHSF. L'application peut ensuite être redéployée sur une plateforme ou un environnement différent en utilisant vos images.</p>
<h2 id="c-support" tabindex="-1"><a class="header-anchor" href="#c-support"><span>C. Support</span></a></h2>
<p>Si vous rencontrez des problèmes au cours du processus de migration, veuillez contacter l'équipe de support du DataHub scientifique fédéral en soumettant une demande de support. Notre équipe se fera un plaisir de vous aider à migrer votre application web ou à l'exporter.</p>
</div></template>


