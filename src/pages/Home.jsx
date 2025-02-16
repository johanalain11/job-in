import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Video from '../components/Video';
import Content1 from '../components/content1';
import PopularDomains from '../components/PopularDomains';
import PopularJobs from '../components/PopularJobs';
import Content2 from '../components/content2';
import Avis from '../components/Avis';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='body'>
        <Navbar />
        <Hero />
        <PopularDomains />
        <Video />
        <Content1 />
        <PopularJobs />
        <Content2 />
        <Avis/>
        <Footer />
    </div>
  )
}

export default Home;