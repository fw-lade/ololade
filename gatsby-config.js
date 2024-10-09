module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ololade",
        short_name: "ololade",
        start_url: "/",
        background_color: "#1b1b1d",
        theme_color: "#1b1b1d",
        display: "minimal-ui",
        icon: "src/images/avi.jpg",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en-US",
      },
    },
  ],
};
