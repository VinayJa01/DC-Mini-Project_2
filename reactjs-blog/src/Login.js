import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log(formData)
      // const response = await fetch("http://127.0.0.1:8000/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      //});


      // if (response.ok) {
      //   const { token } = await response.json();

      //   // Store the token in local storage
      //   localStorage.setItem("token", token.access);
      //   console.log(token);
      //   console.log("User logged in successfully!");
      // } else {
      //   const errorData = await response.json();
      //   setError(errorData.message);
      // }

      //await axios.post("http://127.0.0.1:8000/login/", formData).then(data => console.log(data.data))
     
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(formData)

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

console.log(formData);
console.log(raw);

fetch("http://127.0.0.1:8000/login/", requestOptions)
  .then((response) => response.json())
  .then((result) => {console.log(result)
   localStorage.setItem("token", result.token.access)
   localStorage.getItem("token")
   let x = localStorage.getItem("token")
   console.log("token recieved", x);
  })
  .catch((error) => console.error(error));



    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import "./Login.css";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Example: Make a POST request to log in user
//     try {
//       const response = await fetch("https://api.example.com/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Login successful
//         console.log("User logged in successfully!");
//       } else {
//         // Login failed
//         const errorData = await response.json();
//         setError(errorData.message);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError("An unexpected error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page">
//       <h1>Login</h1>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
