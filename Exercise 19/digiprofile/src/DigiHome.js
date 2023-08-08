const DigiHome = () => {
    return (  
       <div class="container-fluid" >
            <div class="row" id="about">

                <div class="col-sm-8">
                    <h1 class="display-4">Jane Doe</h1>
                    <p class="lead"><b> janedoe@geemail.com</b></p>
                    <hr class="my-4"/>
                    <p><b> Career Objective </b> <br/>Seeking a responsible career opportunity in the field of Computer Science where I can utilize my logical and technical skills towards personal and professional development </p>
                    <p class="lead">
                     
                    </p>
                </div>
                <div class="col-sm-3">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2 proimage" src="img/profile.jpg" alt="..." />
                </div>
            </div>

          <div class="row" id="acads">

            <div class="col-sm-8">
                <h1 class="display-4">Academics</h1>
                <table id="score" class="table table-striped table-bordered">
                    <tr>
                        <th>
                            Course Details                
                            </th>
                        <th>
                            Institution
                        </th>
                        <th>
                            University/Board
                        </th>
                        <th>
                            Year of passing
                            </th>
                        <th>
                            CGPA
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Bachelor of Technology
                            (Computer Science)              
                            </td>
                       
                        <td>
                            Keshav Memorial
            Institute of Technology
               
                        </td>
                        <td>
                            JNTUH
                        </td>
                        <td>
                            2021
                            </td>
                        <td>
                            7.32
                        </td>
                    </tr>  
                   
                    <tr>
                        <td>
                            Intermediate-MPC              
                            </td>
                        <td>
                            Narayana Junior College, TS
               
                        </td>
                        <td>
                            JNTUH
                        </td>
                        <td>
                            2017
                            </td>
                        <td>
                            93.9%
                        </td>
                    </tr>  
                 
                    <tr>
                        <td>
                            School of Secondary
                            Certificate              
                            </td>
                        <td>
                            Vijaya Ratna Concept School  
                        </td>
                        <td>
                            SSC
                        </td>
                        <td>
                            2015
                            </td>
                        <td>
                            9.5
                        </td>
                    </tr>  
                </table>    
            </div>
            </div>
           
            <div class="row" id="techskills">
                <div class="col-sm-8">
                    <h1 class="display-4">TechSkills</h1>
                    <h4> Programming Languages</h4>
                    <ul>
                        <li>C</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>    
                    <h4> Databases</h4>
                    <ul>
                        <li>MySQL</li>
                    </ul>
                    <h4>Web Technologies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                        <li>Node</li>
                        <li>ReactJS</li>
                        <li>PHP</li>
                    </ul>
               
                </div>
            </div>

                <div class="row" id="projects">
                   
                    <h1 class="display-4"> Projects</h1>
                    </div>
                    <div class="row" id="mycards">
                        <div class="col-sm-3">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Project Title 1</h5>
                              <p class="card-text"> Praesentium expedita iste veniam non. Deserunt voluptatum quibusdam sunt! Recusandae quod vel sequi, consequatur ipsum voluptatibus cum reiciendis quia, </p>
                              <a href="#" class="btn btn-primary">Launch Git</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Project Title 2</h5>
                              <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quod excepturi dolores ad. Excepturi expedita incidunt mollitia architecto sit,</p>
                              <a href="#" class="btn btn-primary">Launch Project</a>
                            </div>
                          </div>
                        </div>
                       
                        <div class="col-sm-3">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">Project Title 3</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum aliquid cupiditate totam. Quia unde adipisci voluptates, consectetur earum, </p>
                                <a href="#" class="btn btn-primary">Launch Bitbucket</a>
                              </div>
                            </div>
                          </div>
                         
                        </div>

                    <div class="row" id="achieves">

                    <div class="col-sm-8">
                        <h1 class="display-4">Achievements</h1>
                        <ol class="mt-4 px-5">
                            <li> Certified  in Neural Networks and Deep Learning by Coursera </li>
                            <li> Certified in Ethical Hacking course by NPTEL </li>
                            <li> Participated in Scratch Programming Event in KMIT</li>
                            <li> Participated in street cause </li>
                        </ol>                      
                    </div>
                    </div>
                    
                    <div class="row" id="contact">
                        <div class="col-sm-8">
                            <h1 class="display-4">Contact Me</h1>
                            <div id="conform">  
                                <form action="mailto:janedoe@geemail.com" method="POST"
                                enctype="text/plain" name="EmailForm">
                                <b> Name: </b> <br/> <input type="text" size="40" name="ContactName"/> <br/>
                                <b>  Message: </b>   <br/> <textarea name="ContactComment" rows="6" cols="40"></textarea><br/>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div> 
                    </div>
        </div>
    );
}
 
export default DigiHome;
