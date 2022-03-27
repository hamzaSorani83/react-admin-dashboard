import React from 'react'
import statusCards from '../../assests/JsonData/status-card-data.json'
import StatusCard from '../StatusCard/StatusCard';
import ReactApexChart from 'react-apexcharts';
import Table from '../Table/Table';
import Badge from '../Badge/Badge';
import { Link } from 'react-router-dom';

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

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840",
    },
  ],
};

const renderCustomerHead = ( item,index ) => {
  return (
  <th key={ index }>
    {item}
  </th>
  )
}

const renderCustomerBody = ( item,index ) => {
  return (
    <tr key={ index } >
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  )
}

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = ( item,index ) => {
  return (
    <th key={ index }>
      { item }
    </th>
  )
}

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);


export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="page-header"> Dashboard </h2>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
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
        <div className="col-lg-6 col-md-12 col-sm-12">
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
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <div className="card ">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={renderCustomerHead}
                bodyData={topCustomers.body}
                renderBody={renderCustomerBody}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 ">
          <div className="card ">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.head}
                renderHead={renderOrderHead}
                bodyData={latestOrders.body}
                renderBody={renderOrderBody}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
