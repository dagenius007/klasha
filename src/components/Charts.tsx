import Chart from "react-apexcharts";

interface IChart {
  data : any[],
  height?: string | number,
  options? : any

}

export default ({ data , height = 100 , options }: IChart) => {
  return (
    <Chart
      series={[
        {
          name: "Sales",
          data,
        },
      ]}
      
      options={{
        dataLabels: {
          enabled: false
        },
        chart: {
          height: 350,
          type: "line",
          toolbar: { show: false },
          // dropShadow: {
          //   enabled: true,
          //   top: 0,
          //   left: 0,
          //   blur: 3,
          //   opacity: 0.5,
          //   color: 'yellow'
          // },
        },
      
        stroke: {
          width: 1,
          // curve: "smooth",
          colors: ["#EF2C5A"],
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        xaxis: {
          // show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          colors: ["#EF2C5A"],
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.9,
            stops: [0, 100, 100]
          }
        },
        ...options
      }}
        type="area"
      width={"100%"}
      height={height}
    />
  );
};
