import React from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  const { title, subtitle, keywords } = useSiteMetadata()

  return (
    <Layout title={`Não Encontrador - ${title}`} description={subtitle} keywords={keywords}>
      <Sidebar />
      <Page title="Não Encontrador">
        <p>O Link Solicitado não existe! Sorry =/</p>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate
