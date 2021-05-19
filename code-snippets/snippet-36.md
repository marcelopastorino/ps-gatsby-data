import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'

export default ({ data }) => (
    <Layout>
        <Title text='Repositories' />
        <div>
            Repository list
        </div>
    </Layout>
)