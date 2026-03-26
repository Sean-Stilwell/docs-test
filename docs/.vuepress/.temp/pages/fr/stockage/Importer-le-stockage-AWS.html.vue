<template><div><h1 id="importer-du-stockage-aws-s3-existant" tabindex="-1"><a class="header-anchor" href="#importer-du-stockage-aws-s3-existant"><span>Importer du stockage AWS S3 existant</span></a></h1>
<p>Pour importer un seau AWS S3, vous devez créer un utilisateur disposant des autorisations appropriées sur le seau et générer une clé d'accès pour cet utilisateur.</p>
<ol>
<li>
<p>Dans le menu <strong>Services</strong> de la console AWS, naviguez jusqu'à <strong>Sécurité, identité et conformité</strong>, et <strong>IAM</strong> dans cette section.<br>
<img src="@source/fr/stockage/img/import_aws-01.png" alt="IAM dans le menu de service"></p>
</li>
<li>
<p>Dans la section <strong>Utilisateurs</strong>, créez un nouvel utilisateur.<br>
<img src="@source/fr/stockage/img/import_aws-02.png" alt="Section utilisateurs">
<img src="@source/fr/stockage/img/import_aws-03.png" alt="Créer un utilisateur">
<img src="@source/fr/stockage/img/import_aws-04.png" alt="Attribuer un nom d'utilisateur"></p>
</li>
<li>
<p>Dans l'étape <strong>Set permissions</strong> de la création d'un utilisateur, attribuez une politique appropriée à l'utilisateur. <strong>AmazonS3FullAccess</strong> donnera tous les droits à l'utilisateur, mais une politique plus restrictive, telle que l'exemple ci-dessous, peut être plus appropriée pour votre organisation.<br>
<img src="@source/fr/stockage/img/import_aws-05.png" alt="Politique d'affectation"></p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">{</span>
<span class="line">    "Version" : "2012-10-17",</span>
<span class="line">    "Déclaration" : [</span>
<span class="line">        {</span>
<span class="line">            "Effet" : "Autoriser",</span>
<span class="line">            "Principal" : "*",</span>
<span class="line">            "Action" : [</span>
<span class="line">                "s3:GetObject",</span>
<span class="line">                "s3:PutObject",</span>
<span class="line">                "s3:DeleteObject",</span>
<span class="line">                "s3:ListBucket"</span>
<span class="line">            ],</span>
<span class="line">            "Ressource" : [</span>
<span class="line">                "arn:aws:s3:::&lt;nom-de-votre-bucket>/*",</span>
<span class="line">                "arn:aws:s3:::&lt;votre-nom-de-bucket>"</span>
<span class="line">            ]</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Après avoir examiné les informations, cliquez sur <strong>Créer un utilisateur</strong> pour terminer cette étape.<br>
<img src="@source/fr/stockage/img/import_aws-06.png" alt="Réviser et créer"></p>
<ol start="4">
<li>
<p>Une fois l'utilisateur créé, trouvez-le dans la liste des utilisateurs et cliquez sur le nom d'utilisateur. Dans la section <strong>Résumé</strong>, sous <strong>Clé d'accès 1</strong>, cliquez sur <strong>Créer une clé d'accès</strong>.
<img src="@source/fr/stockage/img/import_aws-07.png" alt="Trouver un utilisateur dans la liste">
<img src="@source/fr/stockage/img/import_aws-08.png" alt="Créer une clé d'accès"></p>
</li>
<li>
<p>Sélectionnez <strong>Autre</strong> comme cas d'utilisation. Si vous le souhaitez, définissez une description pour la clé afin de l'identifier facilement, puis cliquez sur <strong>Créer une clé d'accès</strong>
<img src="@source/fr/stockage/img/import_aws-09.png" alt="Cas d'utilisation de la clé d'accès">
<img src="@source/fr/stockage/img/import_aws-10.png" alt="Description de la clé"></p>
</li>
<li>
<p>Une fois la clé créée, veillez à copier la <strong>clé d'accès</strong> et la <strong>clé d'accès secrète</strong>. Vous ne pourrez pas récupérer la clé secrète après avoir quitté cet écran et devrez en créer une nouvelle si vous la perdez.<br>
<img src="@source/fr/stockage/img/import_aws-11.png" alt="Clé d'accès">
Vous pouvez maintenant saisir ces informations, ainsi que le nom du seau et la région, dans la boîte de dialogue de configuration de Datahub.<br>
<img src="@source/fr/stockage/img/import_aws-12.png" alt="Dialogue de configuration AWS"></p>
</li>
</ol>
</div></template>


