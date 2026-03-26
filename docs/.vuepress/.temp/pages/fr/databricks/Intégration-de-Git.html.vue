<template><div><h1 id="integration-de-git-github-avec-databricks" tabindex="-1"><a class="header-anchor" href="#integration-de-git-github-avec-databricks"><span>Intégration de Git/GitHub avec Databricks</span></a></h1>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/git-integration.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge la balise vidéo.
</video>
-->
<h2 id="pre-requis" tabindex="-1"><a class="header-anchor" href="#pre-requis"><span>Pré-requis</span></a></h2>
<ul>
<li>Familiarité avec le contrôle de version Git.</li>
<li>Avoir accès à un dépôt Git - la création et l'accès à un dépôt n'entrent pas dans le cadre de ce guide.</li>
</ul>
<h2 id="pourquoi-utiliser-git-github" tabindex="-1"><a class="header-anchor" href="#pourquoi-utiliser-git-github"><span>Pourquoi utiliser Git/GitHub ?</span></a></h2>
<ul>
<li>Meilleur contrôle de version que le gestionnaire de changement intégré.</li>
<li>Gérer le code et les carnets en dehors de Databricks.</li>
<li>Collaboration entre plusieurs espaces de travail.</li>
</ul>
<h2 id="workbook-vs-repository" tabindex="-1"><a class="header-anchor" href="#workbook-vs-repository"><span>Workbook vs Repository</span></a></h2>
<ul>
<li>Une fois que vous avez connecté Git à Databricks, vous pouvez créer et utiliser des carnets de notes comme d'habitude et également les pousser vers GitHub.</li>
<li>Les fichiers Workbook dans Git ont une syntaxe légèrement différente de celle des carnets Jupyter standard.</li>
</ul>
<h2 id="partie-1-configurer-git-github-avec-databricks" tabindex="-1"><a class="header-anchor" href="#partie-1-configurer-git-github-avec-databricks"><span>Partie 1 : Configurer Git/GitHub avec Databricks</span></a></h2>
<p>Accédez à vos paramètres d'utilisateur dans le menu déroulant en haut à droite. Sélectionnez l'onglet Intégration Git.</p>
<p><img src="@source/fr/databricks/img/git-settings.png" alt="image"></p>
<ul>
<li>Sélectionnez votre fournisseur Git</li>
<li>Configurer le nom d'utilisateur</li>
<li>Générer un Token pour donner à Databricks l'accès à votre référentiel</li>
</ul>
<p>Pour GitHub, les jetons d'accès peuvent être créés dans Settings / Personal Access Token / Tokens (classic). Sur cette page, cliquez sur &quot;Generate new token&quot; puis sur &quot;Generate new token (classic)&quot;.
<img src="@source/fr/databricks/img/git-linked-accounts.png" alt="image"></p>
<p>Pour des raisons de sécurité, nous recommandons de configurer une date d'expiration inférieure à un an. Les jetons peuvent être facilement régénérés après expiration en suivant les étapes suivantes.</p>
<p>Les scopes requis sont <code v-pre>repo</code> et <code v-pre>workflow</code> (optionnel pour les workflows GitHub Actions).
<img src="@source/fr/databricks/img/git-TokenScopes.png" alt="image"></p>
<p>Si le jeton et les autorisations d'accès sont correctement configurés, vous devriez voir une marque verte dans la page des paramètres.</p>
<p><img src="@source/fr/databricks/img/git-tokens.png" alt="image"></p>
<h2 id="partie-2-acceder-et-modifier-les-referentiels" tabindex="-1"><a class="header-anchor" href="#partie-2-acceder-et-modifier-les-referentiels"><span>Partie 2 : Accéder et modifier les référentiels</span></a></h2>
<p>Pour cloner un dépôt, vous aurez besoin de son lien d'accès HTTPS et de sa branche.</p>
<p><img src="@source/fr/databricks/img/git-clone-repo.png" alt="image"></p>
<p>Une fois la configuration effectuée, vous pouvez voir les fichiers contenus dans le référentiel
<img src="@source/fr/databricks/img/git-menu.png" alt="image"></p>
<p>Les changements effectués à partir de Databricks peuvent être poussés vers le dépôt en utilisant le menu Git intégré. Pour y accéder, cliquez avec le bouton droit de la souris sur les fichiers de votre dépôt et cliquez sur &quot;Git...&quot;.
<img src="@source/fr/databricks/img/git-menu-2.png" alt="image"></p>
<p>Cet écran vous permet de valider et d'introduire des modifications, ainsi que d'extraire des modifications existantes.
<img src="@source/fr/databricks/img/git-menu-3.png" alt="image"></p>
<h2 id="resoudre-les-conflits" tabindex="-1"><a class="header-anchor" href="#resoudre-les-conflits"><span>Résoudre les conflits</span></a></h2>
<p>Si plusieurs commits impactent le même code, il peut y avoir un problème de conflit. Le message suivant apparaîtra lors d'une tentative d'extraction de code :</p>
<p><img src="@source/fr/databricks/img/git-MergeConflict.png" alt="image"></p>
<p>Sélectionnez &quot;Résoudre le conflit à l'aide de la RP&quot;, ce qui ouvre la fenêtre suivante :</p>
<p><img src="@source/fr/databricks/img/git-MergeConflict2.png" alt="image">
Cette étape vous demandera de créer une nouvelle branche dans laquelle vos modifications seront validées. Saisissez un nom de branche et un message de validation, puis validez à nouveau les messages. En cas de succès, le message suivant s'affichera. Vous pouvez suivre le lien contenu dans ce message pour effectuer vos modifications.</p>
<p><img src="@source/fr/databricks/img/git-MergeConflict3.png" alt="image"></p>
<!-- ## Automatiser les extractions Git

? ? -->
</div></template>


