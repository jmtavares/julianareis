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
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Juliana Reis`,
                short_name: `Juliana Reis`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#0f7c79`,
                display: `fullscreen`,
                icon: `src/images/logo.svg`
            }
        },
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [{ family: `Nunito` }],
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
        },
        `gatsby-plugin-netlify`
    ]
};
