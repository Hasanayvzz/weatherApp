import React from 'react'
import { useApi } from '../../context/apicontext'

function Header() {
    const { cityName, setCityName, cities } = useApi()

    function changeCity(e) {
        setCityName(e.target.value)
        cities.filter((city) => {
            if (city === e.target.value) {
                setCityName(city)
            }
            return city
        })
    }



    return (
        <div className='header'>
            {/* Burda dropdown olacak dropdowndan il seçilecek ve lat longu apicontextteki urle basılacak*/}

            <select className="dropdownBox" value={cityName?.name} onChange={(e) => changeCity(e)}>
                {cities?.map((item) => {

                    return <option value={item?.name}>
                        {item?.name}
                    </option>


                })};

            </select>
            <div className="headerText">{cityName} weather</div>

        </div>
    )
}



export default Header
