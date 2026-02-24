import { useState, useEffect } from "react";
import { useDonors } from "./hooks/useDonors";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import DonorPage from "./pages/DonorPage";
import RequestPage from "./pages/RequestPage";

export default function App() {
  const [page, setPage] = useState("home");    
  const [appReady, setAppReady] = useState(false);  
  const [requests, setRequests] = useState([]);   

  const { donors, loading } = useDonors();   

  useEffect(() => {
    const timer = setTimeout(() => setAppReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleRequest(donor) {
    const alreadyRequested = requests.some((r) => r.id === donor.id);
    if (!alreadyRequested) {
      setRequests((prev) => [...prev, donor]);
    }
  }

  if (!appReady) {
    return <LoadingScreen />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      <Navbar page={page} setPage={setPage} />

      {page === "home" && (
        <HomePage
          requestCount={requests.length}
          setPage={setPage}
        />
      )}

      {page === "donor" && (
        <DonorPage
          donors={donors}
          loading={loading}
          requests={requests}
          onRequest={handleRequest}
        />
      )}

      {page === "request" && (
        <RequestPage requests={requests} />
      )}
    </div>
  );
}