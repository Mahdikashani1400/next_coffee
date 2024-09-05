
import About from '@/components/modules/About'
import BackTop from '@/components/modules/BackTop'
import Footer from '@/components/modules/Footer'
import Menu from '@/components/modules/Menu'
import Navbar from '@/components/modules/Navbar'
import Reservation from '@/components/modules/ReservationForm'
import Service from '@/components/modules/Service'
import Testimonial from '@/components/modules/Testimonial'
import Slider from '@/components/templates/Slider'
import Offer from '@/components/templates/Offer'
import Link from 'next/link'
import React from 'react'

export default function HomePage({ services,
  products,
  comments }) {
  return (
    <>
      <Slider />
      <About />
      <Service {...services} />
      <Offer />
      <Menu {...products} />
      <Reservation />
      <Testimonial {...comments} />

    </>
  )
}

export async function getStaticProps() {

  const servicesRes = await fetch("http://localhost:3004/services")
  const servicesData = await servicesRes.json()
  const productsRes = await fetch("http://localhost:3004/products")
  const productsData = await productsRes.json()
  const commentsRes = await fetch("http://localhost:3004/comments")
  const commentsData = await commentsRes.json()
  return {
    props: {
      services: { services: servicesData },
      products: { products: productsData },
      comments: { comments: commentsData },
    },

    revalidate: 43200


  }
}

















