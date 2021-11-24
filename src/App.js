import React , { useState, useEffect } from 'react'

import Sidebar from "./Components/Sidebar";
import UserProfile from "./Components/UserProfile";
import Menu from "./Components/Menu";

import { Box } from "@mui/system";


function App() {

  const [Customer, setCustomer] = useState({});

  const [Form, setForm] = useState(1)

  const Next = (data) => {

    setForm(2)
    setCustomer(data)
  
  }

  const Back = () => {
    
    setForm(1)

  }

  return (
    <Box 
      className="App"
      style= {{
        width: '100vw',
        boxSizing: 'border-box',
        display: 'flex',
      }}
    >

      <Sidebar active={Form} Back= {Back} />

      {(() => {
                switch(Form) {
                  case 1 :
                  return <UserProfile Next= {Next} />
                  case 2:
                  return <Menu Profile= {Customer} />
                  default :
                  return 0;
                }
      })()}

    </Box>
  );
}

export default App;
