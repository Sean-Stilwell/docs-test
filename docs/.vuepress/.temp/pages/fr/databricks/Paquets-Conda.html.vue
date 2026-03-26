<template><div><h1 id="travailler-avec-conda" tabindex="-1"><a class="header-anchor" href="#travailler-avec-conda"><span>Travailler avec Conda</span></a></h1>
<p>Les Databricks peuvent prendre en charge des environnements basés sur Conda. DHSF offre deux options aux utilisateurs pour travailler avec Conda.</p>
<ol>
<li>Image Docker spécifique au projet avec le support Conda et un environnement Conda prédéfini. L'image Docker doit être co-développée avec l'équipe de support DHSF et poussée vers le GitHub Container Registry (GHCR).</li>
<li>Image Docker générique avec support Conda. Les utilisateurs devront installer les paquets dans leurs ordinateurs portables.</li>
</ol>
<p>À titre d'illustration, les étapes suivantes sont basées sur l'option 1.</p>
<h2 id="etape-1-creer-l-environnement-yaml" tabindex="-1"><a class="header-anchor" href="#etape-1-creer-l-environnement-yaml"><span>Étape 1 : Créer l'environnement YAML</span></a></h2>
<p>Exemple de code pour <code v-pre>env.yml</code>. Passez à l'étape 3 si vous utilisez une image Docker existante.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">nom : fsdh-sample</span>
<span class="line">canaux :</span>
<span class="line">  - bioconda</span>
<span class="line">  - par défaut</span>
<span class="line">dépendances :</span>
<span class="line">  - python=3.8.16</span>
<span class="line">  - pip=23.0.1</span>
<span class="line">  - six=1.16.0</span>
<span class="line">  - ipython=8.12.0</span>
<span class="line">  - nomkl=3.0</span>
<span class="line">  - numpy=1.24.3</span>
<span class="line">  - pandas=1.1.5</span>
<span class="line">  - traitlets=5.7.1</span>
<span class="line">  - roue=0.38.4</span>
<span class="line">  - hifiasm=0.16.1</span>
<span class="line">  - pip :</span>
<span class="line">    - pyarrow==1.0.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="etape-2-construire-et-pousser-l-image" tabindex="-1"><a class="header-anchor" href="#etape-2-construire-et-pousser-l-image"><span>Étape 2. Construire et pousser l'image</span></a></h2>
<p>L'équipe DHSF construit et pousse l'image sur GitHub. Passez à l'étape 3 si vous utilisez une image Docker existante.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">docker build -t fsdh-sample .</span>
<span class="line">export GHCR_PAT="XXX"</span>
<span class="line">echo $GHCR_PAT|docker login ghcr.io -u &lt;username> --password-stdin</span>
<span class="line">docker tag fsdh-sample ghcr.io/ssc-sp/fsdh-sample:latest</span>
<span class="line">docker push ghcr.io/ssc-sp/fsdh-sample:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="etape-3-creer-un-cluster" tabindex="-1"><a class="header-anchor" href="#etape-3-creer-un-cluster"><span>Étape 3. Créer un cluster</span></a></h2>
<ol>
<li>Demandez à votre administrateur d'activer Container Service pour votre espace de travail Databricks.</li>
<li>Créez un cluster avec le mode d'accès &quot;No Isolation Shared&quot; (pas d'isolation partagée)</li>
<li>Choisissez une durée d'exécution de 10.4-LTS, 9.1-LTS ou 7.3-LTS.</li>
<li>Sous Advance -&gt; Docker, utilisez l'image <code v-pre>ghcr.io/ssc-sp/fsdh-sample:latest</code>
<img src="@source/fr/databricks/img/Conda-Packages-1.jpg" alt="image"></li>
</ol>
<h2 id="etape-4-valider-le-cluster" tabindex="-1"><a class="header-anchor" href="#etape-4-valider-le-cluster"><span>Étape 4. Valider le cluster</span></a></h2>
<p>Exécutez le code suivant :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%sh</span>
<span class="line">liste de conda</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


