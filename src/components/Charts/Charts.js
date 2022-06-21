import AreaChart from './AreaChart'
import DonutChart from './DonutChart'
import BarChart from './BarChart'

const Charts = () =>{
    return(
        <div className="container-fluid">
                    <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                    <div className="row">

                        <div className="col-xl-8 col-lg-7">


                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <AreaChart/>
                                    </div>
                                </div>
                            </div>


                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                        <BarChart />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
    
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
    
                                <div className="card-body">
                                    <div className="chart-pie pt-4">
                                        <DonutChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

    )
}
export default Charts