import Header from '@/components/modules/Header'
import Menu from '@/components/modules/Menu'
import React from 'react'

export default function products(products) {
    return (
        <>
            <Header />

            <Menu {...products} />
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch("http://localhost:3004/products")
    const data = await res.json()
    console.log(data);
    return {
        props: {
            products: data
        },
        revalidate: 43200

    }
}

