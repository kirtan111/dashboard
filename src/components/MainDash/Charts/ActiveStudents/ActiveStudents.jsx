import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActiveStudents = () => {
    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: "Target vs Enrolment Chart",
            align: "left",
        },
        xAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            min: 0,
            // title: {
            //     text: "Count trophies",
            // },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: "bold",
                    color:
                        // theme
                        (Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || "gray",
                    textOutline: "none",
                },
            },
        },
        legend: {
            align: "left",
            x: 70,
            verticalAlign: "top",
            y: 70,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || "white",
            borderColor: "#CCC",
            borderWidth: 1,
            shadow: false,
        },
        tooltip: {
            headerFormat: "<b>{point.x}</b><br/>",
            pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
        },
        plotOptions: {
            column: {
                stacking: "normal",
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                name: "BPL",
                data: [3, 5, 1, 13, 15],
            },
            {
                name: "FA Cup",
                data: [14, 8, 8, 12, 2],
            },
            {
                name: "CL",
                data: [0, 2, 6, 3, 12],
            },
        ],
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />{" "}
        </div>
    );
};

export default ActiveStudents;
