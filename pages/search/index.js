import Header from '@/components/modules/Header'
import Menu from '@/components/modules/Menu'
import { useRouter } from 'next/router'
import React from 'react'

export default function Search(products) {



    return (
        <>
            <Header />

            <Menu {...products} />
        </>
    )
}

export async function getServerSideProps({ query }) {
    console.log(query);

    const res = await fetch("http://localhost:3004/products")
    const data = await res.json()
    const productsFiltered = [...data].filter(product => product.name.toLocaleLowerCase().trim().includes(query['q'].toLocaleLowerCase()) || product.category.toLocaleLowerCase().trim().includes(query['q'].toLocaleLowerCase()))
    return {
        props: {
            products: productsFiltered
        },

    }
}

