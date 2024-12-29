import MuslimGirl from "/assets/muslim-girl-with-book.png"
import Boy from "/assets/arafed-cartoon-character-man.png"
import ssImage from "/assets/school.jpg"
import sevinchImg from "/assets/sevinch.webp"
import '../styles/alumni-page.css'
import Message from "../Components/Message"
import { Link, useParams } from "react-router-dom"
import { getAlumniWishes } from "../services/firebase-service"
import { useEffect, useState } from "react"
import { pageID } from "./pages.types"

interface SchoolWishes {
  schoolWish?: string;
  sevinchOpaWish?: string;
}

interface AlumniData {
  id?: string;
  name?: string;
  isBoy?: boolean;
  wishes?: string[];
  school?: SchoolWishes;
}
const AlumniPage = () => {
    const { id } = useParams<pageID>();
    const [data, setData] = useState<AlumniData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getAlumniWishes(id!);
            setData(result!);
          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [id]);

    if (loading) {
        return (
            <div className="alumni-page-container flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <div className="alumni-page-container">
            <div className="alumni-picture-box">
                <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                    {data?.name}
                </h1>
                <img src={data?.isBoy ? Boy : MuslimGirl} alt="" className="alumni-picture" />
            </div>
            <div className="wishes-for-alumni">
              <Link to="/alumnis">🔙 Go back to List</Link>
                {data?.wishes?.map((message)=>{
                    return (
                    <Message message={message} />
                    )
                })}
                <div className="sodiq-part">
                  <img src={ssImage} alt="Sodiq school" />
                  <Message message={data?.school?.schoolWish || ""} />
                </div>
                <div className="sodiq-part">
                  <img src={sevinchImg} alt="Sevinch" />
                  <Message message={data?.school?.sevinchOpaWish || ""} />
                </div>
            </div>
        </div>
    )
}

export default AlumniPage