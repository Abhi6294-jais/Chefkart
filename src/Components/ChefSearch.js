import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChefDirectory = () => {
  
  const dummyChefs = [
    {
      _id: "1",
      name: "Rohan Pal",
      profilepic: "https://via.placeholder.com/64",
      city: "Delhi",
      area: "South Delhi",
      Address: "GK-2, New Delhi",
      starRating: 4.5,
      totalRatings: 120,
      phone: "9876543210",
      experience: 5,
    },
    {
      _id: "2",
      name: "Priya Sharma",
      profilepic: "https://via.placeholder.com/64",
      city: "Mumbai",
      area: "Andheri",
      Address: "Lokhandwala, Andheri West",
      starRating: 4.8,
      totalRatings: 200,
      phone: "9988776655",
      experience: 8,
    },
    {
      _id: "3",
      name: "Amit Verma",
      profilepic: "https://via.placeholder.com/64",
      city: "Bangalore",
      area: "Whitefield",
      Address: "ITPL Road, Whitefield",
      starRating: 4.2,
      totalRatings: 90,
      phone: "9123456780",
      experience: 4,
    },
  ];

  const [chefs, setChefs] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    area: "",
    locality: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API fetch
    setChefs(dummyChefs);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredChefs = chefs.filter((chef) => {
    const matchesGlobalSearch =
      chef.name.toLowerCase().includes(search.toLowerCase()) ||
      chef.phone.includes(search);
    const matchesCity =
      filters.city === "" ||
      chef.city?.toLowerCase().includes(filters.city.toLowerCase());
    const matchesArea =
      filters.area === "" ||
      chef.area?.toLowerCase().includes(filters.area.toLowerCase());
    const matchesLocality =
      filters.locality === "" ||
      chef.Address?.toLowerCase().includes(filters.locality.toLowerCase());

    return matchesGlobalSearch && matchesCity && matchesArea && matchesLocality;
  });

  return (
    <div className="p-4 bg-gray-100 min-h-screen mt-16">
      {/* Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Global Search..."
          className="p-2 border rounded shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="Search by City"
          className="p-2 border rounded shadow-sm"
          value={filters.city}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Search by Area"
          className="p-2 border rounded shadow-sm"
          value={filters.area}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Search by Locality"
          className="p-2 border rounded shadow-sm"
          value={filters.locality}
          onChange={handleFilterChange}
        />
      </div>

      {/* Chefs List */}
      <h1 className="text-xl font-bold mb-4">Trending cooks</h1>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChefs.map((chef, index) => (
          <div
            key={index}
            onClick={() => navigate(`/chef/${chef._id}`)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <img
                src={chef.profilepic}
                alt={chef.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{chef.name}</h3>
                <p className="text-sm text-gray-500">
                  {chef.city}, {chef.area}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                ⭐ {chef.starRating} ({chef.totalRatings} Ratings)
              </p>
              <p className="text-sm">📞 {chef.phone}</p>
              <p className="text-sm">Experience: {chef.experience} years</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDirectory;
