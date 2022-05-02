import '../css/about.css'; 

function About(){
    return(
        <div id="aboutbox">
            <div id="aboutcontent">
                <div id="aboutimg"><img src="/media/doris.png" alt="doris"/></div>
                <div id="aboutbio">
                    <div>
                        <h1 id="abouttitle">About Me</h1>
                        <div id="aboutext">
                            <p >Hi! Nice to meet you. I am a Full Stack Developer based in NYC. I focus on building web applications. I love learning about new technologies and creating innovative solutions. When I am not coding I love to make art with all types of mediums. </p>
                        </div>
                    </div>
                    <div id="tech">
                        <h1 id="techtitle">Technologies</h1>
                        <div id="techlist">
                            <div className="techimg"><p>> HTML</p></div>
                            <div className="techimg"><p>> CSS</p></div>
                            <div className="techimg"><p>> JavaScript</p></div>
                            <div className="techimg"><p>> Ruby</p></div>
                            <div className="techimg"><p>> Ruby on Rails</p></div>
                            <div className="techimg"><p>> Sinatra</p></div>
                        </div>
                    </div>

                    <div id="aboutbottomcontent">
                    <h1 id="connecttitle">Socials</h1>
                    <div id="connectlist"> 
                        <a href="https://www.linkedin.com/in/dorisvmorales/" className="connecttab"><p>> LinkedIn</p></a>
                        <a href="https://github.com/moralesdoris880" className="connecttab"><p>> Github</p></a>
                        <a href="https://www.instagram.com/doris.draws/" className="connecttab"><p>> Instagram</p></a>
                    </div>
                </div>
                </div>
            </div>

                
        </div>
    );
}

export default About;

/* ID CARD */