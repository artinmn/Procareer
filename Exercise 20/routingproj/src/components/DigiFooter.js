const DigiFooter = () => {
    return (  
        <div className="container-fluid">
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h5 className=" mb-4">Location</h5>
                        <p className="lead mb-0">
                            27 Jane Street, Jane Doe
                            <br />
                            TS 5000027
                        </p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h5 className="mb-4">Around the Web</h5>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                   
                    <div className="col-lg-4">
                        <h5 className="mb-4">About</h5>
                        <p className="lead mb-0">
                            This is a simple portfolio page of Jane Doe.
                        </p>
                    </div>
                </div>
                </div>
        </footer>
     
            <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Jane Doe 2022</small></div>
        </div>
    </div>
    );
}
 
export default DigiFooter;