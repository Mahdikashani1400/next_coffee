import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false

export default function Navbar() {
    const route = useRouter()
    const [showSubset, setShowSubset] = useState(false)
    function showSubsetHandler() {
        setShowSubset(prevState => !prevState)
    }
    const [searchInput, setSearchInput] = useState(route.query['q'] || "")

    return (
        <>
            <div className="container-fluid p-0 nav-bar">
                <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                    <Link href="/" className="navbar-brand px-lg-4 m-0">
                        <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                    </Link>
                    <div className='border-white search-input-container' >
                        <input type='text' className='input-group-text search-input' placeholder='Search ...' value={searchInput} onChange={(e) => {
                            setSearchInput(e.target.value)
                        }} />
                        <Link href={
                            {
                                pathname: "search",
                                query: "q=" + searchInput
                            }
                        } style={{ color: "#fff", display: "inline-block", marginBottom: "5px" }}
                        >
                            <FontAwesomeIcon icon={faSearch} fontSize={"17px"} ></FontAwesomeIcon>
                        </Link>
                    </div>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto p-4">
                            <Link href="/" className={`nav-item nav-link ${route.asPath === "/" ? "active" : ""}`}>Home</Link>
                            <Link href="/about" className={`nav-item nav-link ${route.asPath === "/about" ? "active" : ""}`}>About</Link>
                            <Link href="/services" className={`nav-item nav-link ${route.asPath === "/services" ? "active" : ""}`}>Services</Link>
                            <Link href="/products" className={`nav-item nav-link ${route.asPath === "/menu" ? "active" : ""}`}>Menu</Link>
                            <div className="nav-item dropdown">
                                <Link href="" className="nav-link dropdown-toggle" data-toggle="dropdown" onClick={showSubsetHandler}>Pages</Link>
                                <div className={`dropdown-menu text-capitalize ${showSubset ? "show" : ""}`}>
                                    <Link href="/reservation" className="dropdown-item" onClick={showSubsetHandler}>Reservation</Link>
                                    <Link href="/testimonial" className="dropdown-item" onClick={showSubsetHandler}>Testimonial</Link>
                                </div>
                            </div>
                            <Link href="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
