import React from 'react'
import { Link }  from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  const { title, subtitle, keywords } = useSiteMetadata()

  return (
    <Layout title={`Não Encontrado - ${title}`} description={subtitle} keywords={keywords}>
      <Sidebar />
      <Page title="Não Encontrado">
        <p>O Link Solicitado não existe! Sorry =/</p>
        <Link to='/'>Voltar Para Home</Link>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate
