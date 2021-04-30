import React from 'react';
import './forecast.style.scss';

const Forecast = () => {
    return (
        <div className="card card-info forecast-card">
            <div className="card-header">
                <h3 className="card-title">FORCASTS</h3>
            </div>
            <div className="card-body forecast-card-body">
                <div className="body-cont">
                    <div className="title"><span><i className="fa fa-microchip" />&nbsp;Tomorrow</span>
                    </div>
                    <p className="value">30%</p>
                    <p className="sub-title">soil <br /> moisture</p>

                </div>

                <div className="body-cont">
                    <div className="title"><span><i className="fa fa-microchip" />&nbsp;Tomorrow</span>
                    </div>
                    <p className="value">20%</p>
                    <p className="sub-title">soil <br />temperature</p>
                </div>
            </div>
            {/* /.card-body */}
        </div>
    )
}

export default Forecast;