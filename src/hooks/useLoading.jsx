import { useState, useEffect } from "react";

const useLoading = () => {

  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
    },2500);

  })

  return {loading};
}

export default useLoading
