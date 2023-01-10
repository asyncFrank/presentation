import { useState, useEffect } from "react";

const defaultCoords = [-18.5794, -46.5184]; //patos de minas - mg

export default function useGetLocation() {
  const [coords, setCoords] = useState<number[] | null>(null);

  useEffect(() => {
    function onSuccess(position: GeolocationPosition) {
      setCoords([position.coords.latitude, position.coords.longitude]);
    }
    function onError() {
      console.error("Não encontrou!!!");
      setCoords(defaultCoords);
    }

    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } catch (error) {
      setCoords(defaultCoords);
    }
  }, []);
  return { coords: coords };
}
