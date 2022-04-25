function Projects(){
    return(
        <div id="projectpage">
            <div className="logobox">
                <h1 className="logo">ドリス</h1>
                <div className="name"><p>doris morales</p></div>
            </div>
            <div id="projectbox"><h1 id="projectstitle">projects</h1></div>
            <div id="projectlist2">
                <div className="project">
                <div className="imgbox"><img src="/media/notfound.png" alt="website img of nycdrinkerssociety" className="projectimg"/></div>
                    <div className="projectinfo">
                        <h1>NYC Drinkers Society</h1>
                        <p>Website made for logging drinks across NYC which has user authentication through BCrypt. Single page application using React, CSS, HTML, JavaScript, Ruby, and Ruby on Rails.</p>
                        <a href="https://github.com/moralesdoris880/nycdrinkers">> Github</a>
                    </div>
                </div>
                <div className="project">
                    <div className="imgbox"><img src="/media/mydailyplanner.png" alt="website img of mydailyplanner" className="projectimg"/></div>
                    <div className="projectinfo">
                        <h1>My Daily Journal</h1>
                        <p>Digitalized Planner/Journal. Currently with a functioning to-do list. Single page application using React, CSS, HTML, JavaScript, Ruby, and Sinatra.</p>
                        <a href="https://github.com/moralesdoris880/phase-3-project">> Github</a>
                    </div>
                </div>
                <div className="project">
                    <div className="imgbox"><img src="/media/momo.png" alt="website img of momo" className="projectimg"/></div>
                    <div className="projectinfo">
                        <h1>Momo</h1>
                        <p>Mock Ecommerce website. Single page application using React, CSS, HTML, JavaScript, and JSON.</p>
                        <a href="https://github.com/moralesdoris880/momo">> Github</a>
                    </div>
                </div>
                <div className="project">
                    <div className="imgbox"><img src="/media/cjfishguide.png" alt="website img cjfishguide" className="projectimg"/></div>
                    <div className="projectinfo">
                        <h1>CJ Fish Guide</h1>
                        <p>Website made using an Animal Crossing New Horizons API to track the fishes within the game. Single page application using CSS, HTML, and JavaScript.</p>
                        <a href="https://github.com/moralesdoris880/cjfishguide">> Github</a>
                        <a href="https://moralesdoris880.github.io/cjfishguide/">> Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;