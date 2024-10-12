import PropTypes from "prop-types";
import React, { Component } from "react";

export class TimeNow extends Component {
  static propTypes = {};

  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ currentTime: new Date() });
  }

  render() {
    const { currentTime } = this.state;
    const timeString = currentTime.toLocaleTimeString();
    const dateString = currentTime.toLocaleDateString();

    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
        <h2 className="text-center font-bold text-3xl text-green-600 mb-6">
          Current Time
        </h2>
        <div className="border border-gray-300 rounded-lg p-4 text-center">
          <p className="text-xl text-gray-700">{timeString}</p>
          <p className="text-xl text-gray-700">{dateString}</p>
        </div>
      </div>
    );
  }
}

export default TimeNow;
