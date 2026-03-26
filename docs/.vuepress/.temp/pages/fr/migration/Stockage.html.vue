<template><div><h1 id="migration-ou-retrait-du-stockage" tabindex="-1"><a class="header-anchor" href="#migration-ou-retrait-du-stockage"><span>Migration ou retrait du stockage</span></a></h1>
<p>Ce document fournit des instructions sur:</p>
<ul>
<li>la migration de vos ressources de stockage de l'environnement de validation de concept (POC) vers votre nouvel espace de travail DHSF dans l'environnement de production (PROD)</li>
<li>le retrait de vos ressources de stockage de l'environnement POC si vous ne transférez pas vos recherches vers l'environnement PROD</li>
</ul>
<p>Veuillez noter: pour éviter toute perte de données, vous devez terminer la migration ou le retrait avant le 31 mars 2025.</p>
<h2 id="a-migration-de-poc-a-prod" tabindex="-1"><a class="header-anchor" href="#a-migration-de-poc-a-prod"><span>A. Migration de POC à PROD</span></a></h2>
<p>Pour migrer vos ressources de stockage, vous devez disposer d'un nouvel espace de travail dans l'environnement PROD. L'équipe de support du DataHub scientifique fédéral fournira de l'information lorsqu'il sera prêt et fournira de l'aide quand nécessaire.</p>
<p>Une fois que vous avez un espace de travail dans l'environnement PROD, l'équipe de support du DataHub scientifique fédéral peut vous aider à migrer vos ressources de stockage. Veuillez soumettre une demande de support pour commencer.</p>
<p>Alternativement, vous pouvez migrer vos ressources de stockage vous-même comme suit:</p>
<h3 id="option-1-utiliser-azcopy-pour-migrer-vos-donnees-directement" tabindex="-1"><a class="header-anchor" href="#option-1-utiliser-azcopy-pour-migrer-vos-donnees-directement"><span>Option 1. Utiliser AzCopy pour migrer vos données directement</span></a></h3>
<p>Pour migrer vos données de stockage, vous pouvez utiliser AzCopy pour copier les données de votre compte de stockage POC vers votre compte de stockage PROD.</p>
<blockquote>
<p><strong>Note:</strong> Il faut avoir le stockage PROD configuré et prêt à recevoir les données avant de commencer la migration.</p>
</blockquote>
<p>Il faut installer AzCopy sur votre machine locale ou sur une machine virtuelle. Il faut également se connecter avec le même compte que celui utilisé pour le DataHub scientifique fédéral.</p>
<ol>
<li>
<p>Obtenir l'URL SAS pour POC en naviguant vers Stockage, en cliquant sur l'onglet AzCopy, puis en cliquant sur &quot;Générer un jeton de conteneur&quot;. L'URL est affichée dans diverses commandes <code v-pre>azcopy</code> sur cette page, copiez-la et enregistrez-la pour une utilisation future.</p>
</li>
<li>
<p>Obtenir l'URL SAS pour PROD en naviguant vers Stockage, en cliquant sur l'onglet AzCopy, puis en cliquant sur &quot;Générer un jeton de conteneur&quot;. L'URL est affichée dans diverses commandes <code v-pre>azcopy</code> sur cette page, copiez-la et enregistrez-la pour une utilisation future.</p>
</li>
<li>
<p>Exécuter la commande AzCopy suivante pour copier les données du compte de stockage POC vers le compte de stockage PROD. Remplacez <code v-pre>&lt;POC_SAS_URL&gt;</code> et <code v-pre>&lt;PROD_SAS_URL&gt;</code> par les URL SAS obtenues dans les étapes précédentes:</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">azcopy copy <span class="token string">"&lt;POC_SAS_URL>"</span> <span class="token string">"&lt;PROD_SAS_URL>"</span> <span class="token parameter variable">--recursive</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>Valider que les données ont été copiées avec succès en vérifiant le compte de stockage PROD.</li>
</ol>
<h3 id="option-2-utiliser-azcopy-pour-telecharger-les-donnees-localement" tabindex="-1"><a class="header-anchor" href="#option-2-utiliser-azcopy-pour-telecharger-les-donnees-localement"><span>Option 2. Utiliser AzCopy pour télécharger les données localement</span></a></h3>
<p>Pour télécharger vos données du compte de stockage POC sur votre machine locale, vous pouvez utiliser AzCopy pour copier les données du compte de stockage POC sur votre machine locale.</p>
<p>Il faut installer AzCopy sur votre machine locale ou sur une machine virtuelle. Il faut également se connecter avec le même compte que celui utilisé pour le DataHub scientifique fédéral.</p>
<ol>
<li>
<p>Obtenir l'URL SAS pour POC en naviguant vers Stockage, en cliquant sur l'onglet AzCopy, puis en cliquant sur &quot;Générer un jeton de conteneur&quot;. L'URL est affichée dans diverses commandes <code v-pre>azcopy</code> sur cette page, copiez-la et enregistrez-la pour une utilisation future.</p>
</li>
<li>
<p>Exécuter la commande AzCopy suivante pour copier les données du compte de stockage POC sur votre machine locale. Remplacez <code v-pre>&lt;POC_SAS_URL&gt;</code> par l'URL SAS obtenue dans l'étape précédente et <code v-pre>&lt;CHEMIN_LOCAL&gt;</code> par le chemin du répertoire local où vous souhaitez enregistrer les données:</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">azcopy copy <span class="token string">"&lt;POC_SAS_URL>"</span> <span class="token string">"&lt;CHEMIN_LOCAL>"</span> <span class="token parameter variable">--recursive</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>Valider que les données ont été copiées avec succès en vérifiant le chemin local.</li>
</ol>
<h3 id="option-3-exporter-manuellement-les-donnees" tabindex="-1"><a class="header-anchor" href="#option-3-exporter-manuellement-les-donnees"><span>Option 3. Exporter manuellement les données</span></a></h3>
<p>Si vous ne pouvez pas utiliser AzCopy pour migrer vos données, vous pouvez exporter manuellement vos données du compte de stockage POC et les importer dans le compte de stockage PROD en téléchargeant simplement les données du compte de stockage POC.</p>
<h2 id="b-retrait-du-stockage" tabindex="-1"><a class="header-anchor" href="#b-retrait-du-stockage"><span>B. Retrait du stockage</span></a></h2>
<p>Si vous ne passez pas à l'environnement PROD, vous pouvez utiliser l'Option 2 ou 3 ci-dessus pour télécharger votre stockage pour une utilisation future ou à des fins d'archivage.</p>
<h2 id="c-support" tabindex="-1"><a class="header-anchor" href="#c-support"><span>C. Support</span></a></h2>
<p>Si vous rencontrez des problèmes au cours du processus de migration, veuillez contacter l'équipe de support du DataHub scientifique fédéral en soumettant une demande de support. Notre équipe se fera un plaisir de vous aider à migrer ou à retirer vos ressources.</p>
</div></template>


