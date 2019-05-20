module.exports = {
    siteMetadata: {
        title: `Juliana Reis`,
        description: ``,
        author: ``
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Juliana Reis`,
                short_name: `Juliana Reis`,
                start_url: `/`,
                background_color: `#0f7c79`,
                theme_color: `#0f7c79`,
                display: `minimal-ui`
            }
        },
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Open+Sans`, `Dosis\:400,700`]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-56447609-5"
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
