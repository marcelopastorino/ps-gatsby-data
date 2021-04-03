module.exports = {

    siteMetadata: {
        title: 'Gatsby blog',
    },

    plugins: [
        'gatsby-plugin-sass',

        'gatsby-transformer-remark',

        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: 'http://157.230.19.196/graphql'
            }
        },

        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'

    ]

}