module.exports = {

    siteMetadata: {
        title: 'Gatsby blog',
    },

    plugins: [
        'gatsby-plugin-sass',

        'gatsby-transformer-remark',

        'gatsby-plugin-netlify-cms',

        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: 'http://<your_ip_address>/graphql'
            }
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `presentations`,
                path: `${__dirname}/presentations/`,
            },
        },

        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'

    ]

}