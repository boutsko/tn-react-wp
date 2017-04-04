import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

export default class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { columns: this.props.columns, type: 'pie' }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.columns
    })
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div ref='chart' style={style} />
    )
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
}

const style={
  width: '500px'
  , margin: '20px 20px 20px 20px'
  , padding: '20px 20px 20px 20px'
}
