import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        setError(error as any);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);

  return [data, loading, error];
}