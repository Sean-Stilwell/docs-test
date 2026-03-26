<template><div><h1 id="configuration-du-compte" tabindex="-1"><a class="header-anchor" href="#configuration-du-compte"><span>Configuration du compte</span></a></h1>
<p>Ces instructions vous guidera dans le de configuration de votre compte pour la Plateforme fédérale de données scientifiques (PFDS).</p>
<blockquote>
<p><strong>Remarque :</strong> Pour créer un compte, vous devez soit créer un espace de travail en utilisant le <a href="https://hosting-services-hebergement.canada.ca/s/gc-cloud-fa-catalogue" target="_blank" rel="noopener noreferrer">Portail des services d'hébergement du GC</a>, soit être ajouté à un espace de travail existant par un administrateur d'espace de travail.</p>
</blockquote>
<h2 id="connexion-au-departement" tabindex="-1"><a class="header-anchor" href="#connexion-au-departement"><span>Connexion au département</span></a></h2>
<p><img src="@source/fr/gerer-espaces-et-utilisateurs/img/login-page.png" alt="Page de connexion">
*Vue de la page de connexion</p>
<ol>
<li>
<p>Si vous avez un compte PFDS, cliquez sur le bouton <strong>Login</strong> pour être redirigé vers la page de connexion de votre département.</p>
<blockquote>
<p>Note : Si vous n'êtes pas inscrit, vous pouvez cliquer sur le lien <strong>Inscrire à la place</strong> pour accéder à la page d'inscription.</p>
</blockquote>
</li>
<li>
<p>Sélectionnez votre compte du gouvernement du Canada pour vous connecter.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/pick-an-account.png" alt="Choisissez un compte"></p>
</li>
<li>
<p>Lisez et acceptez les permissions requises par l'application DHSF dans notre locataire Azure <code v-pre>163Oxygen</code>.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/permissions.png" alt="Permissions"></p>
</li>
<li>
<p>Attendez l'apparition de l'invite suivante.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/wait-for-prompt.png" alt="Juste un instant"></p>
</li>
<li>
<p>Cliquez sur <code v-pre>Suivant</code>
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/click-next.png" alt="Plus d'informations requises"></p>
</li>
<li>
<p>Saisissez votre adresse électronique du gouvernement du Canada et votre mot de passe M365/Teams.</p>
<blockquote>
<p>Note : Certaines organisations utilisent votre mot de passe réseau comme mot de passe M365/Teams. En cas de doute, veuillez contacter votre service informatique.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/password-entry.png" alt="Saisie du mot de passe"></p>
</blockquote>
</li>
</ol>
<h2 id="authentification-multifactorielle" tabindex="-1"><a class="header-anchor" href="#authentification-multifactorielle"><span>Authentification multifactorielle</span></a></h2>
<h3 id="configurer-l-application-microsoft-authenticator" tabindex="-1"><a class="header-anchor" href="#configurer-l-application-microsoft-authenticator"><span>Configurer l'application Microsoft Authenticator</span></a></h3>
<blockquote>
<p>Note : Si vous n'utilisez pas l'application Microsoft Authenticator, vous pouvez sauter cette section pour configurer d'autres méthodes de vérification de votre compte.</p>
</blockquote>
<ol>
<li>
<p>Cliquez sur &quot;Suivant&quot; pour continuer.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-01.png" alt="AMF Suivant"></p>
</li>
<li>
<p>Cliquez sur &quot;Suivant&quot; pour continuer.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-02.png" alt="AMF Suivant"></p>
</li>
<li>
<p>Scannez le code QR avec l'application Microsoft Authenticator.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-03.png" alt="Code QR de balayage de l'AMF"></p>
</li>
<li>
<p>Vérifier l'invite dans l'application Microsoft Authenticator.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-04.png" alt="Invite de vérification de l'AMF"></p>
</li>
<li>
<p>Cliquez sur &quot;Suivant&quot; pour continuer.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-05.png" alt="AMF Suivant"></p>
</li>
<li>
<p>Cliquez sur &quot;Terminé&quot; pour terminer la configuration de l'authentification multifactorielle.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-06.png" alt="AMF Terminé"></p>
</li>
</ol>
<h3 id="facultatif-configurer-d-autres-methodes-mfa" tabindex="-1"><a class="header-anchor" href="#facultatif-configurer-d-autres-methodes-mfa"><span>(Facultatif) Configurer d'autres méthodes MFA</span></a></h3>
<ol>
<li>
<p>Cliquez sur le lien &quot;Je veux utiliser une autre application d'authentification&quot;.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-01.png" alt="Méthodes alternatives à l'AMF"></p>
</li>
<li>
<p>Sélectionnez la méthode d'AMF que vous préférez et cliquez sur <code v-pre>Suivant</code>.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-08.png" alt="Autres méthodes d'AMF"></p>
</li>
</ol>
<blockquote>
<p>Remarque : cette section traite de la configuration de l'AMF à l'aide d'un numéro de téléphone. Si vous choisissez d'utiliser une autre méthode, veuillez suivre les instructions à l'écran.</p>
</blockquote>
<ol>
<li>
<p>Saisissez un numéro de téléphone mobile (professionnel ou personnel) qui peut recevoir des messages SMS et cliquez sur <code v-pre>Suivant</code>.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-09.png" alt="Entrez le numéro de téléphone"></p>
</li>
<li>
<p>Saisissez le code reçu par SMS au numéro de téléphone indiqué précédemment et cliquez sur &quot;Suivant&quot;.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-10.png" alt="Entrez le code SMS"></p>
</li>
<li>
<p>Confirmez la vérification par SMS et cliquez sur &quot;Suivant&quot;.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-11.png" alt="Confirmer la vérification du SMS"></p>
</li>
<li>
<p>La configuration du MFA par téléphone est terminée. Cliquez sur &quot;Terminé&quot; pour continuer.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/mfa-12.png" alt="Téléphone AMF complet"></p>
</li>
</ol>
<h2 id="s-inscrire" tabindex="-1"><a class="header-anchor" href="#s-inscrire"><span>S'inscrire</span></a></h2>
<p>Une fois que vous avez terminé le processus d'enregistrement et de configuration de l'AMF, vous pouvez vous connecter à l'application DHSF.</p>
<ol>
<li>(Facultatif) Cliquez sur &quot;Oui&quot; pour rester connecté.<br>
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/stay-signed-in.png" alt="Restez connecté"></li>
</ol>
<ol>
<li>
<p>Sélectionnez la langue de votre choix (anglais ou français) dans la liste déroulante et cliquez sur &quot;Sauvegarder&quot;.<br>
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/language-selection.png" alt="Sélection de la langue"></p>
</li>
<li>
<p>Cliquez sur le lien &quot;Termes et conditions&quot; pour consulter les termes et conditions. Cochez la case pour accepter les termes et conditions et cliquez sur &quot;Terminer&quot;.
<img src="@source/fr/gerer-espaces-et-utilisateurs/img/terms-and-conditions.png" alt="Conditions générales"></p>
</li>
</ol>
<blockquote>
<p>Note : Il est important de rappeler que la DHSF n'est approuvée que pour les données <strong>non classifiées</strong>.</p>
</blockquote>
</div></template>


