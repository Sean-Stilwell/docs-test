<template><div><h1 id="databricks-vs-code-extension" tabindex="-1"><a class="header-anchor" href="#databricks-vs-code-extension"><span>Databricks VS Code Extension</span></a></h1>
<p>Grâce à l'extension Databricks VS Code, vous pouvez vous connecter à un espace de travail Databricks à partir de VS Code. Cela vous permet de :</p>
<ul>
<li>Ecrivez votre code localement dans VS Code, puis exécutez-le à distance sur un cluster Databricks.</li>
<li>Exécuter des requêtes SQL sur un cluster Databricks et voir les résultats directement dans VS Code.</li>
<li>Gérer vos clusters Databricks.</li>
</ul>
<h2 id="pourquoi-l-utiliser" tabindex="-1"><a class="header-anchor" href="#pourquoi-l-utiliser"><span>Pourquoi l'utiliser ?</span></a></h2>
<p>Visual Studio Code est un éditeur de code extrêmement populaire. En tant que système open source, il dispose d'une large communauté de contributeurs et d'utilisateurs. Il est également très extensible, ce qui permet aux utilisateurs d'installer une grande variété d'extensions pour prendre en charge différents langages de programmation, le débogage, etc.</p>
<h2 id="conditions-prealables" tabindex="-1"><a class="header-anchor" href="#conditions-prealables"><span>Conditions préalables</span></a></h2>
<ul>
<li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>.</li>
<li>Un espace de travail Databricks sur le DataHub scientifique fédéral.</li>
</ul>
<h2 id="installer-l-extension" tabindex="-1"><a class="header-anchor" href="#installer-l-extension"><span>Installer l'extension</span></a></h2>
<ol>
<li>Ouvrez Visual Studio Code.</li>
<li>Cliquez sur l'icône <strong>Extensions</strong> dans la barre de navigation de gauche.</li>
<li>Recherchez <strong>Databricks</strong>.</li>
<li>Cliquez sur <strong>Installer</strong>. L'extension correcte est indiquée dans la capture d'écran ci-dessous.
<img src="@source/fr/databricks/img/vscode_databricks_1.png" alt="Extension Databricks"></li>
</ol>
<h2 id="se-connecter-a-un-espace-de-travail-databricks" tabindex="-1"><a class="header-anchor" href="#se-connecter-a-un-espace-de-travail-databricks"><span>Se connecter à un espace de travail Databricks</span></a></h2>
<ol>
<li>Cliquez sur l'icône <strong>Databricks</strong> dans la barre de navigation de gauche.</li>
<li>Cliquez sur <strong>Configurer</strong>.</li>
<li>Entrez l'URL de votre espace de travail Databricks dans l'espace indiqué ci-dessous, jusqu'à <code v-pre>.net/</code>. Par exemple, si l'URL de votre espace de travail est <code v-pre>https://sample.azuredatabricks.net/?o=111111111111#</code>, entrez <code v-pre>https://sample.azuredatabricks.net/</code>.
<img src="@source/fr/databricks/img/vscode_databricks_2.png" alt="Extension Databricks"></li>
<li>Sur l'écran suivant, sélectionnez <strong>Editer les profils Databricks</strong></li>
<li>Dans l'écran qui s'ouvre, complétez les éléments suivants et enregistrez le fichier :</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[PAR DÉFAUT]</span>
<span class="line">hôte = https://sample.azuredatabricks.net/</span>
<span class="line">token = votre_token</span>
<span class="line">jobs-api-version = 2.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[DEFAULT]</strong> est le nom du profil. Vous pouvez le modifier à votre guise.
<strong>host</strong> est le même que celui que vous avez saisi à l'étape précédente.
<strong>token</strong> est votre jeton d'accès personnel. Pour générer un jeton, voir <a href="https://docs.databricks.com/en/dev-tools/auth.html#databricks-personal-access-token-authentication" target="_blank" rel="noopener noreferrer">Databricks personal access token authentication</a>
<strong>jobs-api-version</strong> doit rester inchangé.</p>
<p>Après avoir effectué ces étapes, cliquez à nouveau sur <strong>Configurer</strong> et accédez à votre profil <strong>[DEFAULT]</strong> sauvegardé. Databricks se connectera automatiquement.</p>
<h2 id="executer-le-code-local" tabindex="-1"><a class="header-anchor" href="#executer-le-code-local"><span>Exécuter le code local</span></a></h2>
<p><strong>NOTE:</strong> Vous devez ouvrir un dossier pour utiliser cette partie de l'extension. Pour ce faire, cliquez sur Fichier &gt; Ouvrir un dossier et sélectionnez le dossier dans lequel vous conservez votre code.</p>
<h3 id="attacher-un-cluster" tabindex="-1"><a class="header-anchor" href="#attacher-un-cluster"><span>Attacher un cluster</span></a></h3>
<p>Avant d'exécuter le code, vous devez attacher un cluster.</p>
<ol>
<li>Ouvrez l'icône <strong>Databricks</strong> dans la barre de navigation de gauche.</li>
<li>Si aucun cluster n'est attaché, survolez la barre <strong>Cluster</strong> et cliquez sur <strong>Configure Cluster</strong>, comme indiqué dans la capture d'écran ci-dessous.
<img src="@source/fr/databricks/img/vscode_databricks_3.png" alt="Extension Databricks"></li>
<li>Dans la liste déroulante, sélectionnez le cluster que vous souhaitez attacher, comme indiqué dans la capture d'écran ci-dessous.
<img src="@source/fr/databricks/img/vscode_databricks_4.png" alt="Extension Databricks"></li>
<li>Vous pouvez maintenant démarrer le cluster à partir de l'extension.</li>
</ol>
<p><strong>NOTE:</strong> Vous ne pouvez pas créer un cluster dans l'extension. Vous devez le créer dans Databricks lui-même.</p>
<h3 id="ecrire-votre-code" tabindex="-1"><a class="header-anchor" href="#ecrire-votre-code"><span>Écrire votre code</span></a></h3>
<p>N'importe quel fichier <code v-pre>.py</code> fonctionne, mais vous pouvez les formater pour tirer parti de la fonctionnalité notebook de Databricks.</p>
<p>Pour utiliser un notebook, ajoutez <code v-pre># Databricks notebook source</code> au début de votre fichier <code v-pre>.py</code>. Cela indique à Databricks de traiter le fichier comme un notebook. Vous pouvez alors utiliser les commandes suivantes pour contrôler le notebook :</p>
<ul>
<li><code v-pre># COMMAND ----------</code> crée une nouvelle cellule.</li>
<li><code v-pre># MAGIC %md</code> crée une cellule markdown.</li>
<li><code v-pre># MAGIC %sql</code> crée une cellule SQL.</li>
<li><code v-pre># MAGIC %scala</code> crée une cellule Scala.</li>
<li><code v-pre># MAGIC %r</code> crée une cellule R.</li>
<li><code v-pre># MAGIC %python</code> crée une cellule Python.</li>
</ul>
<p><strong>NOTE:</strong> Vous devez vous assurer que toutes les bibliothèques que vous importez sont installées sur le cluster. Vous pouvez le faire en incluant la commande <code v-pre>pip install</code> dans votre code ou en installant les bibliothèques sur le cluster lui-même.</p>
<h3 id="executer-du-code-local-sur-un-cluster" tabindex="-1"><a class="header-anchor" href="#executer-du-code-local-sur-un-cluster"><span>Exécuter du code local sur un cluster</span></a></h3>
<ol>
<li>Ouvrez le menu <strong>Explorer</strong> dans la barre de navigation gauche.</li>
<li>Naviguez jusqu'au fichier que vous souhaitez exécuter. Vous pouvez utiliser n'importe quel fichier que vous pouvez exécuter dans Databricks (R, Python, etc.).</li>
<li>Assurez-vous que le cluster est démarré, puis faites un clic droit sur le fichier et sélectionnez <strong>Run File as Workflow in Databricks</strong>, comme indiqué dans la capture d'écran ci-dessous.
<img src="@source/fr/databricks/img/vscode_databricks_5.png" alt="Extension Databricks"></li>
<li>Le fichier sera exécuté sur le cluster. Vous pouvez voir les résultats dans la fenêtre <strong>Sortie</strong>.
<img src="@source/fr/databricks/img/vscode_databricks_6.png" alt="Extension Databricks"></li>
</ol>
<p><strong>NOTE:</strong> Votre code sera copié dans Databricks sous le dossier <code v-pre>.ide</code> dans votre espace de travail.</p>
</div></template>


