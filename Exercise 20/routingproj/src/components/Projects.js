const Projects = () => {
    return (
        <div className="container-fluid">
            <div className="row" id="projects">
                <h1 className="display-4">Projects</h1>
            </div>
            <div className="row" id="mycards">
                <div className="col-sm-3">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Project Title 1</h5>
                        <p className="card-text"> Praesentium expedita iste veniam non. Deserunt voluptatum quibusdam sunt! Recusandae quod vel sequi, consequatur ipsum voluptatibus cum reiciendis quia, </p>
                        <a href="#" className="btn btn-primary">Launch Git</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Project Title 2</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quod excepturi dolores ad. Excepturi expedita incidunt mollitia architecto sit,</p>
                        <a href="#" className="btn btn-primary">Launch Project</a>
                    </div>
                    </div>
                </div>
                
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Project Title 3</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum aliquid cupiditate totam. Quia unde adipisci voluptates, consectetur earum, </p>
                        <a href="#" className="btn btn-primary">Launch Bitbucket</a>
                        </div>
                    </div>
                    </div>
                
                </div>
        </div>
    );
}

export default Projects;