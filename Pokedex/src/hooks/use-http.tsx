import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (
      url: string,
      requestConfig: AxiosRequestConfig,
      applyData: (data: any) => void
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = !requestConfig
          ? await axios(url, requestConfig)
          : await axios(url);
        applyData(response.data);
      } catch (error: any) {
        setError("Something went wrong");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
