<template><div><h1 id="importer-du-stockage-azure-existant" tabindex="-1"><a class="header-anchor" href="#importer-du-stockage-azure-existant"><span>Importer du stockage Azure existant</span></a></h1>
<p>L'importation de votre propre compte Azure Storage dans l'interface de l'explorateur de fichiers de Datahub est assez simple. Vous avez seulement besoin du nom du compte et d'une clé d'accès pour le configurer. Pour obtenir ces informations, suivez les étapes suivantes.</p>
<ol>
<li>
<p>Naviguez jusqu'à votre stockage dans la PFDS et cliquez sur le menu déroulant Conteneur actuel:
<img src="@source/fr/stockage/img/storage-dropdown.png" alt="Menu déroulant Conteneur actuel"></p>
</li>
<li>
<p>Sous &quot;Ajouter un compte&quot;, cliquez sur &quot;Azure&quot; pour ouvrir ce menu:
<img src="@source/fr/stockage/img/storage-add-azure.png" alt="Ajouter un stockage Azure"></p>
</li>
<li>
<p>Naviguez jusqu'au compte de stockage dans votre portail Azure et sélectionnez <strong>Clé d'accès</strong> dans la section <strong>Sécurité + réseau</strong> du menu de gauche.<br>
<img src="@source/fr/stockage/img/import_azure-01.png" alt="Touches d'accès au menu"></p>
</li>
<li>
<p>Notez le <strong>Nom du compte de stockage</strong> - il devra être saisi dans la boîte de dialogue de configuration du compte dans Datahub. Pour la clé d'accès, vous pouvez utiliser l'une ou l'autre des clés. Si la clé utilisée fait l'objet d'une rotation (c'est-à-dire qu'une nouvelle clé est générée pour la remplacer), la configuration dans Datahub devra être mise à jour. Cliquez sur le bouton <strong>Afficher</strong> à côté de la clé que vous souhaitez utiliser.<br>
<img src="@source/fr/stockage/img/import_azure-02.png" alt="Page des clés d'accès"></p>
</li>
<li>
<p>Lorsque la clé est révélée, vous pouvez utiliser le bouton <strong>Copier dans le presse-papiers</strong> pour copier la clé.<br>
<img src="@source/fr/stockage/img/import_azure-03.png" alt="Copier la clé d'accès"></p>
</li>
</ol>
<p>Le <strong>nom du compte de stockage</strong> et la <strong>clé du compte</strong> peuvent maintenant être saisis dans le dialogue de stockage Azure.<br>
<img src="@source/fr/stockage/img/import_azure-04.png" alt="Dialogue sur le stockage Azure"></p>
</div></template>


