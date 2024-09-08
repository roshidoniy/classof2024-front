import data from "../AlumnisData"
import { Link } from "react-router-dom"
import "../styles/alumnis.css"
import { useEffect, useState } from "react"

const Alumnis = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [alumnisList, setAlumnisList] = useState(data)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredAlumnis = searchTerm
      ? data.filter(value => value.name.toLowerCase().includes(searchTerm.toLowerCase()) || value.id.toString().includes(searchTerm))
      : data;
    setAlumnisList(filteredAlumnis);
  }, [searchTerm])

  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Search Alumni" onChange={handleChange} />
      </div>
      <ul className="alumnis-list-container">
        {alumnisList.map((value) => (
          <li key={value.id}>
            {value.id}: <Link to={`/alumnis/${value.id}`}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Alumnis