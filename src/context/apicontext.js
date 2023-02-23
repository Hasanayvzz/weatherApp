import { createContext, useState, useEffect, useContext } from "react";
import cities from "../data/cities";
const ApiContext = createContext()
const key = "e2e67a9a1d20ed709b65a7f8a5eed81f"

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [cityName, setCityName] = useState("Ankara");
    const values = {
        data,
        setData,
        cityName,
        setCityName,
        cities
    }



    useEffect(() => {

        const getCity = (cityName) => {

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${key}`)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((e) => alert("Veri Alınırken bir hata oluştu", console.log(e)))
                .finally(() => console.log(cityName))

        }
        cityName && getCity(cityName)
    }, [cityName])



    return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>
}

export const useApi = () => useContext(ApiContext)