import Header from '@/components/modules/Header'
import Service from '@/components/modules/Service'
import React from 'react'

export default function ServicesPage(services) {
    return (
        <>

            <Header />
            <Service {...services} />
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch("http://localhost:3004/services")
    const data = await res.json()
    console.log(data);
    return {
        props: {
            services: data
        },


    }
}

