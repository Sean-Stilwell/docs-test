<template><div><h1 id="importer-un-compte-gcp-existant" tabindex="-1"><a class="header-anchor" href="#importer-un-compte-gcp-existant"><span>Importer un compte GCP existant</span></a></h1>
<p>Pour importer un compte de stockage GCP, vous devez créer un compte de service ayant accès au stockage et créer une paire de clés pour le compte.</p>
<ol>
<li>
<p>Dans le menu principal de Google Cloud, sous la section <strong>IAM &amp; Admin</strong>, naviguez jusqu'à <strong>Comptes de service</strong>.<br>
<img src="@source/fr/stockage/img/import_gcp-01.png" alt="Comptes de service dans le menu"></p>
</li>
<li>
<p>En haut de l'écran, cliquez sur <strong>Créer un compte de service</strong> et remplissez les informations relatives au compte. L'identifiant du compte de service est généré automatiquement par défaut, mais vous pouvez le générer à nouveau ou saisir manuellement la valeur de votre choix.<br>
<img src="@source/fr/stockage/img/import_gcp-02.png" alt="Bouton de création de compte">
<img src="@source/fr/stockage/img/import_gcp-03.png" alt="Détails du compte de service"></p>
</li>
<li>
<p>Après avoir créé l'utilisateur, cliquez sur son nom d'utilisateur dans la liste et accédez à l'onglet <strong>Keys</strong>. À partir de là, cliquez sur le bouton <strong>Add Key</strong> (Ajouter une clé) et sélectionnez <strong>Create new key</strong> (Créer une nouvelle clé). À l'invite, assurez-vous que <strong>JSON</strong> est sélectionné et cliquez sur le bouton <strong>Créer</strong>. Cela créera un fichier .json et le téléchargera sur votre ordinateur.<br>
<img src="@source/fr/stockage/img/import_gcp-04.png" alt="Page utilisateur du compte de service">
<img src="@source/fr/stockage/img/import_gcp-05.png" alt="Boîte de dialogue Créer une clé privée"></p>
</li>
</ol>
<p>Pour importer le compte GCP dans Datahub, ouvrez le fichier .json dans un éditeur de texte et collez le contenu dans la zone de texte <strong>Service Account Credentials (JSON)</strong> dans Datahub.<br>
<img src="@source/fr/stockage/img/import_gcp-06.png" alt="Dialogue d'importation du stockage des BPC"></p>
</div></template>


