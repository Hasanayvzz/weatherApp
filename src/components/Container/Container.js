import React from 'react'
import "../../styles/styles.css"
import { useApi } from '../../context/apicontext'
function Container() {

    const { data } = useApi()
    if (!data) {
        return <div> Loading..</div>
    }
    return (

        <div className='dateContainer'>
            <div className='date sof'>

                {data?.list?.map((data, index) => {

                    if (index % 8 === 0 || index === 39) {

                        return (

                            <div className='maping' key={index}>
                                <div>
                                    <h3>
                                        {
                                            new Date(data.dt * 1000).toString().split(" ")[0]
                                        }
                                    </h3>
                                    <img
                                        className="images"
                                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                        alt="weatherIMG"
                                    />
                                    <p >
                                        <span className='dark'>
                                            {data.main.temp_max.toFixed(0)}°{""}
                                        </span>
                                        <span className='soft'>
                                            {data.main.temp_min.toFixed(0)}°
                                        </span>

                                    </p>
                                </div>
                            </div>
                        )
                    }
                    return "";
                })}
            </div>



        </div>
    )
}

export default Container
