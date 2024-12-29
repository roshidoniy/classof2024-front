import data from "../AlumnisData"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Alumnis = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [alumnisList, setAlumnisList] = useState(data)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredAlumnis = searchTerm
      ? data.filter(value => value.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : data;
    setAlumnisList(filteredAlumnis);
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Wishes for <span className="text-orange-500">Sodiq School</span> ClassOf2024
        </h1>
        
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search alumni by name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white shadow-sm"
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumnisList.map((value) => (
            <Link 
              to={`/alumnis/${value.id}`}
              key={value.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {/* You can add an avatar image here if available */}
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xl">
                    {value.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    View Wishes
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {alumnisList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No alumni found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Alumnis