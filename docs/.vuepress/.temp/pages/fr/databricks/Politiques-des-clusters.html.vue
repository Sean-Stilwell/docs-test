<template><div><h1 id="politiques-des-clusters-du-federal-science-datahub-databricks" tabindex="-1"><a class="header-anchor" href="#politiques-des-clusters-du-federal-science-datahub-databricks"><span>Politiques des clusters du Federal Science Datahub Databricks</span></a></h1>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/cluster-policies.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge la balise vidéo.
</video>
-->
<h2 id="apercu" tabindex="-1"><a class="header-anchor" href="#apercu"><span>Aperçu</span></a></h2>
<p>Dans le cadre du Federal Science Datahub, nous fournissons des politiques de cluster Databricks personnalisées qui sont conçues pour vous aider à tirer le meilleur parti de vos clusters Databricks grâce à des configurations de cluster prédéfinies. Nous proposons actuellement 3 politiques de cluster en plus de la politique de calcul personnel de Databrick. Il s'agit de &quot;Datahub Small Cluster&quot;, &quot;Datahub Regular Cluster&quot; et &quot;Datahub Large Cluster&quot;. Alors que les configurations des travailleurs et des pilotes sont prédéfinies, le choix du [databricks runtime] (https://docs.databricks.com/runtime/index.html) dépend entièrement de vous. Nous allons détailler chacune de ces politiques de cluster ci-dessous.</p>
<h3 id="informatique-personnelle" tabindex="-1"><a class="header-anchor" href="#informatique-personnelle"><span><strong>Informatique personnelle</strong></span></a></h3>
<p>Il s'agit de la politique de cluster par défaut fournie par Databricks. Elle est conçue pour un usage personnel et n'est pas recommandée pour une utilisation en production. C'est un bon choix si vous commencez à utiliser Databricks et que vous voulez vous familiariser avec son fonctionnement. C'est également un bon choix si vous travaillez avec de petits ensembles de données et que vous n'avez pas besoin d'une grande puissance de calcul. Notez que ce cluster est un cluster à nœud unique/travailleur unique et qu'en tant que tel, aucune parallélisation ne sera effectuée. Par défaut, il utilise le dernier runtime d'apprentissage automatique, ce qui signifie que les outils d'apprentissage automatique sont disponibles dans ce cluster. La configuration du cluster est la suivante :</p>
<ul>
<li><strong>Type de nœud:</strong> Standard_DS3_v2 (4 CPU, 14 GB de mémoire)</li>
</ul>
<p>[Plus d'informations ici sur les politiques de calcul personnel] (https://docs.databricks.com/clusters/personal-compute.html)</p>
<h3 id="datahub-small-cluster" tabindex="-1"><a class="header-anchor" href="#datahub-small-cluster"><span><strong>Datahub Small Cluster</strong></span></a></h3>
<p>Cette politique de cluster est conçue pour les petites charges de travail de production. C'est un bon choix si vous travaillez avec de petits ensembles de données et que vous n'avez pas besoin d'une petite quantité de puissance de calcul qui peut évoluer si nécessaire. C'est également un bon choix si vous débutez avec Databricks et que vous souhaitez vous familiariser avec un cluster non personnel. La configuration du cluster est la suivante :</p>
<ul>
<li><strong>Type de travailleur et de pilote:</strong> Standard_D4ds_v5 (4 CPU, 16 GB de mémoire)</li>
<li>Nombre de travailleurs:** 0 à 2 travailleurs</li>
<li><strong>Capable de faire des instances ponctuelles</strong></li>
<li><strong>Peut faire de l'autoscaling</strong></li>
</ul>
<h3 id="datahub-regular-cluster" tabindex="-1"><a class="header-anchor" href="#datahub-regular-cluster"><span><strong>Datahub Regular Cluster</strong></span></a></h3>
<p>Cette politique de cluster est conçue pour des charges de travail de production régulières. C'est un bon choix si vous avez rencontré des goulets d'étranglement avec la configuration en petits clusters. La configuration du cluster est la suivante :</p>
<ul>
<li><strong>Type de travailleur et de conducteur:</strong> Choix parmi les suivants
<ul>
<li>Standard_D4ds_v5 (4 CPU, 16 GB de mémoire)</li>
<li>Standard_D8ds_v5 (8 CPU, 32 GB de mémoire)</li>
<li>Standard_D16ds_v5 (16 CPU, 64 GB de mémoire)</li>
</ul>
</li>
<li>Nombre de travailleurs:** 0 à 4 travailleurs</li>
<li><strong>Capable de faire des instances ponctuelles</strong></li>
<li><strong>Pouvant être mis à l'échelle</strong></li>
</ul>
<h3 id="datahub-large-cluster" tabindex="-1"><a class="header-anchor" href="#datahub-large-cluster"><span><strong>Datahub Large Cluster</strong></span></a></h3>
<p>Cette politique de cluster est conçue pour les charges de travail de production importantes. C'est un bon choix si vous travaillez avec des données extrêmement volumineuses qui nécessitent une parallélisation maximale. Il n'est pas recommandé aux utilisateurs d'utiliser ce cluster s'ils ne sont pas conscients des coûts qu'il peut entraîner. La configuration du cluster est la suivante :</p>
<ul>
<li><strong>Type de travailleur et de conducteur:</strong> Choix parmi les suivants
<ul>
<li>Standard_D4ds_v5 (4 CPU, 16 GB de mémoire)</li>
<li>Standard_D8ds_v5 (8 CPU, 32 GB de mémoire)</li>
<li>Standard_D16ds_v5 (16 CPU, 64 GB de mémoire)</li>
<li>Standard_D32ds_v5 (32 CPU, 128 GB de mémoire)</li>
<li>Standard_D48ds_v5 (48 CPU, 192 GB de mémoire)</li>
<li>Standard_D64ds_v5 (64 CPU, 256 GB de mémoire)</li>
</ul>
</li>
<li>Nombre de travailleurs:** 0 à 4 travailleurs</li>
<li><strong>Capable de faire des instances ponctuelles</strong></li>
<li><strong>Pouvant être mis à l'échelle</strong></li>
</ul>
<h2 id="creation-d-un-cluster" tabindex="-1"><a class="header-anchor" href="#creation-d-un-cluster"><span>Création d'un cluster</span></a></h2>
<p>Pour plus d'informations sur la création de clusters, veuillez vous référer à la [documentation Databricks] (https://learn.microsoft.com/fr-ca/azure/databricks/clusters/configure).</p>
<h2 id="a-l-avenir" tabindex="-1"><a class="header-anchor" href="#a-l-avenir"><span>A l'avenir</span></a></h2>
<p>Nous étudions déjà la possibilité d'élaborer de nouvelles politiques en matière de clusters qui offriront non seulement des configurations spécifiques, mais aussi des outils spécifiques, tels que le support de Conda. Nous communiquerons avec les utilisateurs lors de la publication de ces nouvelles politiques de cluster.</p>
</div></template>


