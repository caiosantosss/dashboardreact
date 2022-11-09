import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Legend, Tooltip, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
      title="Sales Analysis"
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
