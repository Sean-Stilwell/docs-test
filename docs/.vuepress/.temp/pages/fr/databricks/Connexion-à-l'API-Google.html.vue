<template><div><h1 id="connexion-de-l-api-google-a-databricks" tabindex="-1"><a class="header-anchor" href="#connexion-de-l-api-google-a-databricks"><span>Connexion de l'API Google à Databricks</span></a></h1>
<p>Ce document explique comment configurer les informations d'identification pour se connecter à n'importe quelle API Google telle que Google Earth Engine, BigTable et BigQuery.</p>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/google-apis.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge la balise vidéo.
</video>
-->
<h2 id="hypotheses" tabindex="-1"><a class="header-anchor" href="#hypotheses"><span>Hypothèses</span></a></h2>
<ul>
<li>La DHSF ne fournira pas d'identifiants pour la Google Cloud Platform et suppose que l'utilisateur a reçu un accès de son département.</li>
<li>L'utilisateur connaît le produit Google utilisé</li>
</ul>
<h2 id="_1-creer-un-projet-google-cloud" tabindex="-1"><a class="header-anchor" href="#_1-creer-un-projet-google-cloud"><span>1. <a href="https://developers.google.com/workspace/guides/create-project" target="_blank" rel="noopener noreferrer">Créer un projet Google Cloud</a></span></a></h2>
<p>Suivez le lien pour savoir comment créer un projet Google Cloud.</p>
<h2 id="_2-activer-les-api-et-les-services-necessaires" tabindex="-1"><a class="header-anchor" href="#_2-activer-les-api-et-les-services-necessaires"><span>2. Activer les API et les services nécessaires</span></a></h2>
<p>Une fois votre projet créé et sélectionné, dans la barre de navigation, cliquez sur &quot;APIs &amp; Services&quot; :</p>
<p><img src="@source/fr/databricks/img/google-1.png" alt="341182784_1883945795306857_7440166856820153159_n"></p>
<p>Cliquez ensuite sur &quot;Enable APIs &amp; Services&quot; :</p>
<p><img src="@source/fr/databricks/img/google-2.png" alt="341291789_178018718053904_5458837908367107510_n">
Recherchez les services dont vous pourriez avoir besoin, tels que &quot;BigQuery API&quot;, &quot;BigTable API&quot;, &quot;Earth Engine API&quot;, etc. Il devrait alors apparaître dans les résultats de la recherche. Cliquez dessus, puis cliquez sur &quot;Enable&quot;.</p>
<h2 id="_3-creez-un-compte-de-service-et-obtenez-une-cle-privee" tabindex="-1"><a class="header-anchor" href="#_3-creez-un-compte-de-service-et-obtenez-une-cle-privee"><span>3. Créez un compte de service et obtenez une clé privée.</span></a></h2>
<p>Une fois que vous avez activé les API dont vous avez besoin dans votre projet, ouvrez le menu de navigation et cliquez sur &quot;IAM &amp; Admin&quot; :</p>
<p><img src="@source/fr/databricks/img/google-3.png" alt="341174751_558854192793790_2404372516710887907_n"></p>
<p>Cliquez ensuite sur &quot;Comptes de service&quot; :</p>
<p><img src="@source/fr/databricks/img/google-4.png" alt="342383092_889586648769272_4903323285442570884_n">
Créez ensuite un nouveau compte de service :</p>
<p><img src="@source/fr/databricks/img/google-5.png" alt="341223863_914125263146363_524864849766701058_n"></p>
<p>Saisissez les informations nécessaires (nom, ID, description) dans la première étape, puis dans la deuxième étape, sélectionnez les rôles nécessaires pour votre compte de service. En fonction du service que vous utilisez, vous devrez sélectionner les rôles appropriés : par exemple, si vous utilisez l'API Earth Engine, vous devez sélectionner les rôles admin, viewer ou writer, en fonction de vos besoins :</p>
<p><img src="@source/fr/databricks/img/google-6.png" alt="341285054_594648945966990_3340994669833248652_n">
Ensuite, sautez la troisième étape et créez votre compte de service en cliquant sur &quot;Terminé&quot;. Cela devrait vous ramener à la liste de tous les comptes de service et vous devriez voir le compte de service que vous venez de créer listé. Cliquez dessus, puis cliquez sur l'onglet &quot;Clés&quot; :</p>
<p><img src="@source/fr/databricks/img/google-7.png" alt="328758927_2692944394192271_6807215753292084072_n"></p>
<p>Cliquez sur &quot;Add Key&quot; et &quot;Create new key&quot;, et sélectionnez le format JSON pour votre clé :</p>
<p><img src="@source/fr/databricks/img/google-8.png" alt="341264731_1182567819100669_7664721525011167448_n">
Cela créera automatiquement une clé et la téléchargera. Veillez à conserver cette clé.</p>
<h2 id="_4-enregistrez-votre-projet-cloud" tabindex="-1"><a class="header-anchor" href="#_4-enregistrez-votre-projet-cloud"><span>4. Enregistrez votre projet cloud</span></a></h2>
<p>Dans le cas de certaines API, il se peut que vous deviez enregistrer votre projet Google Cloud. Par exemple, Google Earth Engine nous demande de naviguer vers [ce lien d'enregistrement] (https://code.earthengine.google.com/register) et de nous connecter à l'aide du même compte Google que celui que vous utilisez pour Google Cloud, afin d'enregistrer votre projet.</p>
<p>Pour enregistrer votre Google Cloud</p>
<p>Sélectionnez &quot;Utiliser avec un projet cloud&quot;</p>
<p>Sélectionnez &quot;Utilisation payante&quot; ou &quot;Utilisation non payante&quot; en fonction de vos besoins personnels et de votre rôle. Dans notre cas, nous sélectionnerons &quot;Usage non rémunéré&quot;. Le système vous invite à sélectionner un type de projet, choisissez &quot;Gouvernement&quot;.</p>
<p>Sélectionnez &quot;Choose an existing cloud project&quot; et sélectionnez le projet dans lequel vous avez activé l'API Google Earth Engine.</p>
<p>Enfin, vérifiez les informations que vous avez fournies et confirmez-les.</p>
<h2 id="_5-installer-le-sdk-cote-client-pour-votre-service" tabindex="-1"><a class="header-anchor" href="#_5-installer-le-sdk-cote-client-pour-votre-service"><span>5. Installer le SDK côté client pour votre service</span></a></h2>
<p>Votre service peut nécessiter l'installation d'un paquetage sur Databricks afin de l'utiliser, comme c'est le cas pour l'API Google Earth Engine. Pour cette étape, nous allons démontrer l'installation de l'API Earth Engine de Google, mais tous les paquets peuvent être installés de cette manière.</p>
<p>Il y a deux façons d'installer un paquetage. Pour installer un paquetage Python dans la portée du notebook, exécutez la ligne magique Python suivante (assurez-vous de remplacer <code v-pre>earthengine-api</code> par le nom de votre paquetage, que vous devrez peut-être rechercher en ligne) :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%pip install earthengine-api</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Si vous réussissez à exécuter cette ligne, passez à l'étape suivante. Si vous souhaitez plutôt installer le package sur le cluster, ouvrez la barre de navigation sur Databricks, et cliquez sur &quot;Compute&quot;. Sélectionnez le cluster sur lequel vous souhaitez installer le paquet, puis cliquez sur &quot;libraries&quot; :</p>
<p><img src="@source/fr/databricks/img/google-9.png" alt="341180939_1322586438321309_3468577516645542908_n"></p>
<p>Cliquez ensuite sur &quot;Installer nouveau&quot; :</p>
<p><img src="@source/fr/databricks/img/google-10.png" alt="341112662_216410727698121_7329229316469598703_n">
Dans le menu contextuel, sélectionnez PyPI, et dans le champ &quot;package name&quot;, entrez le nom de votre paquet (pour nous : <code v-pre>earthengine-api</code>), puis cliquez sur &quot;Install&quot;. Une fois que vous aurez démarré votre cluster, il installera la bibliothèque et elle sera disponible sur tous les notebooks qui sont attachés à ce cluster.</p>
<h2 id="_6-utilisation-de-votre-api-google" tabindex="-1"><a class="header-anchor" href="#_6-utilisation-de-votre-api-google"><span>6. Utilisation de votre API Google</span></a></h2>
<p>Commencez par télécharger la clé privée que nous avons créée à l'étape 3. Vous pouvez le faire soit en téléchargeant vers votre stockage DHSF, soit en téléchargeant directement vers Databricks. Prenez note de l'endroit où votre clé est stockée, puis utilisez le code suivant pour y accéder. Ce code a été créé pour l'utilisation de l'API Earth Engine, mais le processus est très similaire d'un service à l'autre.</p>
<h3 id="utilisation-d-une-cle-privee-telechargee-via-databricks-file-upload" tabindex="-1"><a class="header-anchor" href="#utilisation-d-une-cle-privee-telechargee-via-databricks-file-upload"><span>Utilisation d'une clé privée téléchargée via Databricks File Upload</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">importation ee</span>
<span class="line"></span>
<span class="line"># Entrez l'email associé à votre compte de service créé à l'étape 3 :</span>
<span class="line">compte_service = 'my-service-account@...gserviceaccount.com'</span>
<span class="line"># Dans notre cas :</span>
<span class="line">compte_service = 'david-rene@earth-engine-384112.iam.gserviceaccount.com'</span>
<span class="line"></span>
<span class="line"># Entrez le chemin d'accès à vos informations d'identification :</span>
<span class="line">credsPath = '/dbfs/Filestore/tables/credentials.json'</span>
<span class="line"># Dans notre cas, nous utilisons une clé que nous avons téléchargée via Databricks file upload :</span>
<span class="line">credsPath = '/dbfs/FileStore/tables/earth_engine_384112_03e2e02ee924.json'</span>
<span class="line"></span>
<span class="line"># MOTEUR À TERRE UNIQUEMENT :</span>
<span class="line"># Nous pouvons alors initialiser une session :</span>
<span class="line">credentials = ee.ServiceAccountCredentials(service_account, credsPath)</span>
<span class="line">ee.Initialize(credentials)</span>
<span class="line"></span>
<span class="line"># Testons-le :</span>
<span class="line">print(ee.Image("NASA/NASADEM_HGT/001").get("title").getInfo())</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="utilisation-d-une-cle-privee-telechargee-sur-le-stockage-dhsf" tabindex="-1"><a class="header-anchor" href="#utilisation-d-une-cle-privee-telechargee-sur-le-stockage-dhsf"><span>Utilisation d'une clé privée téléchargée sur le stockage DHSF</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">importation ee</span>
<span class="line">import json</span>
<span class="line"></span>
<span class="line"># Entrez l'email associé à votre compte de service créé à l'étape 3 :</span>
<span class="line">compte_service = 'my-service-account@...gserviceaccount.com'</span>
<span class="line"># Dans notre cas :</span>
<span class="line">compte_service = 'david-rene@earth-engine-384112.iam.gserviceaccount.com'</span>
<span class="line"></span>
<span class="line"># Entrez le chemin d'accès à vos informations d'identification :</span>
<span class="line">credsPath = '/mnt/fsdh-dbk-main-mount/path/to/credentials.json'</span>
<span class="line"># Dans notre cas, nous utilisons une clé que nous avons téléchargée dans le stockage DHSF :</span>
<span class="line">credsPath = '/mnt/fsdh-dbk-main-mount/David/earth-engine-384112-72d27e31c3b7.json'</span>
<span class="line"></span>
<span class="line">json_rows = spark.read.text(credsPath).collect() # Lire le fichier en utilisant spark</span>
<span class="line">creds = json.loads("".join([row.value for row in json_rows])) # Chargement dans un fichier json/dict correct</span>
<span class="line"></span>
<span class="line"># Dépose dans un fichier json avec le nom d'origine mais dans le dépôt de fichiers</span>
<span class="line">newPath = "/dbfs/FileStore/tables/"+credsPath.split("/")[-1]</span>
<span class="line">avec open(newPath, "w") as f :</span>
<span class="line">    json.dump(creds,f)</span>
<span class="line"></span>
<span class="line"># MOTEUR À TERRE UNIQUEMENT :</span>
<span class="line"># Nous pouvons alors initialiser une session :</span>
<span class="line">credentials = ee.ServiceAccountCredentials(service_account, newPath)</span>
<span class="line">ee.Initialize(credentials)</span>
<span class="line"></span>
<span class="line"># Testons-le :</span>
<span class="line">print(ee.Image("NASA/NASADEM_HGT/001").get("title").getInfo())</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


