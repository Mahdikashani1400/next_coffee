import Comments from '@/components/templates/Comments'
import ProductDetails from '@/components/templates/productDetails'
import React from 'react'

export default function product({ product, comments }) {
    console.log(product);
    return (
        <div>
            <ProductDetails data={product} />
            <Comments data={comments} />

        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3004/products`)
    const data = await res.json()
    const paths = [...data].map(product => ({ params: { id: product.id.toString() } }))
    return {
        paths,
        // fallback: true,
        fallback: "blocking",
    }
}

export async function getStaticProps({ params }) {

    const productRes = await fetch(`http://localhost:3004/products/${params.id}`)
    if (productRes.status === 404) {
        return {
            notFound: true
        }
    }
    else {
        const productData = await productRes.json()

        const commentsRes = await fetch(`http://localhost:3004/comments?productId=${params.id}`)
        const commentsData = await commentsRes.json()

        return {
            props: {
                product: productData,
                comments: commentsData
            },
            revalidate: 43200


        }
    }
}