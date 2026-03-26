import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-CA",
  title: "Federal Science DataHub",
  description: "User documentation for the Federal Science DataHub",

  theme: defaultTheme({
    logo: "https://assets.notification.canada.ca/static/gov-canada-en.svg",
    // navbar: ["/", "/get-started"],
    colorModeSwitch: false,
    colorMode: "light",
    sidebarDepth: 0,
    sidebar: {
      "/en/": [
        "/en/",
        {
          text: "Managing Workspaces and Users",
          collapsible: true,
          children: [
            {
              text: "Getting a workspace (only available on the GC network)",
              link: "https://gcxgce.sharepoint.com/teams/10002160/SitePages/Getting-a-workspace.aspx",
            },
            {
              text: "Estimate costs (only available on the GC network)",
              link: "https://gcxgce.sharepoint.com/teams/10002160/SitePages/Usage-costs-and-examples.aspx",
            },
            "/en/managing-workspaces-and-users/Preregistration",
            "/en/managing-workspaces-and-users/Request-tools",
            "/en/managing-workspaces-and-users/Invite-a-user",
            "/en/managing-workspaces-and-users/Change-a-user-role",
            "/en/managing-workspaces-and-users/CBR-management",
          ],
        },
        {
          text: "Migrating to Production",
          collapsible: true,
          children: [
            "/en/migration/Storage",
            "/en/migration/Databricks",
            "/en/migration/PostgreSQL",
            "/en/migration/WebApp",
          ],
        },
        {
          text: "Storage",
          collapsible: true,
          children: [
            "/en/storage/Datahub-AzureStorage.md",
            "/en/storage/Import-AWS-Storage.md",
            "/en/storage/Import-Azure-Storage.md",
            "/en/storage/Import-GCP-Storage.md",
            "/en/storage/Import-Storage.md",
            "/en/storage/Use-AzCopy.md",
          ],
        },
        {
          text: "Databricks",
          collapsible: true,
          children: [
            "/en/databricks/Databricks-101",
            "/en/databricks/Cluster-Policies",
            "/en/databricks/Git-Integration",
            "/en/databricks/vscode_extension",
            "/en/databricks/Conda-Packages",
            "/en/databricks/Connecting-Google-API",
            "/en/databricks/Dashboarding",
            "/en/databricks/Dashboarding-Tool-Comparison",
            "/en/databricks/Experiments-Automl",
            "/en/databricks/Workflows",
            "/en/databricks/Databricks-FAQ",
          ],
        },
        {
          text: "PostgreSQL",
          collapsible: true,
          children: [
            "/en/postgresql/Postgres",
            "/en/postgresql/Postgres-Add-User",
            "/en/postgresql/psql-databricks-comparison",
          ],
        },
        {
          text: "Web Applications",
          collapsible: true,
          children: ["/en/apps/WebApps"],
        },
        {
          text: "User Guidance",
          collapsible: true,
          children: [
            "/en/guidance/Account-Management-and-Access-control-of-workspaces",
            "/en/guidance/Backup-and-Recovery",
            "/en/guidance/Github-and-code-repo-management.md",
            "/en/guidance/Incident-Detection-and-Response.md",
            "/en/guidance/Monitor-Usage.md",
            "/en/guidance/Monitoring-and-Auditing-a-Workspace.md",
            "/en/guidance/Source-code.md",
            "/en/guidance/File-Restrictions.md",
          ],
        },
        "/en/Terms-And-Conditions",
      ],
      "/fr/": [
        "/fr/",
        {
          text: "Gérer les espaces de travail et les utilisateurs",
          collapsible: true,
          children: [
            {
              text: "Obtenir un espace de travail (uniquement disponible sur le réseau GC)",
              link: "https://gcxgce.sharepoint.com/teams/10002160/SitePages/fr/Getting-a-workspace.aspx",
            },
            {
              text: "Estimer les coûts (uniquement disponible sur le réseau GC)",
              link: "https://gcxgce.sharepoint.com/teams/10002160/SitePages/fr/Usage-costs-and-examples.aspx",
            },
            "/fr/gerer-espaces-et-utilisateurs/Preregistration",
            "/fr/gerer-espaces-et-utilisateurs/Demande-outils",
            "/fr/gerer-espaces-et-utilisateurs/Invitez-un-utilisateur",
            "/fr/gerer-espaces-et-utilisateurs/Change-les-roles-dutilisateur",
            "/fr/gerer-espaces-et-utilisateurs/Gestion-BOI",
          ],
        },
        {
          text: "Migration vers la production",
          link: "/fr/migration",
          collapsible: true,
          children: [
            "/fr/migration/Stockage",
            "/fr/migration/Databricks",
            "/fr/migration/PostgreSQL",
            "/fr/migration/AppWeb",
          ],
        },
        {
          text: "Stockage",
          link: "/fr/stockage",
          collapsible: true,
          children: [
            "/fr/stockage/Datahub-AzureStorage",
            "/fr/stockage/Importer-le-stockage",
            "/fr/stockage/Importer-le-stockage-AWS",
            "/fr/stockage/Importer-Azure-Storage",
            "/fr/stockage/Importer-le-stockage-GCP",
            "/fr/stockage/Utiliser-AzCopy",
          ],
        },
        {
          text: "Databricks",
          link: "/fr/databricks",
          collapsible: true,
          children: [
            "/fr/databricks/Databricks-101",
            "/fr/databricks/Politiques-des-clusters",
            "/fr/databricks/Intégration-de-Git",
            "/fr/databricks/extension-vscode",
            "/fr/databricks/Paquets-Conda",
            "/fr/databricks/Connexion-à-l'API-Google",
            "/fr/databricks/Tableau-de-bord",
            "/fr/databricks/Comparaison-des-outils-de-tableau-de-bord",
            "/fr/databricks/Expériences-Automl",
            "/fr/databricks/Flux-de-travail",
            "/fr/databricks/FAQ-Databricks",
          ],
        },
        {
          text: "PostgreSQL",
          link: "/fr/postgresql",
          collapsible: true,
          children: [
            "/fr/postgresql/Postgres",
            "/fr/postgresql/Postgres-Ajouter-Utilisateur",
            "/fr/postgresql/Comparaison-des-bases-de-données-psql",
          ],
        },
        {
          text: "Applications Web",
          link: "/fr/apps",
          collapsible: true,
          children: ["/fr/apps/WebApps"],
        },
        {
          text: "Conseils aux utilisateurs",
          link: "/fr/conseils",
          collapsible: true,
          children: [
            "/fr/conseils/Code-source",
            "/fr/conseils/Controle-dusage",
            "/fr/conseils/Controle-et-audit-dun-espace-de-travail",
            "/fr/conseils/Detection-et-response-aux-incidents",
            "/fr/conseils/Gestion-des-comptes-et-controle-de-lacces-aux-espaces-de-travail",
            "/fr/conseils/Github-et-gestion-des-repos",
            "/fr/conseils/Sauvegarde-et-recuperation",
            "/fr/conseils/Fichiers-restreints",
          ],
        },
        "/fr/Conditions-generales",
      ],
    },
  }),

  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://notification.canada.ca/static/images/favicon.ico",
      },
    ],
  ],

  locales: {
    "/en/": {
      lang: "English",
      selectLanguageName: "English",
      title: "Federal Science DataHub",
      logo: "https://assets.notification.canada.ca/static/gov-canada-en.svg",
      description: "User documentation for the Federal Science DataHub",
    },
    "/fr/": {
      lang: "Français",
      selectLanguageName: "Français",
      title: "Plateforme fédérale de données scientifiques",
      logo: "https://assets.notification.canada.ca/static/gov-canada-fr.svg",
      description:
        "Documentation utilisateur pour la Plateforme fédérale de données scientifiques",
    },
  },

  bundler: viteBundler(),
});
