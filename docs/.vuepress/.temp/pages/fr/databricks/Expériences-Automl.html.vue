<template><div><h1 id="databricks-mlflow-automl-et-experiences" tabindex="-1"><a class="header-anchor" href="#databricks-mlflow-automl-et-experiences"><span>Databricks MLFlow : AutoML et expériences</span></a></h1>
<p>Databricks MLFlow est une plateforme intégrée pour le cycle de vie de l'apprentissage automatique de bout en bout. Elle offre un lieu centralisé pour suivre les expériences, gérer les modèles et les déployer rapidement en production. MLflow vous permet d'enregistrer et d'interroger des expériences à l'aide des API Python, REST, R et Java. Vous pouvez utiliser MLflow pour enregistrer et interroger des expériences, obtenir des métriques d'exécution, l'historique des métriques et comparer les exécutions. MLflow est une API et une interface utilisateur permettant d'enregistrer les paramètres, les versions de code, les métriques et les fichiers de sortie lors de l'exécution de votre code d'apprentissage automatique et de visualiser ultérieurement les résultats.</p>
<p>MLflow est organisé autour du concept de <strong>runs</strong>, qui sont des exécutions de code de science des données. Les runs sont agrégés en <strong>expériences</strong> où de nombreux runs peuvent faire partie d'une expérience donnée et un serveur MLflow peut héberger de nombreuses expériences. Le composant MLflow est une API et une interface utilisateur pour l'enregistrement des paramètres, des versions de code, des métriques et des fichiers de sortie lors de l'exécution de votre code d'apprentissage automatique et pour la visualisation ultérieure des résultats.</p>
<p>Dans Databricks, il existe deux types d'expériences :</p>
<ul>
<li>Les expériences de l'espace de travail** sont des expériences qui sont créées et gérées dans l'espace de travail Databricks. Vous pouvez utiliser l'interface utilisateur des expériences Databricks pour visualiser et gérer ces expériences. Vous pouvez également utiliser l'API MLflow pour enregistrer les exécutions de ces expériences.</li>
<li>Les expériences de type notebook** sont des expériences créées et gérées dans un notebook. Vous pouvez utiliser l'API MLflow pour enregistrer les exécutions de ces expériences. Vous pouvez également utiliser l'interface utilisateur des expériences Databricks pour visualiser et gérer ces expériences.</li>
</ul>
<h2 id="experiences-d-espace-de-travail-et-automl" tabindex="-1"><a class="header-anchor" href="#experiences-d-espace-de-travail-et-automl"><span><strong>Expériences d'espace de travail et AutoML</strong></span></a></h2>
<p>Les expériences de l'espace de travail tirent parti d'AutoML, une fonctionnalité de Databricks qui entraîne et ajuste automatiquement les modèles d'apprentissage automatique. Cela permet à l'utilisateur de construire des modèles d'apprentissage automatique avec un minimum d'effort et pratiquement sans codage. Cette fonctionnalité est une option prête à l'emploi pour Databricks et offre une variété d'algorithmes à choisir :</p>
<ul>
<li>Classification** : Régression logistique, forêt aléatoire, arbre de décision, XGBoost, LightGBM</li>
<li>Régression** : Arbre de décision, forêt aléatoire, régression linéaire avec descente de gradient stochastique, XGBoost, LightGBM</li>
<li><strong>Prévision</strong> : ARIMA, Prophète</li>
</ul>
<p>En résumé, AutoML entraînera plusieurs modèles en utilisant différents algorithmes et hyperparamètres et sélectionnera le meilleur sur la base de la métrique que vous avez choisie. Il vous fournira également un carnet de notes que vous pourrez utiliser pour déployer votre modèle.</p>
<p>La première étape de l'utilisation d'AutoML consiste à télécharger vos données de formation vers Databricks. Vous pouvez le faire en suivant [ce guide] (https://learn.microsoft.com/fr-ca/azure/databricks/ingestion/add-data/upload-data). Vous aurez également besoin d'un cluster avec un runtime ML.</p>
<p>Une fois que vous avez téléchargé vos données, vous pouvez créer une nouvelle expérience en cliquant sur l'onglet &quot;Expériences&quot; sur le côté gauche de l'écran. Si vous utilisez l'ancienne interface utilisateur, vous devez sélectionner &quot;Machine Learning&quot; dans le menu déroulant en haut à gauche.</p>
<p>Ancienne interface utilisateur :
<img src="@source/fr/databricks/img/Experiments-OldUIExp.png" alt="Alt text"></p>
<p>Nouvelle interface utilisateur :
<img src="@source/fr/databricks/img/Experiments-NewUIExp.png" alt="Alt text"></p>
<p>Une fois que vous avez accédé à la page des expériences, vous pouvez cliquer sur le bouton &quot;Nouvelle expérience&quot; pour créer une nouvelle expérience :</p>
<p><img src="@source/fr/databricks/img/Experiments-CreateExp.png" alt="Texte Alt">
Le menu de création d'expériences s'ouvre alors :</p>
<p><img src="@source/fr/databricks/img/Experiments-ExpMenu.png" alt="Alt text"></p>
<p>À partir de là, vous pouvez configurer votre expérience. Certaines configurations ne sont disponibles que pour certains types de problèmes de ML. Les configurations sont les suivantes :</p>
<ul>
<li><strong>Cluster</strong> : le cluster que vous souhaitez utiliser pour l'expérience, comme mentionné ci-dessus, il doit s'agir d'un cluster avec un runtime ML et il doit être en cours d'exécution.</li>
<li>Type de problème LM** : le type de problème que vous essayez de résoudre, qu'il s'agisse de classification, de régression ou de prévision.</li>
<li><strong>Input training dataset</strong> : l'ensemble de données que vous souhaitez utiliser pour la formation. Comme mentionné ci-dessus, vos données doivent être disponibles dans la base de données SQL de Databricks.</li>
<li>Cible de prédiction** : la colonne/caractéristique que vous essayez de prédire.</li>
<li><strong>Nom de l'expérience</strong> : le nom de votre expérience.</li>
</ul>
<p>Il existe également des configurations avancées dans lesquelles vous pouvez spécifier les éléments suivants :</p>
<p><img src="@source/fr/databricks/img/Experiments-AdvancedConfig.png" alt="Alt text"></p>
<ul>
<li>Métrique d'évaluation** : la métrique que vous souhaitez utiliser pour évaluer votre modèle. Elle sera utilisée pour comparer les modèles et sélectionner le meilleur. La métrique choisie doit être disponible pour le type de problème sélectionné.</li>
<li><strong>Cadres de formation</strong> : les cadres que vous souhaitez utiliser pour la formation. En fonction de votre type de problème, vous pourrez choisir dans la liste ci-dessus. Notez que vous pouvez sélectionner plusieurs cadres à la fois.</li>
<li><strong>Timeout</strong> : la durée maximale que vous souhaitez accorder à l'apprentissage. Si le temps d'apprentissage dépasse cette valeur, l'apprentissage sera interrompu et le meilleur modèle sera sélectionné.</li>
</ul>
<p>Ainsi que d'autres configurations.</p>
<p>Une fois que vous avez configuré votre expérience, vous pouvez cliquer sur le bouton &quot;Démarrer AutoML&quot; pour la créer. Vous accéderez alors à la page d'aperçu, où vous pourrez voir la progression de votre expérience :</p>
<p><img src="@source/fr/databricks/img/Experiments-ExpOverview.png" alt="Alt text"></p>
<p>En haut, vous pouvez voir des informations générales sur votre expérience, un carnet d'exploration des données généré automatiquement et le carnet du meilleur modèle. Vous pouvez également voir le statut de votre expérience et le nombre de modèles qui ont été formés jusqu'à présent. En bas, vous pouvez voir plus d'informations sur les modèles qui ont été formés, y compris le nom du modèle, le cadre utilisé, le temps de formation, la valeur métrique et le statut.</p>
<p>Une fois votre expérience terminée, vos modèles seront triés en fonction de la métrique d'erreur que vous avez choisie, et vous pourrez alors sélectionner le meilleur modèle dans la liste. En cliquant dessus, vous pouvez enregistrer le modèle :</p>
<p><img src="@source/fr/databricks/img/Experiments-RegisterModel.png" alt="Alt text"></p>
<p>Vous serez invité à choisir un nom pour votre modèle, puis vous pourrez cliquer sur <code v-pre>Create</code>.</p>
<p>À partir de ce moment, le modèle que vous avez créé sera accessible à toute personne à laquelle vous aurez donné des autorisations dans l'onglet &quot;Modèles&quot; sur le côté gauche de l'écran :</p>
<p><img src="@source/fr/databricks/img/Experiments-ModelTab.png" alt="Alt text"></p>
<p>En cliquant sur un modèle enregistré, vous pourrez en voir les détails :</p>
<p><img src="@source/fr/databricks/img/Experiments-RegisteredModel.png" alt="Alt text">
A partir de là, vous pouvez définir son stade, comme <code v-pre>Production</code>, <code v-pre>Staging</code> ou <code v-pre>Archivé</code>. Vous pouvez aussi voir l'historique des versions du modèle, qui vous montrera les différentes versions du modèle qui ont été créées. Vous pouvez également voir la lignée du modèle, qui vous montrera les différentes expériences qui ont été utilisées pour créer le modèle.</p>
<p>En outre, vous pouvez cliquer sur &quot;Utiliser le modèle pour l'inférence&quot; pour générer automatiquement des carnets de notes qui peuvent être utilisés pour utiliser le modèle pour inférer ou appliquer automatiquement le modèle à tous les ensembles de données disponibles.</p>
<p>Vous avez réussi à créer un modèle à l'aide d'AutoML et à l'enregistrer en vue d'une utilisation ultérieure, sans écrire de code !</p>
<h2 id="experiences-sur-le-carnet-de-notes" tabindex="-1"><a class="header-anchor" href="#experiences-sur-le-carnet-de-notes"><span><strong>Expériences sur le carnet de notes</strong></span></a></h2>
<p>Les expériences dans un carnet sont des expériences créées et gérées dans un carnet. Elles sont idéales si vous avez besoin d'un code d'apprentissage automatique très spécifique et si vous devez effectuer un prétraitement ou un post-traitement.</p>
<p>``python</p>
<h1 id="mlflow-start-run-cree-une-nouvelle-execution-mlflow-pour-suivre-les-performances-de-ce-modele" tabindex="-1"><a class="header-anchor" href="#mlflow-start-run-cree-une-nouvelle-execution-mlflow-pour-suivre-les-performances-de-ce-modele"><span>mlflow.start_run crée une nouvelle exécution MLflow pour suivre les performances de ce modèle.</span></a></h1>
<h1 id="dans-le-contexte-vous-appelez-mlflow-log-param-pour-garder-une-trace-des-parametres-utilises-et-vous-appelez-mlflow-log-param-pour-garder-une-trace-des-parametres-utilises" tabindex="-1"><a class="header-anchor" href="#dans-le-contexte-vous-appelez-mlflow-log-param-pour-garder-une-trace-des-parametres-utilises-et-vous-appelez-mlflow-log-param-pour-garder-une-trace-des-parametres-utilises"><span>Dans le contexte, vous appelez mlflow.log_param pour garder une trace des paramètres utilisés, et vous appelez mlflow.log_param pour garder une trace des paramètres utilisés.</span></a></h1>
<h1 id="mlflow-log-metric-pour-enregistrer-des-mesures-telles-que-la-precision" tabindex="-1"><a class="header-anchor" href="#mlflow-log-metric-pour-enregistrer-des-mesures-telles-que-la-precision"><span>mlflow.log_metric pour enregistrer des mesures telles que la précision.</span></a></h1>
<p>avec mlflow.start_run(run_name='untuned_random_forest') :
n_estimateurs = 10
model = RandomForestClassifier(n_estimateurs=n_estimateurs, random_state=np.random.RandomState(123))
model.fit(X_train, y_train)</p>
<h1 id="predict-proba-renvoie-prob-negative-prob-positive-donc-decoupez-la-sortie-avec-1" tabindex="-1"><a class="header-anchor" href="#predict-proba-renvoie-prob-negative-prob-positive-donc-decoupez-la-sortie-avec-1"><span>predict_proba renvoie [prob_negative, prob_positive], donc découpez la sortie avec [ :, 1]</span></a></h1>
<p>predictions_test = model.predict_proba(X_test)[ :,1]
auc_score = roc_auc_score(y_test, predictions_test)
mlflow.log_param('n_estimators', n_estimators)</p>
<h1 id="utiliser-l-aire-sous-la-courbe-roc-comme-metrique" tabindex="-1"><a class="header-anchor" href="#utiliser-l-aire-sous-la-courbe-roc-comme-metrique"><span>Utiliser l'aire sous la courbe ROC comme métrique.</span></a></h1>
<p>mlflow.log_metric('auc', auc_score)
wrappedModel = SklearnModelWrapper(model)</p>
<h1 id="enregistrer-le-modele-avec-une-signature-qui-definit-le-schema-des-entrees-et-sorties-du-modele" tabindex="-1"><a class="header-anchor" href="#enregistrer-le-modele-avec-une-signature-qui-definit-le-schema-des-entrees-et-sorties-du-modele"><span>Enregistrer le modèle avec une signature qui définit le schéma des entrées et sorties du modèle.</span></a></h1>
<h1 id="lorsque-le-modele-est-deploye-cette-signature-sera-utilisee-pour-valider-les-entrees" tabindex="-1"><a class="header-anchor" href="#lorsque-le-modele-est-deploye-cette-signature-sera-utilisee-pour-valider-les-entrees"><span>Lorsque le modèle est déployé, cette signature sera utilisée pour valider les entrées.</span></a></h1>
<p>signature = infer_signature(X_train, wrappedModel.predict(None, X_train))</p>
<h1 id="mlflow-contient-des-utilitaires-pour-creer-un-environnement-conda-utilise-pour-servir-les-modeles" tabindex="-1"><a class="header-anchor" href="#mlflow-contient-des-utilitaires-pour-creer-un-environnement-conda-utilise-pour-servir-les-modeles"><span>MLflow contient des utilitaires pour créer un environnement conda utilisé pour servir les modèles.</span></a></h1>
<h1 id="les-dependances-necessaires-sont-ajoutees-a-un-fichier-conda-yaml-qui-est-enregistre-avec-le-modele" tabindex="-1"><a class="header-anchor" href="#les-dependances-necessaires-sont-ajoutees-a-un-fichier-conda-yaml-qui-est-enregistre-avec-le-modele"><span>Les dépendances nécessaires sont ajoutées à un fichier conda.yaml qui est enregistré avec le modèle.</span></a></h1>
<p>conda_env = _mlflow_conda_env(
additional_conda_deps=None,
additional_pip_deps=[&quot;cloudpickle=={}&quot;.format(cloudpickle.<strong>version</strong>), &quot;scikit-learn=={}&quot;.format(sklearn.<strong>version</strong>)],
additional_conda_channels=None,
)
mlflow.pyfunc.log_model(&quot;random_forest_model&quot;, python_model=wrappedModel, conda_env=conda_env, signature=signature)</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"></span>
<span class="line">Voici un exemple d'utilisation d'expériences à partir de carnets Python. Cet exemple est tiré de la [documentation Databricks] (https://learn.microsoft.com/fr-ca/azure/databricks/mlflow/end-to-end-example).</span>
<span class="line"></span>
<span class="line">En ouvrant le contexte `mlflow.start_run`, vous pouvez enregistrer les paramètres et les métriques de l'expérience. Vous pouvez également enregistrer le modèle lui-même ! Cela vous permettra d'enregistrer le modèle pour une utilisation future, comme indiqué dans la section "Expériences du cahier de travail".</span>
<span class="line"></span>
<span class="line">L'exécution de ce code créera automatiquement une expérience pour vous, à laquelle vous pouvez accéder dans l'onglet `Expériences` sur le côté gauche de l'écran, et chaque exécution que vous créez sera ajoutée à cette expérience. Vous pouvez également visualiser toutes les expériences que vous avez créées dans un carnet en cliquant sur l'icône `Expériences MLFlow` sur le côté droit de l'écran :</span>
<span class="line"></span>
<span class="line">![Texte Alt](./img/Experiments-ExpIcon.png)</span>
<span class="line"></span>
<span class="line">À partir de là, vous pouvez visualiser vos séries, les modèles qui leur sont associés, les paramètres enregistrés et les mesures :</span>
<span class="line"></span>
<span class="line">![Alt text](./img/Experiments-LoggedRuns.png)</span>
<span class="line">Une fois encore, n'oubliez pas de consulter le [cahier d'exemples de ML de bout en bout] (https://learn.microsoft.com/fr-ca/azure/databricks/mlflow/end-to-end-example) ainsi que la [documentation de l'API MLFlow] (https://docs.databricks.com/api/azure/workspace/experiments) pour en savoir plus sur la manière d'exécuter des expériences à partir des cahiers d'expériences.</span>
<span class="line"></span>
<span class="line">## En savoir plus</span>
<span class="line"></span>
<span class="line">- [Documentation Databricks MLFlow] (https://learn.microsoft.com/fr-ca/azure/databricks/mlflow/)</span>
<span class="line">- [Exemple d'expérience dans un carnet de notes] (https://learn.microsoft.com/fr-ca/azure/databricks/mlflow/end-to-end-example)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


