<template><div><h1 id="comment-creer-un-tableau-de-bord-dans-databricks" tabindex="-1"><a class="header-anchor" href="#comment-creer-un-tableau-de-bord-dans-databricks"><span>Comment créer un tableau de bord dans Databricks</span></a></h1>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/dashboard.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge la balise vidéo.
</video>
-->
<h2 id="conditions-prealables" tabindex="-1"><a class="header-anchor" href="#conditions-prealables"><span>Conditions préalables</span></a></h2>
<ul>
<li>Connaissance de base du langage de requête structuré (SQL)</li>
<li>Vos données sont stockées sous forme de table(s) dans Databricks</li>
</ul>
<h2 id="pourquoi-creer-des-tableaux-de-bord" tabindex="-1"><a class="header-anchor" href="#pourquoi-creer-des-tableaux-de-bord"><span>Pourquoi créer des tableaux de bord ?</span></a></h2>
<ul>
<li>Ils constituent un excellent moyen de visualiser vos données d'une manière facile à comprendre.</li>
<li>Ils vous permettent de partager facilement vos données avec d'autres personnes (au sein de votre espace de travail).</li>
<li>Ils peuvent être exportés sous forme de fichiers PDF pour être facilement partagés avec n'importe qui.</li>
<li>Ils sont dynamiques et peuvent être utilisés pour contrôler vos données en temps réel.</li>
<li>Ils peuvent être utilisés pour créer une interface utilisateur interactive pour vos données.</li>
</ul>
<h2 id="exemple-de-tableau-de-bord" tabindex="-1"><a class="header-anchor" href="#exemple-de-tableau-de-bord"><span>Exemple de tableau de bord</span></a></h2>
<p>Voici un exemple de tableau de bord créé à l'aide de l'outil de tableau de bord intégré de Databricks pour l'analyse du [National Oceanic and Atmospheric Administration's International Comprehensive Ocean-Atmosphere DataSet] (https://icoads.noaa.gov/).</p>
<p><img src="@source/fr/databricks/img/Dashboard1.png" alt="Aperçu 1">
<img src="@source/fr/databricks/img/Dashboard2.png" alt="Aperçu 2">
<img src="@source/fr/databricks/img/Dashboard3.png" alt="Aperçu 3"></p>
<p>Cet exemple de tableau de bord peut également être visualisé sous forme de [PDF exporté] (https://github.com/ssc-sp/datahub-docs/blob/main/UserGuide/Databricks/SampleDashboard.pdf).</p>
<p>Dans le cadre de ce tutoriel, nous allons suivre le processus de création d'un bloc de ce tableau de bord. Tous les blocs suivent un processus similaire.</p>
<h2 id="_1-preparer-vos-donnees" tabindex="-1"><a class="header-anchor" href="#_1-preparer-vos-donnees"><span>1. Préparer vos données</span></a></h2>
<p>Avant de pouvoir créer un tableau de bord, vos données doivent être stockées sous forme de tableau dans Databricks. Si vous ne l'avez pas encore fait, vous pouvez suivre les étapes de la [documentation Databricks] (https://docs.databricks.com/data/tables.html#create-a-table) pour créer une table à partir de vos données.</p>
<p>Vos données devraient être visibles dans l'onglet &quot;Données&quot; de votre espace de travail :
<img src="@source/fr/databricks/img/DashboardTables.png" alt="Onglet Données"></p>
<h2 id="_2-creation-d-un-tableau-de-bord" tabindex="-1"><a class="header-anchor" href="#_2-creation-d-un-tableau-de-bord"><span>2. Création d'un tableau de bord</span></a></h2>
<p>Après avoir défini votre environnement sur &quot;SQL&quot; dans le coin supérieur gauche de votre espace de travail, cliquez sur l'onglet &quot;Tableau de bord&quot;. Cliquez ensuite sur le bouton &quot;Créer un tableau de bord&quot; pour créer un nouveau tableau de bord :</p>
<p><img src="@source/fr/databricks/img/DashboardCreate.png" alt="Créer un tableau de bord"></p>
<p>Sélectionnez un nom approprié pour votre tableau de bord et cliquez sur &quot;Enregistrer&quot;. Les tableaux de bord dans Databricks sont constitués de &quot;blocs&quot;. Chaque bloc est soit une visualisation, soit une zone de texte, soit un filtre. Vous pouvez ajouter un nouveau bloc en cliquant sur le bouton &quot;Ajouter&quot; dans le coin supérieur droit de votre tableau de bord.</p>
<ul>
<li>Les visualisations sont utilisées pour afficher vos données dans un format visuel. Vous pouvez choisir parmi une variété de visualisations différentes telles que les diagrammes à barres, les diagrammes linéaires, les diagrammes circulaires, etc.</li>
<li>Les zones de texte sont utilisées pour afficher du texte. Vous pouvez les utiliser pour ajouter des titres, des sous-titres, des descriptions, etc. Ces blocs de texte peuvent être formatés à l'aide de Markdown et permettent d'intégrer des images.</li>
<li>Les filtres sont utilisés pour filtrer vos données. Vous pouvez les utiliser pour filtrer vos données sur la base d'une colonne spécifique ou d'une valeur spécifique.</li>
</ul>
<p>Au cœur de chaque bloc se trouve une requête SQL. Cette requête est utilisée pour récupérer les données qui seront affichées dans le bloc. En fait, chaque bloc est une représentation dynamique de vos données qui est mise à jour en temps réel au fur et à mesure que vos données changent.</p>
<h2 id="_3-creation-d-une-requete-sql" tabindex="-1"><a class="header-anchor" href="#_3-creation-d-une-requete-sql"><span>3. Création d'une requête SQL</span></a></h2>
<p>Dans la barre de navigation, cliquez sur l'onglet &quot;Requêtes&quot;, puis sur le bouton &quot;Créer&quot; pour créer une nouvelle requête :</p>
<p><img src="@source/fr/databricks/img/DashboardCreateQuery.png" alt="Créer une requête"></p>
<p>L'éditeur SQL s'ouvre alors. Vous pouvez y écrire votre requête SQL. Pour ce tutoriel, nous allons créer un diagramme à barres qui affiche le nombre d'observations pour chaque année. La requête est la suivante :</p>
<p>``sql
SELECT YEAR(date) AS year, COUNT(sea_surface_temp) AS measurement_count
FROM noaa_icoads
WHERE YEAR(date) &gt; YEAR(DATE(&quot;1849-01-01&quot;))
GROUPEMENT PAR ANNÉE
ORDER BY year</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"></span>
<span class="line">Notez que nous utilisons la table `noaa_icoads` que nous avons créée plus tôt. Nous utilisons également la fonction `YEAR()` pour extraire l'année de la colonne `date`. En effet, la colonne `date` contient la date au format `YYY-MM-DD`. Nous utilisons également la fonction `DATE()` pour créer un objet date à partir de la chaîne `"1849-01-01"`. En effet, la fonction `YEAR()` ne fonctionne qu'avec des objets de type date. Nous utilisons la clause `GROUP BY` pour regrouper les données par année et la clause `ORDER BY` pour ordonner les données par année. Nous utilisons les données à partir de 1849 car les données antérieures ne sont pas nécessairement fiables. Cette requête renvoie le tableau suivant :</span>
<span class="line"></span>
<span class="line">| année | nombre_de_mesures |</span>
<span class="line">| ---- | ----------------- |</span>
<span class="line">| 1850 | 27736 |</span>
<span class="line">| 1851 | 22490 |</span>
<span class="line">| 1852 | 25061 |</span>
<span class="line">| 1853 | 39143 |</span>
<span class="line">| ...  | ...               |</span>
<span class="line"></span>
<span class="line">Maintenant que nous avons notre requête, enregistrons-la en cliquant sur le bouton "Enregistrer". Une boîte de dialogue s'ouvre alors, dans laquelle vous pouvez saisir un nom pour votre requête. Saisissez un nom approprié et cliquez sur "Enregistrer".</span>
<span class="line"></span>
<span class="line">## 4. Création d'une visualisation</span>
<span class="line"></span>
<span class="line">Retournez au tableau de bord que vous avez créé précédemment, cliquez sur les 3 points en haut à droite et cliquez sur "Modifier". L'éditeur de tableau de bord s'ouvre alors. Cliquez sur le bouton "Ajouter" et sélectionnez "Visualisation". Vous êtes invité à sélectionner une requête sauvegardée : sélectionnez la requête que vous avez créée précédemment et cliquez sur "Sélectionner". L'éditeur de visualisation s'ouvre alors. Vous pouvez y sélectionner le type de visualisation que vous souhaitez créer. Pour ce tutoriel, nous allons créer un diagramme à barres. Sélectionnez "Diagramme à barres" et cliquez sur "Sélectionner". L'éditeur de diagramme à barres s'ouvre. Vous pouvez y sélectionner les colonnes que vous souhaitez utiliser pour l'axe des x et l'axe des y. Pour ce tutoriel, nous utiliserons la colonne `year` pour l'axe x et la colonne `measurement_count` pour l'axe y. Sélectionnez les colonnes appropriées et cliquez sur "Appliquer". Cela créera un diagramme à barres. Vous pouvez cliquer sur le bouton "Preview" pour voir un aperçu de votre visualisation. Vous pouvez également cliquer sur le bouton "Editer" pour modifier votre visualisation. Lorsque vous êtes satisfait de votre visualisation, cliquez sur "Enregistrer". Votre visualisation sera enregistrée et ajoutée à votre tableau de bord.</span>
<span class="line"></span>
<span class="line">Il existe des tonnes d'options de visualisation différentes dans Databricks. Vous devriez les explorer pour trouver celles qui vous conviennent le mieux. L'éditeur de visualisation offre également des tonnes d'options de personnalisation telles que la modification de la couleur des barres, la modification du titre, etc. Vous pouvez également ajouter des visualisations provenant de différents tableaux à un seul tableau de bord, ce qui vous permet de comparer des données provenant de différents tableaux.</span>
<span class="line"></span>
<span class="line">## 5. Finalisation du tableau de bord</span>
<span class="line"></span>
<span class="line">Vous pouvez ajouter autant de blocs que vous le souhaitez et vous pouvez les arranger et les redimensionner comme bon vous semble. Vous pouvez également ajouter des zones de texte et des filtres à votre tableau de bord, ainsi que des thèmes de couleurs. Lorsque vous êtes satisfait de votre tableau de bord, cliquez sur le bouton "Terminer l'édition".</span>
<span class="line"></span>
<span class="line">En cliquant sur les 3 points en haut à droite, vous pouvez également exporter votre tableau de bord au format PDF, le partager avec d'autres personnes ou le supprimer.</span>
<span class="line"></span>
<span class="line">Voici un autre exemple amusant de tableau de bord créé à l'aide de l'outil de tableau de bord intégré de Databricks :</span>
<span class="line"></span>
<span class="line">![ChatGPT](./img/DashboardGPT.png)</span>
<span class="line"></span>
<span class="line">Il s'agit d'un nuage de mots visualisant les mots les plus utilisés dans les tweets contenant le mot "ChatGPT" sur twitter un jour donné. Les données proviennent de [Kaggle datasets](https://www.kaggle.com/datasets/edomingo/chatgpt-1000-daily-tweets).</span>
<span class="line"></span>
<span class="line">## [Plus d'informations sur les tableaux de bord Databricks](https://learn.microsoft.com/fr-ca/azure/databricks/lakehouse/data-objects)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


