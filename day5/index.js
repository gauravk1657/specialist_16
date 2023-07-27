// Step 1: Set up the project
// Create a new React app with TypeScript using Create React App:

// bash
// Copy code
// npx create-react-app country-app --template typescript
// cd country-app
// Step 2: Install Axios
// Install Axios, a popular library used for making HTTP requests, to interact with the reqres.in API and the local db.json file:

// bash
// Copy code
// npm install axios
// Step 3: Create the required components and API functions
// Inside the src folder, create the following components and API functions:

// src/components/LoginForm.tsx: This component will handle the login form.
// src/components/Countries.tsx: This component will render the default country list from the db.json file.
// src/components/CountryInput.tsx: This component will allow adding country data.
// src/components/CountryList.tsx: This component will display the list of countries.
// src/api.ts: This file will contain the API functions for authentication and managing country data.
// Step 4: Implement the components and API functions
// Replace the content of the respective files with the following code:

// src/components/LoginForm.tsx:

// tsx
// Copy code
// import React, { useState } from 'react';

// interface LoginFormProps {
//   handleSubmit: (email: string, password: string) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleSubmit(email, password);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
// src/components/Countries.tsx:

// tsx
// Copy code
// import React from 'react';

// interface Country {
//   id: number;
//   name: string;
//   capital: string;
// }

// interface CountriesProps {
//   countriesData: Country[];
// }

// const Countries: React.FC<CountriesProps> = ({ countriesData }) => {
//   return (
//     <div>
//       <h2>Default Country List</h2>
//       <ul>
//         {countriesData.map((country) => (
//           <li key={country.id}>
//             {country.name} - {country.capital}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Countries;
// src/components/CountryInput.tsx:

// tsx
// Copy code
// import React, { useState } from 'react';

// interface CountryInputProps {
//   addCountryDetails: (country: { id: number; name: string; capital: string }) => void;
// }

// const CountryInput: React.FC<CountryInputProps> = ({ addCountryDetails }) => {
//   const [name, setName] = useState('');
//   const [capital, setCapital] = useState('');

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newCountry = {
//       id: Math.floor(Math.random() * 1000), // Random id for demonstration
//       name,
//       capital,
//     };
//     addCountryDetails(newCountry);
//     setName('');
//     setCapital('');
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         placeholder="Country Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Capital"
//         value={capital}
//         onChange={(e) => setCapital(e.target.value)}
//       />
//       <button type="submit">Add Country</button>
//     </form>
//   );
// };

// export default CountryInput;
// src/components/CountryList.tsx:

// tsx
// Copy code
// import React from 'react';

// interface Country {
//   id: number;
//   name: string;
//   capital: string;
// }

// interface CountryListProps {
//   data: Country[];
// }

// const CountryList: React.FC<CountryListProps> = ({ data }) => {
//   return (
//     <div>
//       <h2>Country List</h2>
//       <ul>
//         {data.map((country) => (
//           <li key={country.id}>
//             {country.name} - {country.capital}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CountryList;
// src/api.ts:

// tsx
// Copy code
// import axios from 'axios';

// const API_BASE_URL = 'https://reqres.in/api';
// const COUNTRY_API_URL = 'http://localhost:3001/countries'; // Assuming the db.json server is running on port 3001

// interface Country {
//   id: number;
//   name: string;
//   capital: string;
// }

// // Function to handle login authentication
// export async function login(email: string, password: string): Promise<boolean> {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
//     return !!response.data.token; // Return true if the response has a token (login successful)
//   } catch (error) {
//     console.error('Error while logging in:', error);
//     return false;
//   }
// }

// // Function to get the default country list from db.json
// export async function getDefaultCountryList(): Promise<Country[]> {
//   try {
//     const response = await axios.get<Country[]>(COUNTRY_API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error while fetching countries:', error);
//     return [];
//   }
// }

// // Function to add a new country to db.json
// export async function addCountry(country: Country): Promise<Country> {
//   try {
//     const response = await axios.post<Country>(COUNTRY_API_URL, country);
//     return response.data;
//   } catch (error) {
//     console.error('Error while adding country:', error);
//     return country;
//   }
// }
// Step 5: Update App.tsx to use the components and API functions
// Replace the content of src/App.tsx with the following code:

// tsx
// Copy code
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import LoginForm from './components/LoginForm';
// import Countries from './components/Countries';
// import CountryInput from './components/CountryInput';
// import CountryList from './components/CountryList';
// import { login, getDefaultCountryList, addCountry } from './api';

// const App: React.FC = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [countriesData, setCountriesData] = useState([]);

//   useEffect(() => {
//     // Fetch the default country list from db.json
//     getDefaultCountryList().then((data) => setCountriesData(data));
//   }, []);

//   const handleLoginSubmit = async (email: string, password: string) => {
//     const success = await login(email, password);
//     setLoggedIn(success);
//   };

//   const handleAddCountry = async (country: { id: number; name: string; capital: string }) => {
//     const newCountry = await addCountry(country);
//     setCountriesData((prevData) => [...prevData, newCountry]);
//   };

//   return (
//     <div className="App">
//       {loggedIn ? (
//         <>
//           <Countries countriesData={countriesData} />
//           <CountryInput addCountryDetails={handleAddCountry} />
//           <CountryList data={countriesData} />
//         </>
//       ) : (
//         <LoginForm handleSubmit={handleLoginSubmit} />
//       )}
//     </div>
//   );
// };

// export default App;
// Step 6: Run the application
// Start the development server:

// bash
// Copy code
// npm start
// Step 7: Open the application
// Visit http://localhost:3000 in your browser. You should see the login form at first. After logging in (you can use any email and password for this demo), you'll see the default country list along with the ability to add new countries.