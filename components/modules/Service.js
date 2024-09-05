import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
export default function Service({ services: data }) {
    console.log(data);

    const icons = {
        faTruck: faTruck,
        faCoffee: faCoffee,
        faAward: faAward,
        faTable: faTable,
    }
    return (
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="section-title">
                    <h4 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
                    <h1 class="display-4">Fresh & Organic Beans</h1>
                </div>
                <div class="row">
                    {
                        [...data].map(service => <div class="col-lg-6 mb-5">
                            <div class="row align-items-center">
                                <div class="col-sm-5">
                                    <img class="img-fluid mb-3 mb-sm-0" src={`img/${service.image}.jpg`} alt="" />
                                </div>
                                <div class="col-sm-7">
                                    <h4>
                                        <i className='service-icon'>

                                            <FontAwesomeIcon icon={icons[service.icon]} ></FontAwesomeIcon>
                                        </i>
                                        {service.title}</h4>
                                    <p class="m-0">{service.desc}</p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}
