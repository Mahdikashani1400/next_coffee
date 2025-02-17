import React from 'react'

export default function Testimonial({ comments: data }) {
    console.log(data);
    return (
        <div class="container-fluid py-5">
            <div class="container">
                <div class="section-title">
                    <h4 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 class="display-4">Our Clients Say</h1>
                </div>
                <div class="owl-carousel testimonial-carousel">
                    {
                        data.map(comment => <div class="testimonial-item">
                            <div class="d-flex align-items-center mb-3">
                                <img class="img-fluid" src={`/img/${comment.userImage}.jpg`} alt="" />
                                <div class="ml-3">
                                    <h4>{comment.username}</h4>
                                    <i>{comment.userRole}</i>
                                </div>
                            </div>
                            <p class="m-0">{comment.body}</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
