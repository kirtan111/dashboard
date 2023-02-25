import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActiveStudents = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
        },
        title: {
            text: "Program wise Active Students",
            align: "left",
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.y} students</b>",
        },
        accessibility: {
            point: {
                valueSuffix: "%",
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>: {point.y} students",
                },
            },
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                name: "Courses",
                colorByPoint: true,
                data: [
                    {
                        name: "IELTS",
                        y: 90,
                    },
                    {
                        name: "PTE",
                        y: 60,
                    },
                    {
                        name: "CELPIP",
                        y: 40,
                    },
                    {
                        name: "CD-IELTS",
                        y: 120,
                        sliced: true,
                        selected: true,
                    },
                    {
                        name: "CAEL",
                        y: 90,
                    },
                    {
                        name: "Flip",
                        y: 80,
                    },
                    {
                        name: "Toefl",
                        y: 75,
                    },
                ],
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
