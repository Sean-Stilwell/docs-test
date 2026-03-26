<template><div><h1 id="postgresql-vs-azure-databricks-fonctionnalites-des-bases-de-donnees" tabindex="-1"><a class="header-anchor" href="#postgresql-vs-azure-databricks-fonctionnalites-des-bases-de-donnees"><span>PostgreSQL vs Azure Databricks - Fonctionnalités des bases de données</span></a></h1>
<p>Le DataHub scientifique fédéral offre plusieurs façons d'utiliser la fonctionnalité de base de données. Ce guide compare l'utilisation d'une base de données PostgreSQL sur le DHSF avec les fonctionnalités de base de données fournies par Azure Databricks.</p>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<p>Lorsqu'il s'agit d'héberger une base de données avec DHSF, plusieurs options sont disponibles. L'un des choix les plus populaires est l'utilisation de PostgreSQL, tandis qu'une autre option consiste à tirer parti des fonctionnalités de base de données fournies par Azure Databricks. Dans cette comparaison, nous allons explorer les principales différences et les avantages de chaque approche.</p>
<h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql"><span>PostgreSQL</span></a></h2>
<p>PostgreSQL est un service de base de données entièrement géré qui vous permet de déployer des bases de données PostgreSQL dans le nuage. Il offre une haute disponibilité, des sauvegardes automatiques et une intégration avec d'autres services. Voici quelques-unes des principales caractéristiques de PostgreSQL :</p>
<ul>
<li>Déploiement facile des bases de données PostgreSQL</li>
<li>Haute disponibilité intégrée et sauvegardes automatiques</li>
<li>Prise en charge des fonctionnalités avancées de PostgreSQL telles que JSONB, la recherche plein texte et les types de données spatiales</li>
<li>Intégration transparente avec d'autres services tels que les applications web ou les API</li>
</ul>
<h2 id="fonctionnalites-de-la-base-de-donnees-azure-databricks-hive" tabindex="-1"><a class="header-anchor" href="#fonctionnalites-de-la-base-de-donnees-azure-databricks-hive"><span>Fonctionnalités de la base de données Azure Databricks (Hive)</span></a></h2>
<p>Azure Databricks est une plateforme analytique qui associe Apache Spark à un environnement collaboratif pour la science des données et l'apprentissage automatique. Bien qu'il soit principalement connu pour ses capacités de traitement des big data, Azure Databricks offre également de puissantes fonctionnalités de base de données. Parmi les principales fonctionnalités de base de données offertes par Azure Databricks, citons :</p>
<ul>
<li>Delta Lake : Une couche de stockage transactionnel qui fournit des transactions ACID, l'application du schéma et le versionnage des données pour les lacs de données.</li>
<li>Moteur Delta : Un moteur de requête haute performance optimisé pour Delta Lake, permettant des requêtes SQL rapides et évolutives sur de grands ensembles de données.</li>
<li>Delta Live Tables : Une fonction de capture des données de changement en temps réel (CDC) qui vous permet de capturer et de traiter les changements de données en temps réel à partir de diverses sources.</li>
<li>Architecture de lac de données : Azure Databricks promeut une architecture unifiée qui combine le meilleur des lacs de données et des entrepôts de données, permettant un stockage, un traitement et une analyse efficaces des données.</li>
</ul>
<p>Databricks s'appuie sur le projet standard [Apache Hive] (https://hive.apache.org/) qui permet d'exploiter le stockage standard et d'interroger les données à l'aide de SQL. Le modèle sous-jacent est très différent d'une base de données traditionnelle.</p>
<ul>
<li>Databricks SQL nécessite que le cluster soit activé pour exécuter des requêtes SQL.</li>
<li>Les grands ensembles de données peuvent être facilement pris en charge en augmentant simplement la taille des grappes.</li>
<li>Il n'y a que des coûts de stockage pour les données qui ne sont pas utilisées</li>
<li>Les grands ensembles de données sont rentables car le stockage standard Azure est utilisé.</li>
</ul>
<h2 id="comparaison" tabindex="-1"><a class="header-anchor" href="#comparaison"><span>Comparaison</span></a></h2>
<p>Ce tableau présente les principales différences entre PostgreSQL et les fonctionnalités de la base de données Azure Databricks :</p>
<table>
<thead>
<tr>
<th>Fonctionnalité</th>
<th>PostgreSQL</th>
<th>Fonctionnalités de la base de données Azure Databricks (Hive Tables)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Modèle de base de données</td>
<td>Base de données relationnelle traditionnelle</td>
<td>Plate-forme d'analyse de données unifiée basée sur l'architecture Lakehouse</td>
</tr>
<tr>
<td>Cas d'utilisation principal</td>
<td>Base de données généraliste. Intégration d'applications Web / API. Requêtes SQL complexes.</td>
<td>Analyse des big data et traitement en temps réel. Apprentissage automatique. Exploration collaborative des données.</td>
</tr>
<tr>
<td>Schéma SQL traditionnel strict</td>
<td>Gestion flexible et auto-schema</td>
<td>Schéma SQL traditionnel strict</td>
</tr>
<tr>
<td>Performances - Bon pour les charges de travail OLTP.</td>
<td>Optimisé pour le traitement des données volumineuses (big data).</td>
<td></td>
</tr>
<tr>
<td>Mise à l'échelle limitée dans la configuration actuelle</td>
<td>Mise à l'échelle horizontale avec le moteur Delta.</td>
<td></td>
</tr>
<tr>
<td>Intégration</td>
<td>Intégration transparente avec les applications web et les API.</td>
<td>Intégration avec les flux de travail de traitement des big data et d'apprentissage automatique.</td>
</tr>
</tbody>
</table>
<h2 id="cas-d-utilisation-recommandes" tabindex="-1"><a class="header-anchor" href="#cas-d-utilisation-recommandes"><span>Cas d'utilisation recommandés</span></a></h2>
<h3 id="postgresql-1" tabindex="-1"><a class="header-anchor" href="#postgresql-1"><span>PostgreSQL</span></a></h3>
<ul>
<li>Application Web</li>
<li>Formulaire interactif</li>
<li>Intégration de l'API</li>
<li>Connexion à une application existante</li>
</ul>
<h3 id="databricks-sql-hive-tables" tabindex="-1"><a class="header-anchor" href="#databricks-sql-hive-tables"><span>Databricks SQL Hive Tables</span></a></h3>
<ul>
<li>Tableaux de bord Databricks</li>
<li>Données d'expériences scientifiques</li>
<li>Des données évolutives qui nécessitent des schémas flexibles</li>
<li>Données intermédiaires du pipeline ETL</li>
</ul>
<h2 id="difference-de-cout" tabindex="-1"><a class="header-anchor" href="#difference-de-cout"><span>Différence de coût</span></a></h2>
<h3 id="les-banques-de-donnees-a-la-demande" tabindex="-1"><a class="header-anchor" href="#les-banques-de-donnees-a-la-demande"><span>Les banques de données à la demande</span></a></h3>
<ul>
<li>Le coût de Databricks est <em>payé pour ce que vous utilisez</em>, c'est-à-dire qu'il dépend de la taille du cluster et de sa durée de fonctionnement.</li>
<li>En cas d'utilisation légère, il est possible de maintenir les bases de données à moins de 100 dollars par mois, y compris les tables Hive.</li>
<li>Il est recommandé d'effectuer quelques petites expériences et de contrôler les coûts afin d'estimer précisément le coût.</li>
</ul>
<h3 id="cout-de-postgresql" tabindex="-1"><a class="header-anchor" href="#cout-de-postgresql"><span>Coût de PostgreSQL</span></a></h3>
<ul>
<li>PostgreSQL dans DHSF utilise le modèle [Azure Flexible Server] (https://learn.microsoft.com/fr-ca/azure/postgresql/flexible-server/quickstart-create-server-portal) qui est également basé sur la consommation (modèle burstable).</li>
<li>En cas d'utilisation très légère, le coût est d'environ 30 dollars par mois.</li>
<li>Il est recommandé d'effectuer également des expériences et de contrôler le coût afin de déterminer plus précisément le coût d'une application spécifique.</li>
</ul>
<h2 id="connectivite" tabindex="-1"><a class="header-anchor" href="#connectivite"><span>Connectivité</span></a></h2>
<p>| Fonctionnalité | PostgreSQL | Fonctionnalités de la base de données Azure Databricks | Fonctionnalités de la base de données Azure Databricks
| ---------------------------- | ---------- | -------------------------------------- |
| Connexion à partir d'une application Web | X | Impossible |
| Connecter à partir de Power BI | X | X |
| Connecter à partir de Tableau | X | X |
| X | Possible mais nécessite que le cluster soit activé |</p>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>En conclusion, PostgreSQL et Azure Databricks Database Features offrent des atouts et des cas d'utilisation différents. PostgreSQL est bien adapté aux charges de travail des bases de données générales, à l'intégration des applications web et aux requêtes SQL complexes. En revanche, les fonctionnalités de base de données d'Azure Databricks sont optimisées pour l'analyse des big data, le traitement en temps réel et l'exploration collaborative des données. En fonction de votre cas d'utilisation spécifique et de vos exigences, vous pouvez choisir la solution de base de données qui répond le mieux à vos besoins.</p>
</div></template>


