import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from './Context/ChatProvider';

const AppWithUnloadHandler = () => {
  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("userInfo"); 
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>   
      <ChatProvider>
        <AppWithUnloadHandler /> {/* wrapped App */}
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);
