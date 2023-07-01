import React, { useState } from "react";

const DoctorSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here, such as sending a request to the server
    console.log("Search Query:", searchQuery);
    // Reset search query
    setSearchQuery("");
    // Set dummy doctor data (replace with actual data from server)
    setDoctors([
      { id: 1, name: "Dr. John Doe", specialization: "Cardiology" },
      { id: 2, name: "Dr. Jane Smith", specialization: "Dermatology" },
      { id: 3, name: "Dr. Michael Johnson", specialization: "Orthopedics" },
    ]);
  };

  return (
    <div>
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
            <div key={doctor.id}>
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
