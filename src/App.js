import { useState, useEffect } from "react";
import Main from "./components";
import Loading from "./components/loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500)
  }, []);
  return (<div>
    {isLoading ? (
      <Loading />
    ) : (
      <Main />
    )}
  </div>);
}