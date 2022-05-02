import { Link } from "react-router-dom";


function Home(){
    return(
        <div id="home">
            <div id="bio">
                <div id="bioimg"><img src="/media/doris.png" alt="drawing of doris"/></div>
                <div id="biocontent">
                    <div id="biotext">
                        <div id="bio2">
                        <p id="bioinfo">Doris is a fullstack developer and multimedia artist based in NYC</p>
                        <button className="biobtn"><Link to="/about" style={{textDecoration: "none"}}>about me</Link></button>
                        </div>
                        <div id="bio3">
                        <p>クリエーティブ </p>
                        </div>
                    </div>
                    <div id="biocityimg"><img src="/media/city.png" alt="landscape drawing"/></div>
                </div>
            </div>

            <h1 id="projecttitle" >Projects</h1>
            <div id="projectlis1">
                <div id="projectlist">
                    <div className="projecttab">
                        <img src="/media/cjfishguide.png" alt="cjfishguide website"/>
                    </div>
                    <div className="projecttab">
                        <img src="/media/momo.png" alt="momo website" />
                    </div>
                    <div className="projecttab">
                        <img src="/media/mydailyplanner.png" alt="mydailyplanner website"/>
                    </div>
                </div>
            </div>
            <button id="seemore"><Link to="/projects">see more</Link></button>
        </div>
    );
}

export default Home;