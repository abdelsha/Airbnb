import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

import Mapped from '../components/Map'

function Search({searchResults}) {
    const router = useRouter();

    const {location, startDate, endDate, noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
    const formattedEndDate = format(new Date(endDate),"dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
        <Head>
        <title>Search</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>



      <main className='flex'>
          <section className='flex-grow pt-14 px-6'>
              <p className='text-xs'>300+ stays - {range} - for {noOfGuests} guests</p>
              <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
              <div className='hidden lg:inline-flex space-x-3 ml-5 mb-5 text-gray-800 whitespace-nowrap'>
                  <p className='button'>Cancellation Flexibility</p>
                  <p className='button'>Type of Place</p>
                  <p className='button'>Price</p>
                  <p className='button'>Rooms and Beds</p>
                  <p className='button'>More filters</p>
              </div>

              <div className='flex flex-col'>
                {searchResults?.map((items)=>(
                    <InfoCard key={`${items.long}${items.lat}`} results={items}/>
                ))}
              </div>

              
          </section>
          <section className='hidden xl:inline-flex min-w-[600px] cursor-pointer'>
              <Mapped searchResults={searchResults}/>
          </section>

      </main>



      <Footer/>
            
        
    </div>
  )
}

export default Search 

export async function getServerSideProps(context) {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then((res)=>res.json());
    return {
        props:{
            searchResults,
        }
    }
}