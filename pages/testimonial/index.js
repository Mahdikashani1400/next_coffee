import Header from '@/components/modules/Header'
import Testimonial from '@/components/modules/Testimonial'
import React from 'react'

export default function TestimonialPage(comments) {
    return (
        <>

            <Header />
            <Testimonial {...comments} />
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch("http://localhost:3004/comments")
    const data = await res.json()
    console.log(data);
    return {
        props: {
            comments: data
        },
        revalidate: 43200

    }
}