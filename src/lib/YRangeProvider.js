import React, {Component} from "react";
import PropTypes from "prop-types";

class YRangeProvider extends Component {
  render(){
    let {data,x,y,minX,maxX,render} = this.props;
    let minY = Infinity;
    let maxY = -Infinity;
    // Get minY, maxY
    for (let point of data) {
      if (point[x]<minX || point[x]>maxX) {
        continue;
      }
      minY = Math.min(minY,point[y]);
      maxY = Math.max(maxY,point[y]);
    }
    // Pad
    if (minY===maxY) {
      minY = minY-1;
      maxX = maxY+1;
    }
    else {
      let p90 = maxY-minY;
      maxY = maxY+p90/90*5;
      minY = minY-p90/90*5;
    }
    if (minY===Infinity || maxY===-Infinity) {
      return (
        render({minY:0,maxY:0})
      );
    }
    return (
      render({minY,maxY})
    );
  }
}

YRangeProvider.propTypes = {
  data: PropTypes.array.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  minX: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired,
};

export default YRangeProvider;
