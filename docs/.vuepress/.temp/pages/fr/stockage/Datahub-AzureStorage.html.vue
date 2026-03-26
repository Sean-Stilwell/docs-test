<template><div><h1 id="travailler-avec-le-stockage-azure" tabindex="-1"><a class="header-anchor" href="#travailler-avec-le-stockage-azure"><span>Travailler avec le stockage Azure</span></a></h1>
<h2 id="qu-est-ce-qu-azure-storage" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-qu-azure-storage"><span>Qu'est-ce qu'Azure Storage</span></a></h2>
<p>Le DHSF utilise Azure Storage, la solution de stockage en nuage de Microsoft pour les scénarios modernes de stockage de données. Azure Storage offre un stockage hautement disponible, massivement évolutif, durable et sécurisé pour une variété d'objets de données dans le cloud.</p>
<p>Il existe deux grands types de comptes de stockage :</p>
<ul>
<li><strong>Azure Data Lake Storage (Gen2)</strong> - conçu pour l'analyse des données volumineuses, il fournit des listes de contrôle d'accès au niveau des fichiers et des dossiers.</li>
<li><strong>Azure Blob Storage</strong> - compte de stockage de base - ne fournit pas de contrôle d'accès au niveau des fichiers et des dossiers mais est requis pour la compatibilité dans certains scénarios.</li>
</ul>
<h2 id="comment-copier-des-fichiers-sur-azure" tabindex="-1"><a class="header-anchor" href="#comment-copier-des-fichiers-sur-azure"><span>Comment copier des fichiers sur Azure</span></a></h2>
<p>Vous avez la possibilité d'utiliser l'interface du navigateur ou les options de l'interface de ligne de commande (ILC) pour charger/télécharger.</p>
<p><strong>Datahub Storage Explorer</strong> est la méthode simple pour travailler avec les comptes Azure Storage. L'explorateur de stockage offre une interface de type glisser-déposer et est accessible à partir de la page Espace de travail. L'outil permet aux utilisateurs de charger et de télécharger des fichiers.</p>
<h2 id="telechargement-automatise-et-fichiers-volumineux" tabindex="-1"><a class="header-anchor" href="#telechargement-automatise-et-fichiers-volumineux"><span>Téléchargement automatisé et fichiers volumineux</span></a></h2>
<p>AzCopy est l'option recommandée pour travailler avec des fichiers volumineux et l'outil peut également être intégré dans des scripts. L'outil est disponible pour Windows et Linux.</p>
</div></template>


