import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { fplservice } from "./services/fplService";





const App: React.FC = () => {
  const [userData, setUserData] = useState(null);

  // Get data when component mounts
  useEffect(() => {
    addData();
  }, []);

  const addData = async () => {
    let res = await fplservice.getMyFplAPI();

    if (res) setUserData(res);
  };

  console.log(userData)


  return (
     <p>{JSON.stringify(userData)}</p>

  );
};

export default App;
