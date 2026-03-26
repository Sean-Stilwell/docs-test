<template><div><h1 id="commencer-avec-databricks-sur-le-datahub-scientifique-federal" tabindex="-1"><a class="header-anchor" href="#commencer-avec-databricks-sur-le-datahub-scientifique-federal"><span>Commencer avec Databricks sur le DataHub scientifique fédéral</span></a></h1>
<p>Databricks est une plateforme unifiée d'analyse de données qui combine la puissance d'Apache Spark avec un environnement collaboratif pour la science des données et l'apprentissage automatique. Elle fournit un environnement cloud entièrement géré, évolutif et sécurisé pour le traitement des données, l'analyse et les charges de travail d'apprentissage automatique.</p>
<p>Ce guide vous aidera à démarrer avec Databricks sur le DataHub scientifique fédéral. Il se concentre sur :</p>
<ul>
<li>Provisionnement et accès aux Databricks à partir du DataHub</li>
<li>Gestion des clusters Databricks</li>
<li>Créer et gérer des carnets de notes</li>
</ul>
<h2 id="approvisionnement-et-acces-aux-banques-de-donnees-a-partir-du-datahub" tabindex="-1"><a class="header-anchor" href="#approvisionnement-et-acces-aux-banques-de-donnees-a-partir-du-datahub"><span>Approvisionnement et accès aux banques de données à partir du DataHub</span></a></h2>
<p>Pour commencer à utiliser Databricks sur le DataHub scientifique fédéral, vous devez provisionner un espace de travail Databricks et y accéder depuis le portail DataHub.</p>
<h3 id="provisionnement-d-un-espace-de-travail-databricks" tabindex="-1"><a class="header-anchor" href="#provisionnement-d-un-espace-de-travail-databricks"><span>Provisionnement d'un espace de travail Databricks</span></a></h3>
<p><strong>Note:</strong> Seul un administrateur d'espace de travail DataHub ou un responsable d'espace de travail peut approvisionner un espace de travail Databricks.</p>
<p>Pour approvisionner un espace de travail Databricks :</p>
<ol>
<li>Accédez à votre espace de travail DataHub.</li>
<li>Cliquez sur l'onglet &quot;Boîte à outils&quot; sur le côté gauche.</li>
<li>Sous la carte Databricks, cliquez sur <code v-pre>Add to Workspace</code>.</li>
</ol>
<p>Après quelques minutes, l'espace de travail Databricks sera provisionné et ajouté à votre espace de travail DataHub.</p>
<p><img src="@source/fr/databricks/img/databricks-101-1.png" alt="Ajouter Databricks à l'espace de travail"></p>
<h3 id="acceder-a-databricks-a-partir-du-datahub" tabindex="-1"><a class="header-anchor" href="#acceder-a-databricks-a-partir-du-datahub"><span>Accéder à Databricks à partir du DataHub</span></a></h3>
<p>Une fois l'espace de travail Databricks provisionné, vous pouvez y accéder depuis le portail DataHub de deux manières :</p>
<ul>
<li>Cliquez sur <code v-pre>Databricks</code> dans la barre latérale gauche, ou</li>
<li>Depuis le tableau de bord, cliquez sur <code v-pre>Open Databricks</code> sous la carte Databricks.</li>
</ul>
<p><strong>Note:</strong> Il vous sera demandé de vous connecter à nouveau en utilisant vos identifiants M365 (les mêmes que ceux utilisés pour se connecter au portail DataHub).</p>
<p><a href="./img/databricks-101-2.png">Ouvrir Databricks</a></p>
<h2 id="gestion-des-clusters-databricks" tabindex="-1"><a class="header-anchor" href="#gestion-des-clusters-databricks"><span>Gestion des clusters Databricks</span></a></h2>
<p>Les clusters Databricks sont des groupes de machines virtuelles qui alimentent vos charges de travail de traitement des données et d'analyse. Vous pouvez créer, gérer et mettre fin à des clusters à partir de l'espace de travail Databricks.</p>
<p>Par défaut, nous créons le <code v-pre>main_cluster</code> que nous vous recommandons d'utiliser pour vos charges de travail. Il est déjà configuré pour accéder à votre compte de stockage. Parfois, vous pouvez avoir besoin de créer différents clusters pour d'autres charges de travail.</p>
<h3 id="creation-d-un-cluster-databricks" tabindex="-1"><a class="header-anchor" href="#creation-d-un-cluster-databricks"><span>Création d'un cluster Databricks</span></a></h3>
<p>Pour créer un nouveau cluster Databricks :</p>
<ol>
<li>Naviguez vers l'espace de travail Databricks.</li>
<li>Cliquez sur l'onglet <code v-pre>Compute</code> dans la barre latérale de gauche.</li>
<li>Cliquez sur <code v-pre>Create with Personal Compute</code> ou choisissez l'un des types de clusters préconfigurés dans la liste déroulante.</li>
<li>Configurez les paramètres du cluster, tels que le nom du cluster, le type d'instance et le nombre de nœuds de travail.</li>
<li>Cliquez sur <code v-pre>Create Cluster</code>.</li>
</ol>
<p>Le nouveau cluster sera créé et prêt à être utilisé.</p>
<p><strong>Note:</strong> Nous fournissons un guide détaillé sur les différents clusters. Vous pouvez vous référer au guide <RouteLink to="/fr/databricks/Cluster-Policies.html">Politiques de clusters</RouteLink> pour plus d'informations.</p>
<p><img src="@source/fr/databricks/img/databricks-101-3.png" alt="Créer un cluster Databricks"></p>
<h3 id="demarrage-et-arret-d-un-cluster-databricks" tabindex="-1"><a class="header-anchor" href="#demarrage-et-arret-d-un-cluster-databricks"><span>Démarrage et arrêt d'un cluster Databricks</span></a></h3>
<p>Pour démarrer ou arrêter un cluster Databricks :</p>
<ol>
<li>Naviguez vers l'espace de travail Databricks.</li>
<li>Cliquez sur l'onglet <code v-pre>Compute</code> dans la barre latérale de gauche.</li>
<li>Cliquez sur le cluster que vous souhaitez démarrer ou arrêter.</li>
<li>Cliquez sur <code v-pre>Start</code> ou <code v-pre>Terminate</code> pour gérer le cluster.</li>
</ol>
<h2 id="creer-et-gerer-des-carnets-de-notes" tabindex="-1"><a class="header-anchor" href="#creer-et-gerer-des-carnets-de-notes"><span>Créer et gérer des carnets de notes</span></a></h2>
<p>Les carnets de notes Databricks sont des documents interactifs qui contiennent du code, des visualisations et du texte narratif. Vous pouvez créer, modifier et exécuter des notebooks dans l'espace de travail Databricks.</p>
<p>Si vous connaissez les notebooks Jupyter, les notebooks Databricks sont similaires, mais avec des fonctionnalités et des intégrations supplémentaires.</p>
<h3 id="creation-d-un-carnet-de-notes-databricks" tabindex="-1"><a class="header-anchor" href="#creation-d-un-carnet-de-notes-databricks"><span>Création d'un carnet de notes Databricks</span></a></h3>
<p>Pour créer un nouveau carnet Databricks :</p>
<ol>
<li>Naviguez vers l'espace de travail Databricks.</li>
<li>Cliquez sur l'onglet &quot;Espace de travail&quot; dans la barre latérale de gauche.</li>
<li>Cliquez sur le dossier dans lequel vous souhaitez créer le carnet.</li>
<li>Cliquez sur &quot;Créer&quot; et sélectionnez &quot;Carnet de notes&quot;.</li>
</ol>
<p>En haut du carnet, vous pouvez sélectionner le type de code que vous souhaitez écrire. Vous avez le choix entre Python, Scala, SQL et R.</p>
<p>Vous pouvez maintenant commencer à écrire du code, à ajouter des visualisations et à documenter votre travail dans le carnet. Vous devriez donner à votre carnet un nom significatif pour vous aider à identifier son objectif.</p>
<h3 id="ecrire-du-code-dans-un-carnet-de-notes-databricks" tabindex="-1"><a class="header-anchor" href="#ecrire-du-code-dans-un-carnet-de-notes-databricks"><span>Écrire du code dans un carnet de notes Databricks</span></a></h3>
<p>Les notebooks Databricks prennent en charge plusieurs langages de programmation, notamment Python, Scala, SQL et R. Vous pouvez écrire du code dans différentes cellules et les exécuter de manière interactive.</p>
<p>Les carnets sont divisés en différentes cellules. Vous pouvez exécuter chaque cellule individuellement ou exécuter l'ensemble du carnet. Cela vous permet de tester et d'itérer sur votre code facilement.</p>
<p>Vous pouvez également inclure des cellules de texte avec Markdown. Cela vous permet de documenter votre code, d'expliquer votre processus de réflexion et d'ajouter des visualisations à votre carnet.</p>
<p><img src="@source/fr/databricks/img/databricks-101-4.png" alt="Un exemple de carnet de notes Databricks"></p>
<h3 id="acces-a-votre-compte-de-stockage-dans-databricks" tabindex="-1"><a class="header-anchor" href="#acces-a-votre-compte-de-stockage-dans-databricks"><span>Accès à votre compte de stockage dans Databricks</span></a></h3>
<p>Le cluster par défaut <code v-pre>main_cluster</code> est déjà configuré pour accéder à votre compte de stockage. Vous pouvez accéder à vos données stockées dans Azure Blob Storage, AWS S3, ou Google Cloud Storage directement depuis votre notebook Databricks.</p>
<p>Avec Python, utilisez le code suivant pour accéder à un fichier dans votre compte de stockage :</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line">df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token string">"true"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>csv<span class="token punctuation">(</span><span class="token string">'/mnt/fsdh-dbk-main-mount/sample.csv'</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Avec R, utilisez le code suivant pour accéder à un fichier dans votre compte de stockage :</p>
<div class="language-r line-numbers-mode" data-highlighter="prismjs" data-ext="r"><pre v-pre><code><span class="line">library<span class="token punctuation">(</span>SparkR<span class="token punctuation">)</span></span>
<span class="line">sparkR.session<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">df <span class="token operator">&lt;-</span> read.df<span class="token punctuation">(</span><span class="token string">"dbfs:/mnt/fsdh-dbk-main-mount/sample.csv"</span><span class="token punctuation">,</span> source <span class="token operator">=</span> <span class="token string">"csv"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Remplacez <code v-pre>sample.csv</code> par le chemin de votre fichier dans le compte de stockage.</p>
<h3 id="executer-un-notebook-databricks" tabindex="-1"><a class="header-anchor" href="#executer-un-notebook-databricks"><span>Exécuter un Notebook Databricks</span></a></h3>
<p>Pour exécuter un carnet Databricks :</p>
<ol>
<li>Écrivez votre code dans les cellules du carnet.</li>
<li>Cliquez sur le bouton &quot;Exécuter&quot; en haut du bloc-notes pour exécuter le code dans la cellule actuelle.</li>
<li>Vous pouvez également utiliser le raccourci clavier <code v-pre>Shift + Enter</code> pour exécuter la cellule en cours et passer à la suivante.</li>
</ol>
<p>Vous pouvez exécuter des cellules individuelles ou l'ensemble du cahier. L'exécution d'une cellule affiche la sortie sous la cellule.</p>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>Ce guide fournit une vue d'ensemble de la mise en route de Databricks sur le DataHub scientifique fédéral. Il couvre le provisionnement et l'accès à Databricks depuis le DataHub, la gestion des clusters Databricks, et la création et l'exécution de notebooks.</p>
<p>Databricks fournit un environnement puissant pour le traitement des données, l'analyse et l'apprentissage automatique. En exploitant Databricks sur le DataHub, vous pouvez collaborer avec votre équipe, analyser des données et construire des modèles d'apprentissage automatique dans un environnement sécurisé et évolutif basé sur le cloud.</p>
<p>Pour des sujets plus avancés et des guides approfondis, vous pouvez explorer notre section Learn ou vous référer à la documentation officielle de Databricks.</p>
</div></template>


