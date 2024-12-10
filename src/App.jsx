import React from 'react'
import Layout from './components/Layout/Layout'
import HeroRight from './components/Hero/HeroRight'
import HeroLeft from './components/Hero/HeroLeft'

function App() {
  return (
    <Layout>
      <HeroRight/>
      <HeroLeft/>
    </Layout>     
  );
}

export default App
