import '../css/resume.css'; 

function Resume(){
    return(
        <div id="resumebox">
            <div id="resumecontent">
                <a className="btn" href="/media/resume2.pdf" download><p>download</p></a>
                <img id="resume" src="/media/resume.png" alt="resume"/>
            </div>
        </div>
    );
}

export default Resume;