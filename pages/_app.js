import '../styles/index.css'
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import '../styles/login.css';
import '../styles/navbar.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async work here (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds, replace with your actual loading logic
  }, []);

  return (
    // <div>
    //   {loading ? (
    //     // Show a loading screen or splash screen
    //     <div className="splash-screen">
    //       <h1>Loading...</h1>
    //       {/* You can add loading animations or a logo here */}
    //     </div>
    //   ) : (
        // Render your application content once loading is complete
        <Component {...pageProps} />
    //   )}
    // </div>
  );
}

export default MyApp;