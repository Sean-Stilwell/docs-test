<template><div><h1 id="vue-d-ensemble-de-la-migration" tabindex="-1"><a class="header-anchor" href="#vue-d-ensemble-de-la-migration"><span>Vue d'ensemble de la migration</span></a></h1>
<p>À l'automne 2024, le Datahub scientifique fédéral commencera à conclure la phase de validation du concept (POC) et passera à la phase de production (PROD).</p>
<p>Pour vous préparer à cette transition, nous avons créé une série de guides de migration pour vous aider à migrer vos données, votre stockage, vos applications web et vos espaces de travail Databricks de l'environnement POC vers l'environnement PROD ou à les retirer de l'environnement POC.</p>
<p>Ce document fournit des informations générales sur le processus de migration. Vous trouverez des instructions détaillées sur la manière de migrer des ressources spécifiques dans la barre latérale.</p>
<h2 id="processus-et-dates-limites" tabindex="-1"><a class="header-anchor" href="#processus-et-dates-limites"><span>Processus et dates limites</span></a></h2>
<p>Le processus de migration comprend les étapes suivantes:</p>
<ul>
<li>Automne 2024:
<ul>
<li>L'équipe du Datahub scientifique fédéral commencera à contacter les utilisateurs pour les informer quand l'environnement PROD sera prêt.</li>
<li>L'équipe du Datahub scientifique fédéral communiquera avec tous les responsables dans l'environnement POC pour discuter le processus et les exigences pour créer un nouvel espace de travail dans l'environnement PROD.</li>
<li>Les responsables qui veulent créer un nouvel espace de travail dans l'environnement PROD peuvent contacter l'équipe du Datahub scientifique fédéral pour commencer le processus et obtenir de l'aide pour la migration.</li>
</ul>
</li>
<li>Après l'ouverte de l'environnement PROD:
<ul>
<li>Les responsables qui créent un nouvel espace de travail dans l'environnement PROD peuvent commencer à migrer leurs ressources de l'environnement POC vers l'environnement PROD.</li>
<li>Lorsque les responsables ont créé un nouvel espace de travail dans l'environnement PROD, vous pouvez migrer vos ressources en utilisant les guides de migration fournis.</li>
<li>Si vous n'utilisez pas l'environnement PROD, vous pouvez retirer vos ressources de l'environnement POC en suivant les instructions de retrait fournies.</li>
</ul>
</li>
<li><strong>28 février 2025:</strong> Date limite pour l'experimentation et analyse dans l'environnement POC.</li>
<li><strong>1 mars 2025:</strong> Tous les utilisateurs seront convertis aux utilisateurs invitée dans ses espaces de travail POC.</li>
<li><strong>31 mars 2025:</strong> Date limite pour la migration ou le retrait de vos ressources de l'environnement POC.</li>
<li><strong>1 avril 2025:</strong> L'environnement POC sera mis hors service.</li>
</ul>
<h2 id="questions-frequemment-posees" tabindex="-1"><a class="header-anchor" href="#questions-frequemment-posees"><span>Questions fréquemment posées</span></a></h2>
<h3 id="quelle-est-la-difference-entre-la-migration-et-le-retrait" tabindex="-1"><a class="header-anchor" href="#quelle-est-la-difference-entre-la-migration-et-le-retrait"><span>Quelle est la différence entre la migration et le retrait?</span></a></h3>
<ul>
<li><strong>Migration:</strong> Déplacement de vos ressources de l'environnement POC vers l'environnement PROD.</li>
<li><strong>Retrait:</strong> Retirer vos ressources de l'environnement POC sans les migrer vers l'environnement PROD.</li>
</ul>
<h3 id="pourquoi-dois-je-migrer-mes-ressources" tabindex="-1"><a class="header-anchor" href="#pourquoi-dois-je-migrer-mes-ressources"><span>Pourquoi dois-je migrer mes ressources?</span></a></h3>
<p>La migration de vos ressources de l'environnement POC vers l'environnement PROD garantit que vos données et applications sont préservées et accessibles à long terme. Elle vous permet également de profiter des fonctionnalités et des capacités améliorées de l'environnement PROD.</p>
<h3 id="qui-peut-migrer-des-ressources" tabindex="-1"><a class="header-anchor" href="#qui-peut-migrer-des-ressources"><span>Qui peut migrer des ressources?</span></a></h3>
<ul>
<li><strong>Migration des ressources:</strong>
<ul>
<li>Ajouter des données: Les collaborateurs, administrateurs, et responsables peuvent ajouter des données aux espaces de travail dans PROD.</li>
<li>Provisionner des ressources: Les responsables peuvent provisionner des ressources dans PROD.</li>
</ul>
</li>
<li><strong>Retrait des ressources:</strong> Tous les utilisateurs de l'environnement POC, y inclus les invités.</li>
</ul>
<h3 id="quelles-ressources-peuvent-etre-migrees" tabindex="-1"><a class="header-anchor" href="#quelles-ressources-peuvent-etre-migrees"><span>Quelles ressources peuvent être migrées?</span></a></h3>
<p>Vous pouvez migrer toutes les ressources provisionnées dans l'environnement POC, y compris les bases de données, le stockage, les applications Web et les espaces de travail Databricks.</p>
<h3 id="que-se-passe-t-il-si-je-ne-migre-pas-mes-ressources" tabindex="-1"><a class="header-anchor" href="#que-se-passe-t-il-si-je-ne-migre-pas-mes-ressources"><span>Que se passe-t-il si je ne migre pas mes ressources?</span></a></h3>
<p>Si vous ne migrez pas vos ressources avant la date limite, elles seront perdues lorsque l'environnement POC sera mis hors service. Veillez à migrer vos ressources avant la date limite afin d'éviter toute perte de données.</p>
<h3 id="que-se-passe-t-il-si-je-n-ai-pas-un-nouvel-espace-de-travail-dans-l-environnement-prod-avant-le-31-mars-2025" tabindex="-1"><a class="header-anchor" href="#que-se-passe-t-il-si-je-n-ai-pas-un-nouvel-espace-de-travail-dans-l-environnement-prod-avant-le-31-mars-2025"><span>Que se passe-t-il si je n'ai pas un nouvel espace de travail dans l'environnement PROD avant le 31 mars 2025?</span></a></h3>
<p>Si vous voulez créer un nouvel espace de travail dans l'environnement PROD, on vous encourage fortement de commencer le processus de migration dès que possible pour éviter toute perte de données ou interromption. Si le provisionnement de l'espace de travail PROD est en cours mais n'est pas terminé avant la date limite, veuillez contacter l'équipe de support du Datahub scientifique fédéral pour obtenir de l'aide.</p>
<h3 id="comment-puis-je-obtenir-de-l-aide-pour-la-migration" tabindex="-1"><a class="header-anchor" href="#comment-puis-je-obtenir-de-l-aide-pour-la-migration"><span>Comment puis-je obtenir de l'aide pour la migration?</span></a></h3>
<p>Si vous rencontrez des problèmes au cours du processus de migration, veuillez contacter l'équipe de support du Datahub scientifique fédéral en soumettant une demande de support. Notre équipe se fera un plaisir de vous aider à migrer ou à transférer vos ressources.</p>
</div></template>


