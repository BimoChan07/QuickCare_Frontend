import React, { useState } from "react";

const DoctorSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Search Query:", searchQuery);
    // Reset search query
    setSearchQuery("");
    setDoctors([
      { id: 1, name: "Dr. Neha Bajimaya", specialization: "Cardiology" },
      { id: 2, name: "Dr. Nidhi Bajimaya", specialization: "MBBS" },
      { id: 3, name: "Dr. Nischal Khadka", specialization: "Orthopedics" },
    ]);
  };

  return (
    <div className="doctor-page">
      <h2>Doctor Profiles/Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search doctors by name, specialization, etc."
          required
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <h3>{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorSearchPage;
