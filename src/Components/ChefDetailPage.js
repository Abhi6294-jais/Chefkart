import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const ChefDetails = () => {
  const { id } = useParams();

  // Dummy data (could be same as directory)
  const dummyChefs = [
    {
      _id: "1",
      name: "Rohan Pal",
      profilepic: "https://via.placeholder.com/100",
      city: "Delhi",
      area: "South Delhi",
      locality: "GK-2",
      address: "GK-2, New Delhi",
      starRating: 4.5,
      totalRatings: 120,
      about: "Expert in North Indian and Mughlai cuisines.",
      cuisines: [
        { name: "North Indian", rating: 4.7 },
        { name: "Mughlai", rating: 4.5 },
      ],
      timings: ["Morning 8AM - 12PM", "Evening 6PM - 10PM"],
      experience: 5,
      phone: "9876543210",
      housesServed: 50,
      veg: true,
      nonVeg: true,
    },
    {
      _id: "2",
      name: "Priya Sharma",
      profilepic: "https://via.placeholder.com/100",
      city: "Mumbai",
      area: "Andheri",
      locality: "Lokhandwala",
      address: "Lokhandwala, Andheri West",
      starRating: 4.8,
      totalRatings: 200,
      about: "Specializes in Maharashtrian and Gujarati food.",
      cuisines: [
        { name: "Maharashtrian", rating: 4.8 },
        { name: "Gujarati", rating: 4.6 },
      ],
      timings: ["Afternoon 1PM - 4PM"],
      experience: 8,
      phone: "9988776655",
      housesServed: 80,
      veg: true,
      nonVeg: false,
    },
     {
       _id: "3",
      name: "Amit Verma",
      profilepic: "https://via.placeholder.com/64",
      city: "Bangalore",
      area: "Whitefield",
      address: "ITPL Road, Whitefield",
      starRating: 4.2,
      totalRatings: 90,

     
      about: "Specializes in Maharashtrian and Gujarati food.",
      cuisines: [
        { name: "Maharashtrian", rating: 4.8 },
        { name: "Gujarati", rating: 4.6 },
      ],
      timings: ["Afternoon 1PM - 4PM"],
      phone: "9123456780",
      experience: 4,
      housesServed: 80,
      veg: true,
      nonVeg: false,
    },
  ];

  const [chef, setChef] = useState(null);

  useEffect(() => {
    const found = dummyChefs.find((c) => c._id === id);
    setChef(found);
  }, [id]);

  if (!chef) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={chef.profilepic}
          alt={chef.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{chef.name}</h2>
          <p className="text-sm text-gray-600">
            {chef.city}, {chef.area} - {chef.locality}
          </p>
          <p className="text-sm">
            <span className="font-medium">⭐ {chef.starRating}</span> (
            {chef.totalRatings} Ratings)
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-1">About cook</h3>
        <p className="text-gray-700">{chef.about}</p>
      </div>

      {/* Cuisine Ratings */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Cuisine Ratings</h3>
        <div className="flex gap-4 flex-wrap">
          {chef.cuisines?.map((cuisine, index) => (
            <div
              key={index}
              className="border rounded p-3 flex items-center gap-2 bg-gray-50 shadow-sm"
            >
              <span className="font-semibold">{cuisine.name}</span>
              <span className="text-yellow-500">⭐ {cuisine.rating}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Info */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Available to work in</h3>
        <div className="flex items-center text-sm text-blue-600 gap-2">
          <FaMapMarkerAlt />
          <span>{chef.address}</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">Available at</h3>
        <div className="flex gap-4 text-sm flex-wrap">
          {chef.timings?.map((slot, i) => (
            <div
              key={i}
              className="bg-gray-100 px-4 py-2 rounded flex items-center gap-2"
            >
              <MdAccessTime />
              {slot}
            </div>
          ))}
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <p>
          <strong>Experience:</strong> {chef.experience} years
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <span className="text-blue-700">{chef.phone}</span>
        </p>
        <p>
          <strong>Houses served:</strong> {chef.housesServed}
        </p>
        <p>
          <strong>Food Types:</strong>{" "}
          {chef.veg && "Veg"} {chef.nonVeg && " / Non-Veg"}
        </p>
      </div>
    </div>
  );
};

export default ChefDetails;
