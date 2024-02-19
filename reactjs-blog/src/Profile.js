// Profile.js
import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-info">
        <img
          src="https://placekitten.com/200/200"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <div className="user-details">
          <h2>Username: YourUsername</h2>
          <p>Email: your.email@example.com</p>
          <p>Location: City, Country</p>
          {/* Add more profile information as needed */}
        </div>
      </div>
      <div className="profile-posts">
        <h2>My Posts</h2>
        {/* Display user's posts here */}
        <p>No posts yet.</p>
      </div>
    </div>
  );
}

export default Profile;






// // Profile.js
// import React from "react";
// import "./Profile.css";

// function Profile() {
//   return (
//     <div className="profile-page">
//       <h1>My Profile</h1>
//       <div className="profile-info">
//         <img
//           src="https://placekitten.com/200/200"
//           alt="Profile Avatar"
//           className="profile-avatar"
//         />
//         <div className="user-details">
//           <h2>Username: YourUsername</h2>
//           <p>Email: your.email@example.com</p>
//           <p>Location: City, Country</p>
//           {/* Add more profile information as needed */}
//         </div>
//       </div>
//       <div className="profile-posts">
//         <h2>My Posts</h2>
//         {/* Display user's posts here */}
//         <p>No posts yet.</p>
//       </div>
//     </div>
//   );
// }

// export default Profile;

