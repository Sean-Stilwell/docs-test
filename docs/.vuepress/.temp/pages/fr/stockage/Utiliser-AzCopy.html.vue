<template><div><h1 id="utiliser-azcopy-pour-interagir-avec-le-compte-de-stockage-azure" tabindex="-1"><a class="header-anchor" href="#utiliser-azcopy-pour-interagir-avec-le-compte-de-stockage-azure"><span>Utiliser AzCopy pour intéragir avec le compte de stockage Azure</span></a></h1>
<h2 id="commandes-utiles" tabindex="-1"><a class="header-anchor" href="#commandes-utiles"><span>Commandes utiles</span></a></h2>
<p>Voici quelques exemples de lignes pour interagir avec un espace de travail. Dans ces exemples de lignes, remplacez <code v-pre>C:\data\stage</code> par le chemin du dossier ou du fichier qui vous intéresse. Pour un guide complet sur l'utilisation d'AzCopy, voir ci-dessous.</p>
<p>Copie d'un fichier local vers Azure (téléchargement d'un fichier ou d'un dossier) :</p>
<p><code v-pre>azcopy copy C:\Nmydata\Nstage &quot;&lt;sas_uri&gt;&quot; </code></p>
<p>Copier d'Azure vers local (télécharger un fichier ou un dossier) :</p>
<p><code v-pre>azcopy copy &quot;&lt;sas_uri&gt;&quot; C:\NMydata\Nstage</code></p>
<p>Synchronisation récursive du local vers Azure (mise en miroir d'un dossier de votre système vers Azure) :</p>
<p><code v-pre>azcopy sync C:\mydata\stage &quot;&lt;sas_uri&gt;&quot; --recursive</code></p>
<p>Synchronisation récursive d'Azure vers local (mise en miroir d'un dossier d'Azure vers votre système) :</p>
<p><code v-pre>azcopy sync &quot;&lt;sas_uri&gt;&quot; C:\NMydata\stage --recursive</code></p>
<h2 id="drapeaux-utiles" tabindex="-1"><a class="header-anchor" href="#drapeaux-utiles"><span>Drapeaux utiles</span></a></h2>
<p>Vous pouvez ajouter des drapeaux à la fin d'une commande pour changer le comportement d'AzCopy. En voici quelques uns utiles :</p>
<ul>
<li><code v-pre>--recursive</code> : copier ou synchroniser tous les fichiers et dossiers du dossier source. Sans ce drapeau, seuls les fichiers et dossiers à la racine du dossier source seront copiés ou synchronisés.</li>
<li><code v-pre>--delete-destination</code> : supprime les fichiers dans le dossier de destination s'ils ont été supprimés dans le dossier source. Cette option n'est disponible que pour la commande <code v-pre>sync</code>.</li>
<li><code v-pre>--overwrite=ifSourceNewer</code> : écrase les fichiers dans le dossier de destination s'ils sont plus anciens que les fichiers sources. Cette option n'est disponible que pour la commande <code v-pre>sync</code>.</li>
</ul>
<p>Pour plus d'informations sur les drapeaux qui peuvent être utilisés sur n'importe quelle commande, lancez <code v-pre>azcopy &lt;commande&gt; --help</code>.</p>
<h1 id="guide-azcopy" tabindex="-1"><a class="header-anchor" href="#guide-azcopy"><span>Guide AzCopy</span></a></h1>
<!---removed due to accessibility requirements
<video width="600" height="350" controls>
    <source src="/api/media/azcopy.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge la balise vidéo.
</video>
-->
<h2 id="pre-requis" tabindex="-1"><a class="header-anchor" href="#pre-requis"><span>Pré-requis</span></a></h2>
<ul>
<li>Familiarité avec la ligne de commande (par exemple, PowerShell, Linux Shell scripting).</li>
<li>Pour l'interaction en ligne de commande uniquement. Les utilisateurs peuvent choisir d'utiliser Azure Storage Explorer et DataHub Portal Storage Explorer comme alternatives s'ils n'utilisent pas la ligne de commande.</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>Pour utiliser AzCopy, vous devez l'installer sur votre système. Vous pouvez télécharger la dernière version d'AzCopy [ici] (https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10#download-azcopy). Pour les machines Windows, un fichier zip sera téléchargé. Extrayez le contenu du fichier zip dans un dossier de votre choix. Pour les machines Linux, un fichier tar sera téléchargé. Consultez la documentation de votre distribution Linux pour savoir comment extraire le contenu du fichier tar.</p>
<h2 id="utilisation-d-azcopy" tabindex="-1"><a class="header-anchor" href="#utilisation-d-azcopy"><span>Utilisation d'AzCopy</span></a></h2>
<p>Sous Windows, le processus d'installation vous laissera avec un fichier exécutable. Afin d'utiliser AzCopy, vous devez ouvrir une invite de commande et naviguer dans le dossier où se trouve l'exécutable. Vous pouvez alors exécuter les commandes d'AzCopy en tant que telles :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy &lt;commande> &lt;arguments> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Voici quelques-unes des commandes les plus utiles :</p>
<ul>
<li>
<p><strong>Copie</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy copy &lt;source> &lt;destination> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cette commande copiera le fichier/dossier source vers la destination. Lors de la copie d'un dossier, pour s'assurer qu'une copie profonde est effectuée, utilisez l'option <code v-pre>--recursive</code>.</p>
</li>
<li>
<p><strong>Sync</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy sync &lt;source> &lt;destination> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cette commande va créer un miroir du fichier ou du dossier source vers le fichier ou le dossier de destination. Pour faire une copie profonde de votre source, utilisez l'option <code v-pre>--recursive</code>.</p>
</li>
<li>
<p><strong>Supprimer</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy remove &lt;source> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cette commande supprimera le fichier ou le dossier source. Pour supprimer un dossier, utilisez l'option <code v-pre>--recursive</code>.</p>
</li>
<li>
<p><strong>Liste</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">azcopy list &lt;source> &lt;--flags></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cette commande listera les fichiers et les dossiers dans le dossier source. Pour lister les fichiers et dossiers d'un dossier, utilisez l'option <code v-pre>--recursive</code>.</p>
</li>
</ul>
<p>Lorsque vous utilisez ces commandes, le jeton SAS généré pointera vers la racine de votre espace de travail et ressemblera à ceci :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"https://fsdhprojdw1poc.blob.core.windows.net/datahub?token-info"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Pour pointer vers un dossier ou un fichier spécifique, vous pouvez ajouter le chemin vers ce fichier/dossier après <code v-pre>datahub</code>, comme suit :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"https://fsdhprojdw1poc.blob.core.windows.net/datahub/path/to/folder?token-info"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Exemples:</strong></p>
<p>Copier le fichier <code v-pre>sample.csv</code> sur ma machine dans la racine de mon espace de travail :</p>
<p><code v-pre>azcopy copy C:\Nmydata\Nsample.csv &quot;&lt;sas_uri&gt;&quot; </code></p>
<p>Copier un dossier <code v-pre>sample</code> sur ma machine dans la racine de mon espace de travail :</p>
<p><code v-pre>azcopy copy C:\Nmydata\Nsample &quot;&lt;sas_uri&gt;&quot; --recursive</code></p>
<p>Synchronisation du dossier <code v-pre>sample</code> de ma machine dans un dossier spécifique de mon espace de travail :</p>
<p><code v-pre>azcopy sync C:\data\sample &quot;blob-name.blob.core windows.net/datahub/path/to/folder?token-info&quot; --recursive</code></p>
<h2 id="en-savoir-plus" tabindex="-1"><a class="header-anchor" href="#en-savoir-plus"><span>En savoir plus</span></a></h2>
<p>Vous pouvez en savoir plus sur AzCopy, y compris des exemples de scénarios impliquant le stockage Azure mais aussi les buckets Amazon S3 ou le stockage dans le nuage de Google, dans la [documentation officielle] (https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10).</p>
</div></template>


