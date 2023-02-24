import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import "highcharts/modules/accessibility";
// import dumbell from "highcharts/modules/dumbbell";
// import highchartsLollipop from "highcharts/modules/lollipop";
// Highcharts(highchartsLollipop);
const TargetVSEnrolment = () => {
    // const options = {
    //     chart: {
    //         type: "lollipop",
    //         inverted: true,
    //     },

    //     legend: {
    //         enabled: false,
    //     },

    //     subtitle: {
    //         text: "2018",
    //     },

    //     title: {
    //         text: "Top 10 Countries by Population",
    //     },

    //     tooltip: {
    //         shared: true,
    //     },

    //     xAxis: {
    //         type: "category",
    //     },

    //     yAxis: {
    //         title: {
    //             text: "Population",
    //         },
    //     },

    //     series: [
    //         {
    //             name: "Population",
    //             data: [
    //                 {
    //                     name: "China",
    //                     y: 1427647786,
    //                 },
    //                 {
    //                     name: "India",
    //                     y: 1352642280,
    //                 },
    //                 {
    //                     name: "United States",
    //                     y: 327096265,
    //                 },
    //                 {
    //                     name: "Indonesia",
    //                     y: 267670543,
    //                 },
    //                 {
    //                     name: "Pakistan",
    //                     y: 212228286,
    //                 },
    //                 {
    //                     name: "Brazil",
    //                     y: 209469323,
    //                 },
    //                 {
    //                     name: "Nigeria",
    //                     y: 195874683,
    //                 },
    //                 {
    //                     name: "Bangladesh",
    //                     y: 161376708,
    //                 },
    //                 {
    //                     name: "Russia",
    //                     y: 145734038,
    //                 },
    //                 {
    //                     name: "Mexico",
    //                     y: 126190788,
    //                 },
    //             ],
    //         },
    //     ],
    // };
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
        },
        title: {
            text: "Browser market shares in May, 2020",
            align: "left",
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
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
                    format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                },
            },
        },
        series: [
            {
                name: "Brands",
                colorByPoint: true,
                data: [
                    {
                        name: "Chrome",
                        y: 70.67,
                        sliced: true,
                        selected: true,
                    },
                    {
                        name: "Edge",
                        y: 14.77,
                    },
                    {
                        name: "Firefox",
                        y: 4.86,
                    },
                    {
                        name: "Safari",
                        y: 2.63,
                    },
                    {
                        name: "Internet Explorer",
                        y: 1.53,
                    },
                    {
                        name: "Opera",
                        y: 1.4,
                    },
                    {
                        name: "Sogou Explorer",
                        y: 0.84,
                    },
                    {
                        name: "QQ",
                        y: 0.51,
                    },
                    {
                        name: "Other",
                        y: 2.6,
                    },
                ],
            },
        ],
    };
    return (
        <div>
            <br />
            <HighchartsReact highcharts={Highcharts} options={options} />{" "}
        </div>
    );
};

export default TargetVSEnrolment;
