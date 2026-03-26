<template><div><h1 id="creer-et-utiliser-une-base-de-donnees-postgresql-sur-la-pfds" tabindex="-1"><a class="header-anchor" href="#creer-et-utiliser-une-base-de-donnees-postgresql-sur-la-pfds"><span>Créer et utiliser une base de données PostgreSQL sur la PFDS</span></a></h1>
<!---removed due to accessibility requirements
## Vidéo

<video width="600" height="350" controls>
    <source src="/api/media/postgres.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la vidéo.
</video>
-->
<p>Le DataHub scientifique fédéral permet de provisionner une base de données PostgreSQL pour votre espace de travail. Ce guide vous guidera à travers le processus de création d'une base de données PostgreSQL et son utilisation dans le code.</p>
<h2 id="comment-provisionner-une-base-de-donnees-postgresql" tabindex="-1"><a class="header-anchor" href="#comment-provisionner-une-base-de-donnees-postgresql"><span>Comment provisionner une base de données PostgreSQL</span></a></h2>
<ol>
<li>Naviguez vers l'espace de travail dans lequel vous souhaitez créer une base de données PostgreSQL.</li>
<li>Naviguez vers l'onglet &quot;Boîte à outils&quot; dans la catégorie &quot;Administration&quot;.
<img src="@source/fr/postgresql/img/database-1.png" alt=""></li>
<li>Dans quelques minutes, la base de données sera provisionnée et vous la verrez dans l'onglet <code v-pre>Toolbox</code>. Si la base de données n'est pas provisionnée, veuillez remplir une demande de support.</li>
</ol>
<h2 id="comment-utiliser-votre-base-de-donnees-postgresql" tabindex="-1"><a class="header-anchor" href="#comment-utiliser-votre-base-de-donnees-postgresql"><span>Comment utiliser votre base de données PostgreSQL</span></a></h2>
<ol>
<li>Naviguez vers l'espace de travail dans lequel vous souhaitez utiliser la base de données PostgreSQL.</li>
<li>Naviguez jusqu'à l'onglet &quot;Base de données SQL&quot; dans la catégorie &quot;Outils de l'espace de travail&quot;. Cette page vous fournit les informations nécessaires pour vous connecter à votre base de données.</li>
<li><strong>Avant d'essayer d'utiliser la base de données</strong>, vous devez ajouter votre adresse IP aux règles du pare-feu.
<ul>
<li>Naviguez jusqu'au bas de la page et cliquez sur &quot;Ajouter l'adresse IP actuelle&quot; pour ajouter votre adresse IP locale aux règles du pare-feu.</li>
<li>Si vous changez de réseau ou basculez votre RPV, vous devrez ajouter votre nouvelle adresse IP aux règles du pare-feu.</li>
<li>Pour permettre à Databricks d'accéder à la base de données, vous devrez ajouter l'adresse <code v-pre>0.0.0.0</code> aux règles du pare-feu.
<strong>NOTE:</strong> L'application des modifications peut prendre jusqu'à 15 minutes.
<img src="@source/fr/postgresql/img/database-2.png" alt=""></li>
</ul>
</li>
<li>Après avoir ajouté votre adresse IP aux règles du pare-feu, vous pouvez utiliser les informations de connexion fournies pour Databricks, Python, R, Java et C#.
<img src="@source/fr/postgresql/img/database-3.png" alt=""></li>
</ol>
</div></template>


