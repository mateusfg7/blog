import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Container from '../components/Container/index'
import Header from '../components/Header/index'
import Main from '../components/Main/index'

interface Props {
  avatarUrl: string
}

const About: React.FC<Props> = props => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Container>
        <Header imageUrl={props.avatarUrl} title="About" />
        <Main>
          <h1>About</h1>
        </Main>
      </Container>
    </div>
  )
}

export default About

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4'
    }
  }
}
