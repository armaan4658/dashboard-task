import React from "react"
import {CanvasJSChart} from 'canvasjs-react-charts'
export function PieChart() {
        const options = {
            animationEnabled: true,
            backgroundColor: "#cfd0d8",
            title: {
                text: "Customer Satisfaction"
            },
            subtitles: [{
                text: "71% Positive",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Unsatisfied", y: 5 },
                    { name: "Very Unsatisfied", y: 31 },
                    { name: "Very Satisfied", y: 40 },
                    { name: "Satisfied", y: 17 },
                    { name: "Neutral", y: 7 }
                ]
            }]
        }
        
        
		return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	
}