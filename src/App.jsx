import React from 'react'
import Layout from './components/Layout/Layout'
import HeroRight from './components/Hero/HeroRight'
import HeroLeft from './components/Hero/HeroLeft'
import ImgME from './components/Hero/ImgME'

function App() {
  return (
    <Layout>
      <HeroLeft/>
      <ImgME/>
      <HeroRight/>
    </Layout>     
  );
}

export default App
