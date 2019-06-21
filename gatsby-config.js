module.exports = {
    siteMetadata: {
        title: `Juliana Reis`,
        description: `Juliana Reis Personal Website`,
        author: ``,
        siteUrl: `https://www.julianareis.me`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Juliana Reis`,
                short_name: `Juliana Reis`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#0f7c79`,
                display: `minimal-ui`,
                icon: `src/images/logo.svg`
            }
        },
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Open+Sans`, `Dosis\:400,700`],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
