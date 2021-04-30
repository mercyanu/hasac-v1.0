import React from 'react';
import './alltime.style.scss';

const AllTime = () => {
    return(
        <div className="card card-info alltime-card">
            <div className="card-header">
                <h3 className="card-title">ALL TIME</h3>
            </div>
            <div className="col card-body alltime-card-body">
                <div className="row body-cont">
                    <div className="title"><span><i className="fa fa-microchip" />&nbsp;Moisture</span>
                    </div>
                    <div className="sub-cont">
                        <div className="hl-cont">
                            <span className="hd">High</span>
                            <span className="vl">30%</span>
                        </div>
                        <div className="hl-cont">
                            <span className="hd">Low</span>
                            <span className="vl">20%</span>
                        </div>

                    </div>
                </div>

                <div className="body-cont">
                <div className="title"><span><i className="fa fa-microchip" />&nbsp;Temp</span>
                    </div>
                    <div className="sub-cont">
                        <div className="hl-cont">
                            <span className="hd">High</span>
                            <span className="vl">30%</span>
                        </div>
                        <div className="hl-cont">
                            <span className="hd">Low</span>
                            <span className="vl">20%</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* /.card-body */}
        </div>
    )
}

export default AllTime;