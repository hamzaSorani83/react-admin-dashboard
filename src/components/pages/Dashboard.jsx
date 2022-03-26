import React from 'react'
import statusCards from '../../assests/JsonData/status-card-data.json'
import StatusCard from '../StatusCard/StatusCard';
import ReactApexChart from 'react-apexcharts';
import './Dashboard.css'


const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 109, 100],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20],
    },
  ],
  options: {
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="page-header"> Dashboard </h2>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            {statusCards.map((item, index) => {
              return (
                <div className="col-6" key={index}>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card full-height">
            {
              <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                height="100%"
                type="line"
              />
            }
          </div>
        </div>
        <div className="col-4">test</div>
      </div>
    </div>
  );
}
