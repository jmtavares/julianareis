module.exports = {
    siteMetadata: {
        title: `Juliana Reis`,
        description: `Juliana Reis Personal Website`,
        author: ``,
        siteUrl: `https://www.julianareis.me`
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
                display: "swap"
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1024,
                            quality: 100,
                            withWebp: true,
                            linkImagesToOriginal: false
                        }
                    },
                    `gatsby-remark-copy-linked-files`
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: "blog"
            }
        }
    ]
};
