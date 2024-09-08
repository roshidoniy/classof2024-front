import MuslimGirl from "/images/muslim-girl-with-book.png"
import Boy from "/images/arafed-cartoon-character-man.png"
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
    return (
        <div className="alumni-page-container">
            <div className="alumni-picture-box">
                <h1>{data?.name}</h1>
                {loading ? null : <img src={data?.isBoy ? Boy : MuslimGirl} alt="" className="alumni-picture" />}
            </div>
            <div className="wishes-for-alumni">
              <Link to="/alumnis">🔙 Go back to List</Link>
                {data?.wishes?.map((message)=>{
                    return (
                    <Message message={message} />
                    )
                })}
                <div className="sodiq-part">
                  <img src="/images/school.jpg" alt="" />
                  <Message message={data?.school?.schoolWish || ""} />
                </div>
                <div className="sodiq-part">
                  <img src="/images/sevinch.webp" alt="" />
                  <Message message={data?.school?.sevinchOpaWish || ""} />
                </div>
            </div>
        </div>
    )
}

export default AlumniPage