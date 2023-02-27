import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TargetVSEnrolment = () => {
    const options = {
        chart: {
            type: "column",
            style: {
                borderRadius: "10px",
            },
        },
        title: {
            text: "Target VS Enrolment Chart",
            align: "left",
            style: {
                fontWeight: "bolder",
                fontSize: "21px",
            },
        },
        xAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: "Percentage",
            },
            labels: {
                formatter: function () {
                    return this.value + "%";
                },
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 1,
            },
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                name: "Target",
                data: [80, 75, 70, 90, 60, 85, 70],
            },
            {
                name: "Enrolment",
                data: [50, 45, 60, 40, 50, 60, 55],
            },
        ],
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />{" "}
        </div>
    );
};

export default TargetVSEnrolment;
