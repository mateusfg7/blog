import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Container from '../components/Container/index'
import Header from '../components/Header/index'
import Main from '../components/Main/index'

interface Props {
  avatarUrl: string
}

const Projects: React.FC<Props> = props => {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <Container>
        <Header imageUrl={props.avatarUrl} title="Projects" />
        <Main>
          <h1>Projects</h1>
        </Main>
      </Container>
    </div>
  )
}

export default Projects

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4'
    }
  }
}
