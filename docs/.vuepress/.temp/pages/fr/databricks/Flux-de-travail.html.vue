<template><div><h1 id="databricks-workflows" tabindex="-1"><a class="header-anchor" href="#databricks-workflows"><span>Databricks Workflows</span></a></h1>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/workflows.mp4" type="video/mp4" />
    <track label="English" kind="subtitles" srclang="en" src="/api/media/workflows.vtt" default/>
    Votre navigateur ne prend pas en charge la balise vidéo.
</video>
-->
<p>Les workflows dans Databricks sont un moyen d'orchestrer les notebooks dans votre environnement. Ils vous fournissent une interface de haut niveau qui vous permet de concevoir des charges de travail de bout en bout, telles que l'apprentissage automatique.</p>
<p>Dans les Databricks Workflows, vous créez des <em>jobs</em>. Les <em>jobs</em> sont une liste de <em>tâches</em> dont vous personnalisez l'ordre et la linéarité. Voici un exemple de <em>job</em> contenant 4 <em>tasks</em>, dont deux sont exécutées en parallèle :</p>
<p><img src="@source/fr/databricks/img/Workflow-ExWorkflow.png" alt="Alt text"></p>
<p>Les tâches sont les éléments constitutifs des emplois. Elles peuvent être de l'un des types suivants :</p>
<ul>
<li><strong>Notebook</strong> : Une tâche de bloc-notes exécute un bloc-notes dans votre espace de travail. Vous pouvez passer des paramètres à la tâche notebook, et le notebook peut renvoyer un résultat qui peut être utilisé par d'autres tâches.</li>
<li>Script Python** : cette tâche permet d'exécuter un script Python dans votre espace de travail en utilisant les paramètres de votre choix.</li>
<li><strong>Roue Python</strong> : cette tâche vous permettra d'installer des paquets Python sur un cluster sélectionné, au cas où les méthodes d'installation normales ne seraient pas optimales.</li>
<li><strong>Spark SQL</strong> : Une tâche Spark SQL exécute une requête SQL sur un cluster Spark. Vous pouvez passer des paramètres à la requête SQL, et la requête peut renvoyer un résultat qui peut être utilisé par d'autres tâches.</li>
<li><strong>Tableaux vivants delta</strong> : Cette tâche vous permettra d'exécuter un pipeline de tables dynamiques delta. Les tables dynamiques delta sont un pipeline de flux de données spécial, sur lequel vous pouvez en savoir plus [ici] (https://www.databricks.com/product/delta-live-tables).</li>
<li><strong>DBT</strong> : DBT (Data Build Tool) est un outil en ligne de commande open-source qui vous permet de construire, tester et déployer des pipelines de données. Il est souvent utilisé en conjonction avec Databricks pour construire des pipelines de données qui transforment et chargent des données dans un entrepôt de données. DBT vous permet de définir des transformations de données en SQL et vous offre un moyen de tester et de documenter vos pipelines de données. Vous pouvez utiliser DBT pour construire des pipelines de données qui s'exécutent sur Databricks, et vous pouvez également utiliser DBT pour déployer vos pipelines de données dans d'autres environnements.</li>
<li><strong>Fichiers JAR</strong> : Cette tâche vous permet d'exécuter un fichier d'archive Java sur un cluster Spark.</li>
<li><strong>Spark Submit</strong> : Vous pouvez soumettre n'importe quel fichier Java, Scala, Python ou R en tant que tâche <code v-pre>spark-submit</code>, qui exécutera ces fichiers sur un cluster Spark.</li>
</ul>
<h2 id="creer-un-emploi" tabindex="-1"><a class="header-anchor" href="#creer-un-emploi"><span><strong>Créer un emploi</strong></span></a></h2>
<p>Pour créer un travail, assurez-vous d'être en mode &quot;Data Science &amp; Engineering&quot;, puis cliquez sur l'icône &quot;Workflows&quot; dans l'onglet de navigation à gauche, et enfin sur &quot;Create Job&quot; :</p>
<p><img src="@source/fr/databricks/img/Workflow-TabWorkflow.png" alt="Alt text"></p>
<p><img src="@source/fr/databricks/img/Workflow-CreateWorkflow.png" alt="Alt text"></p>
<p>Vous accéderez à la page de création d'emploi, où vous configurerez votre première tâche :</p>
<p><img src="@source/fr/databricks/img/Workflow-TaskWorkflow.png" alt="Alt text">
Vous pouvez définir le nom, le type et la grappe de la tâche. Il s'agit d'une fonctionnalité intéressante qui vous permet d'optimiser l'utilisation de votre cluster. Une fois que vous avez créé votre première tâche, vous avez la possibilité d'en créer de nouvelles :</p>
<p><img src="@source/fr/databricks/img/Workflow-NewTaskWorkflow.png" alt="Alt text"></p>
<p>Une fois que vous avez créé une deuxième tâche, vous avez la possibilité de définir de quelles autres tâches elle dépend :</p>
<p><img src="@source/fr/databricks/img/Workflow-DependencyWorkflow.png" alt="Alt text">
Les tâches ne s'exécutent que lorsque toutes les tâches dont elles dépendent ont fini de s'exécuter. Plusieurs tâches peuvent dépendre d'une seule tâche, ce qui crée des flux de travail parallèles, et une seule tâche peut dépendre de plusieurs tâches.</p>
<p>Une fois que vous avez terminé la conception de votre travail, vous pouvez le tester en cliquant sur &quot;Exécuter maintenant&quot; et en cliquant sur &quot;Exécutions&quot; en haut à gauche :</p>
<p><img src="@source/fr/databricks/img/Workflow-RunWorkflow.png" alt="Alt text"></p>
<p>Cela déclenchera votre travail et, à partir de l'écran &quot;runs&quot;, vous pourrez contrôler chaque exécution de votre travail ainsi que chaque tâche de vos exécutions.</p>
<h2 id="surveiller-un-travail" tabindex="-1"><a class="header-anchor" href="#surveiller-un-travail"><span><strong>Surveiller un travail</strong></span></a></h2>
<p>À partir du menu &quot;Exécutions&quot;, vous pouvez facilement contrôler chaque exécution et chaque tâche de vos travaux :</p>
<p><img src="@source/fr/databricks/img/Workflow-MonitorWorkflow.png" alt="Alt text"></p>
<p>Les diagrammes à barres correspondent à chaque exécution et leur taille correspond au temps nécessaire. Sous chaque barre se trouve une liste de carrés correspondant aux tâches individuelles de vos travaux. Pour chaque élément, les couleurs indiquent l'état : vert pour terminé, rouge pour échec et gris pour annulé.</p>
<p>Dans le tableau du bas, vous pouvez voir et inspecter toutes les exécutions précédentes et en cours.</p>
<h2 id="configuration-des-emplois-et-planification" tabindex="-1"><a class="header-anchor" href="#configuration-des-emplois-et-planification"><span><strong>Configuration des emplois et planification</strong></span></a></h2>
<p>Lorsqu'un travail est ouvert, à partir de l'onglet &quot;runs&quot; ou de l'onglet &quot;tasks&quot;, vous pouvez ouvrir le panneau latéral droit, qui met à votre disposition de nombreuses configurations :</p>
<p><img src="@source/fr/databricks/img/Workflow-ConfigWorkflow.png" alt="Alt text"></p>
<p>À partir de ce panneau, vous pouvez</p>
<ul>
<li>Voir les détails du travail**, tels que l'ID du travail, le créateur du travail, l'utilisateur sous lequel il est exécuté et les balises du travail.</li>
<li>Configurer Git** : cela vous permet de créer des tâches à l'aide de scripts et de carnets de notes à partir de dépôts distants.</li>
<li><strong>Travaux planifiés</strong> : vous pouvez sélectionner des déclencheurs manuels (le travail ne sera exécuté que lorsqu'il sera déclenché à partir de l'interface utilisateur), des déclencheurs planifiés (le travail sera exécuté lorsqu'il sera déclenché à partir de l'interface utilisateur et selon le calendrier fourni) ou des déclencheurs continus (le travail sera déclenché chaque fois que le travail précédent a rencontré une erreur ou a réussi).</li>
<li><strong>Voir les détails de calcul</strong> : vous pouvez voir tous les clusters impliqués dans le travail.
Vous pouvez également les consulter, voir leurs détails, échanger le cluster utilisé, etc.</li>
<li>Notifications** : définir des notifications (par courrier électronique ou par d'autres fournisseurs) lorsqu'un travail rencontre un problème, réussit ou démarre.</li>
<li><strong>Permissions</strong> : permet de sélectionner les personnes qui peuvent visualiser, exécuter et gérer vos travaux.</li>
<li><strong>Maximum d'exécutions simultanées</strong> : ce paramètre vous permet de définir le nombre maximum d'exécutions qui peuvent être effectuées en même temps. Par défaut, il est fixé à 1.</li>
</ul>
<p>Grâce à ces configurations, vous pouvez personnaliser vos travaux comme vous le souhaitez et selon vos besoins.</p>
<h2 id="planification-d-un-seul-cahier" tabindex="-1"><a class="header-anchor" href="#planification-d-un-seul-cahier"><span><strong>Planification d'un seul cahier</strong></span></a></h2>
<p>Dans le cadre de Databricks Workflows, vous pouvez également planifier facilement un carnet de notes. Pour ce faire, naviguez jusqu'au carnet de notes de votre choix et cliquez sur &quot;Schedule&quot; :</p>
<p><img src="@source/fr/databricks/img/Workflow-ScheduleWorkflow.png" alt="Alt text"></p>
<p>Un menu apparaît qui vous permet de planifier l'exécution de ce carnet en tant que tâche unique :</p>
<p><img src="@source/fr/databricks/img/Workflow-NotebookWorkflow.png" alt="Alt text">
À partir de là, vous pouvez facilement configurer un calendrier ainsi que des alertes pour l'exécution de vos carnets. Une fois votre tâche créée, vous pouvez y accéder à partir du menu Workflows comme n'importe quelle autre tâche :</p>
<p><img src="@source/fr/databricks/img/Workflow-NbJobWorkflow.png" alt="Alt text"></p>
<h2 id="en-savoir-plus-sur-databricks-workflows" tabindex="-1"><a class="header-anchor" href="#en-savoir-plus-sur-databricks-workflows"><span><strong><a href="https://docs.databricks.com/workflows/index.html" target="_blank" rel="noopener noreferrer">En savoir plus sur Databricks Workflows</a></strong></span></a></h2>
</div></template>


