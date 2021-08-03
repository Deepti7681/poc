import ChartBar from "./ChartBar"
//this is master check
//cherry ick
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar
                value={dataPoint.value}
                key={dataPoint.label}
                maxValue={totalMaximum}
                label={dataPoint.label}></ChartBar>)}
        </div>
    )
}
export default Chart;
