import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Banner from '../components/Banner'
import Header from '../components/Header'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props  {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}
const Home = ({ 
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries
}: Props) => {

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] 
    lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className="pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner netflixOriginals={netflixOriginals}/>
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    axios(requests.fetchNetflixOriginals),
    axios(requests.fetchTrending),
    axios(requests.fetchTopRated),
    axios(requests.fetchActionMovies),
    axios(requests.fetchComedyMovies),
    axios(requests.fetchHorrorMovies),
    axios(requests.fetchRomanceMovies),
    axios(requests.fetchDocumentaries),
  ])


  return {
    props: {
      netflixOriginals: netflixOriginals.data.results,
      trendingNow: trendingNow.data.results,
      topRated: topRated.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
      documentaries: documentaries.data.results,
    }
  }
}