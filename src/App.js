// import './App.css';
// import MainPage from './Components/mainPage';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <MainPage />
//     </div>
//   );
// }

// export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FitnessGoals from "./Components/Routes/fitnessGoals";
import Settings from "./Components/Routes/settings";
import Workouts from "./Components/Routes/workouts";
import MainPage from "./Components/mainPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<Settings />} />
          <Route path="blogs" element={<FitnessGoals/>} />
          <Route path="contact" element={<Workouts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
