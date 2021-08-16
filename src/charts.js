import {PyramidChart} from './pyramidChart'
import {PieChart} from './pieChart';
import {SalesChart} from './salesChart';
export const Charts = () => {
    return(
        <>
            <PieChart />
            <PyramidChart />
            <SalesChart />
        </>
    )
}