import Link from 'next/link';
import React from 'react'

export default function Menu({ products: data }) {
    console.log(data);
    return (
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="section-title">
                    <h4 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Menu & Pricing</h4>
                    <h1 class="display-4">Competitive Pricing</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <h1 class="mb-5">Hot Coffee</h1>
                        {
                            data.map(product => {
                                if (product.category === 'Hot Coffee') {
                                    return (
                                        <div class="row align-items-center mb-5">
                                            <div class="col-4 col-sm-3">
                                                <img class="w-100 rounded-circle mb-3 mb-sm-0" src={`img/${product.image}.jpg`} alt="" />
                                                <h5 class="menu-price">${product.price}</h5>
                                            </div>
                                            <div class="col-8 col-sm-9">
                                                <Link href={`/products/${product.id}`}><h4>{product.name}</h4></Link>
                                                <p class="m-0">{product.desc}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                    <div class="col-lg-6">
                        <h1 class="mb-5">Cold Coffee</h1>
                        {
                            data.map(product => {
                                if (product.category === 'Cold Coffee') {
                                    return (
                                        <div class="row align-items-center mb-5">
                                            <div class="col-4 col-sm-3">
                                                <img class="w-100 rounded-circle mb-3 mb-sm-0" src={`img/${product.image}.jpg`} alt="" />
                                                <h5 class="menu-price">${product.price}</h5>
                                            </div>
                                            <div class="col-8 col-sm-9">
                                                <Link href={`/products/${product.id}`}><h4>{product.name}</h4></Link>
                                                <p class="m-0">{product.desc}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
