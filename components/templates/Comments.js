const Comments = ({ data }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4
                        className="text-primary text-uppercase"
                        style={{ letterSpacing: "5px" }}
                    >
                        TESTIMONIAL
                    </h4>
                    <h1 className="display-4">Product Comments</h1>
                </div>
                <div className="row">
                    {data.map(comment => <div className="testimonial-item">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                className="img-fluid"
                                width={100}
                                src={`/img/${comment.userImage}.jpg`}
                                alt=""
                            />
                            <div className="ml-3">
                                <h4>{comment.username}</h4>
                                <p className="text-left mb-0">{comment.userRole}</p>
                            </div>
                        </div>
                        <p className="m-0 mb-4">
                            {comment.body}
                        </p>
                    </div>)}

                </div>
            </div>
        </div>
    );
};

export default Comments;
