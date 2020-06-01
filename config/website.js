module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "rwoj", // Navigation and Site Title
  titleAlt: "rwoj portfolio", // Title for JSONLD
  description: "rwoj projects portfolio",
  headline: "projects portfolio", // Headline for schema.org JSONLD
  url: "https://...tobedone", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/logos/logo-1024.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/favicon.png", // Used for manifest favicon generation
  shortName: "rwoj", // shortname for manifest. MUST be shorter than 12 characters
  author: "rwoj", // Author for schemaORGJSONLD
  // Manifest and Progress color
  themeColor: "#b710a1",
  backgroundColor: "#350d27",

  twitter: "@rwoj", // Twitter Username
  facebook: "rwoj", // Facebook Site Name
  googleAnalyticsID: "tbd",

  skipNavId: "tbd", // ID for the "Skip to content" a11y feature
};
