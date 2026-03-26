<template><div><h1 id="hebergement-d-applications-web-sur-la-pfds" tabindex="-1"><a class="header-anchor" href="#hebergement-d-applications-web-sur-la-pfds"><span>Hébergement d'applications Web sur la PFDS</span></a></h1>
<p>Le DataHub scientifique fédéral vous permet d'héberger des applications web sur la plateforme. Ce guide vous guidera à travers le processus de développement, de construction et de déploiement d'applications web sur le DataHub.</p>
<blockquote>
<p><strong>Note:</strong> Cette fonctionnalité est destinée à un usage interne et expérimental par les utilisateurs de votre espace de travail uniquement. Les applications web ne sont accessibles qu'aux utilisateurs de votre espace de travail DataHub et uniquement au sein du réseau GC.</p>
</blockquote>
<h2 id="conditions-prealables" tabindex="-1"><a class="header-anchor" href="#conditions-prealables"><span>Conditions préalables</span></a></h2>
<p><strong>Image de votre demande</strong></p>
<p>Avant de pouvoir héberger des applications web sur le DataHub, vous devrez créer une image de votre application à l'aide de Docker. Docker est une plateforme permettant de développer, d'expédier et d'exécuter des applications dans des conteneurs. Les conteneurs permettent à un développeur d'emballer une application avec toutes les parties dont elle a besoin, telles que les bibliothèques et autres dépendances, et de l'expédier en un seul paquet. Ces conteneurs sont utilisés par le DataHub pour héberger vos applications web.</p>
<p>Pour créer une image de votre application, nous recommandons d'utiliser les GitHub Actions pour construire et pousser l'image vers un registre de conteneurs. Pour commencer, créez un dossier appelé <code v-pre>.github</code> à l'intérieur de votre repo. Ensuite, ajoutez un dossier appelé <code v-pre>workflows</code> à l'intérieur du dossier <code v-pre>.github</code>. Vous pouvez maintenant créer un fichier <code v-pre>.yml</code> (par exemple, <code v-pre>build-image.yml</code>) à l'intérieur de ce dossier pour définir le flux de travail des GitHub Actions.</p>
<p>Un exemple de workflow GitHub Actions pour construire et pousser une image Docker vers un registre de conteneurs est [disponible ici] (https://github.com/Sean-Stilwell/sample-dashapp/blob/master/.github/workflows/build-dash-app.yml). Vous devrez mettre à jour le nom de l'image pour qu'il corresponde à celui que vous souhaitez.</p>
<p><strong>Note:</strong> N'envoyez pas d'informations sensibles, telles que votre jeton GitHub, à votre dépôt. Les actions GitHub peuvent récupérer de nombreux secrets automatiquement, comme le secret <code v-pre>GITHUB_TOKEN</code>. Vous pouvez également créer vos propres secrets dans les paramètres du dépôt et les utiliser dans vos flux de travail pour éviter d'exposer des informations sensibles.</p>
<p>Si vous n'êtes pas familier avec Docker ou GitHub Actions, vous pouvez contacter l'équipe de support de DataHub pour obtenir de l'aide dans la création d'une image Docker de votre application.</p>
<p><strong>App Service dans votre espace de travail</strong></p>
<p>Pour héberger des applications web sur le DataHub, vous devez disposer d'un App Service dans votre espace de travail. Vous pouvez provisionner un App Service dans la boîte à outils de votre espace de travail.</p>
<h2 id="deploiement-de-votre-application" tabindex="-1"><a class="header-anchor" href="#deploiement-de-votre-application"><span>Déploiement de votre application</span></a></h2>
<p><strong>Créer un dépôt Git et un fichier Docker Compose</strong></p>
<p>Pour héberger une application web sur le DataHub, vous devrez créer un dépôt Git pour votre application. Ce dépôt doit inclure le fichier <code v-pre>docker-compose.yml</code> utilisé pour déployer l'application sur le DataHub. Il peut optionnellement inclure le fichier Docker utilisé pour créer l'image de votre application.</p>
<blockquote>
<p><strong>Note:</strong> Votre repo peut être public ou privé, mais vous devrez fournir un jeton pour accéder au repo lors de la configuration dans une étape ultérieure.</p>
</blockquote>
<p><strong>Déployer l'application</strong></p>
<p>Pour déployer votre application sur le DataHub, vous devez configurer l'App Service dans votre espace de travail. Vous pouvez le faire en naviguant vers l'App Service dans votre espace de travail et en cliquant sur &quot;Configurer&quot;.</p>
<p><img src="@source/fr/apps/img/configure.png" alt="Accès au menu de configuration du service d'application"></p>
<p>Dans l'écran de configuration, vous devrez fournir les informations suivantes :</p>
<p>** URL du dépôt** : L'URL du dépôt Git pour votre application.
<strong>Confidentialité du référentiel</strong> : Si le référentiel est public ou privé.</p>
<ul>
<li><strong>Path</strong> : Le chemin vers le fichier <code v-pre>docker-compose.yml</code> dans votre référentiel.</li>
<li>(si privé) <strong>Token</strong> : Un jeton permettant d'accéder au référentiel.</li>
</ul>
<p><img src="@source/fr/apps/img/configure-2.png" alt="Menu de configuration d'un service applicatif"></p>
<p>Après avoir fourni ces informations, cliquez sur <code v-pre>Save</code> pour déployer votre application sur le DataHub.</p>
<p><strong>Accéder à votre demande</strong></p>
<p>Une fois que votre application est déployée sur le DataHub, vous pouvez démarrer le service pour accéder à votre application web. Vous pouvez le faire en naviguant vers l'App Service dans votre espace de travail et en cliquant sur <code v-pre>Start</code>.</p>
<p>Une fois le service démarré, vous pouvez accéder à votre application web en cliquant sur le lien <code v-pre>Proxy URL</code> dans l'App Service.</p>
<p><a href="./img/access.png">Accès à l'URL du proxy pour votre application web</a></p>
<blockquote>
<p><strong>Note:</strong> Après avoir démarré le service, l'application peut prendre quelques minutes pour être accessible via l'URL du proxy. Si vous rencontrez des problèmes, veuillez contacter l'équipe de support de DataHub pour obtenir de l'aide.</p>
</blockquote>
<h2 id="applications-de-demonstration" tabindex="-1"><a class="header-anchor" href="#applications-de-demonstration"><span>Applications de démonstration</span></a></h2>
<p>L'équipe DataHub a créé quelques applications de démonstration pour vous aider à démarrer l'hébergement d'applications web sur la plateforme. Ces dépôts comprennent le fichier Docker utilisé pour créer l'image et le fichier Docker Compose utilisé pour déployer l'application sur DataHub.</p>
<p>Ces applications sont disponibles sur GitHub :</p>
<ul>
<li><a href="https://github.com/ssc-sp/datahub-demos/tree/main/docker/django-app" target="_blank" rel="noopener noreferrer">Django (Python)</a></li>
<li><a href="https://github.com/Sean-Stilwell/sample-dashapp" target="_blank" rel="noopener noreferrer">Dash (Python)</a></li>
</ul>
<p>Ces applications sont conçues pour être facilement déployées sur le DataHub à l'aide de Docker Compose.</p>
<h2 id="obtenir-de-l-aide" tabindex="-1"><a class="header-anchor" href="#obtenir-de-l-aide"><span>Obtenir de l'aide</span></a></h2>
<p>Si vous n'êtes pas familier avec Docker Compose ou si vous avez besoin d'aide pour déployer votre application web sur le DataHub, veuillez contacter l'équipe d'assistance du DataHub pour obtenir de l'aide. Nous sommes là pour vous aider à démarrer l'hébergement d'applications web sur la plateforme.</p>
</div></template>


