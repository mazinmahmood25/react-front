import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

const DonutChart = () => {
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );
  // const data = {
  //   labels: ["Pickup", "Delivery", "Ship to Home"],
  //   datasets: [
  //     {
  //       data: [2, 3, 5],
  //       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //       hoverBackgroundColor: ["red", "#36A2EB", "#FFCE56"],
  //       borderWidth: 1
  //     }
  //   ],
  //   text: "25%"
  // };
  
  // const options1 = {
  //   responsive: true,
  //   cutoutPercentage: 85,
  //   maintainAspectRatio: false,
  //   legend: {
  //     display: true,
  //     position: "bottom",
  //     usePointStyle: "true",
  //     labels: {
  //       fontSize: 12,
  //       padding: 25,
  //       fontColor: "#6D7278",
  //       fontFamily: "kanit light"
  //     }
  //   }
  // };


  const data = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  }
  const options1 = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  }

    return (
        <>
        <Doughnut
          data={data}
          options={options1}
          height={250}
          // width={800}
        />
      </>
    )
  }


export default DonutChart;