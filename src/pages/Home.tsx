import { Link } from 'react-router-dom'
import groupImage from "/images/groupImage.webp"
import "../styles/home.css"
const Home = () => {
    return (
        <div className="container">
            <img src={groupImage} alt="" />
            <div className='schoolName'>
                <a href="https://sodiq.school">Sodiq School</a>
                <p>class of 2024</p>
            </div>
            <Link to="/alumnis" className="button">Go to See Wishes ➡️</Link>
        </div>
    )
}

export default Home