import ProfilePic from './assets/jasmine.png'
import "./index.css"
export default function Card (){
    return(
        <div className="card">
            <img  className="card-img" src={ProfilePic} alt="Jasmine" />
            <h2 className='card-title'>Yasmine</h2>
            <p className='card-text'>Web Full Stack Student</p>

        </div>
    );
}