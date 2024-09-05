import Header from '@/components/modules/Header'
import Contact from '@/components/templates/Contact'
import React from 'react'

export default function ContactPage() {
    return (
        <>
            <Header />

            <Contact />
        </>
    )
}

export async function getStaticProps() {
    // const res = fetch("http://localhost:3004/messages")
    return {
        props: {

        }
    }
}