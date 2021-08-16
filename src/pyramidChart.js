import React from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
export const PyramidChart = () => {
    var dataPoint;
		var total;
		const options = {
			animationEnabled: true,
            backgroundColor: "#cfd0d8",
			title: {
				text: "Sales via Advertisement"
			},
			legend: {
				horizontalAlign: "right",
				verticalAlign: "center",
				reversed: true
			},
			data: [{
				type: "pyramid",
				showInLegend: true,
				legendText: "{label}",
				indexLabel: "{label} - {y}",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				dataPoints: [
					{ label: "Impressions", y: 2850},
					{ label: "Clicked", y: 2150},
					{ label: "Free Downloads", y: 1900},
					{ label: "Purchase", y: 650},
					{ label: "Renewal", y: 250}
				]
			}]
		}
		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(var i = 0; i < dataPoint.length; i++) {
			if(i === 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}
    return(
        <div>
            <CanvasJSChart options={options} />
        </div>
    )
}