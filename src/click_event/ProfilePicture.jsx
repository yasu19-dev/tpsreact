import jasmine from '../assets/jasmine.png';

function ProfilePicture(){
    const handleClick = (e) => e.target.style.display = 'none';
    return(<img onClick={(e) => handleClick(e) } src={jasmine} alt='ProfilePic'></img>)
}

export default ProfilePicture