import Icon from "./Icon.js"
import 'antd-mobile/lib/date-picker/style/css';     
import React from "react"

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}


export default class Demo extends React.Component {
  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  }
  render() {
    return (
      <Icon/>
    //   <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
    //     <DatePicker
    //       value={this.state.date}
    //       onChange={date => this.setState({ date })}
    //     >
    //       <List.Item arrow="horizontal">Datetime</List.Item>
    //     </DatePicker>
    //     <DatePicker
    //       mode="date"
    //       title="Select Date"
    //       extra="Optional"
    //       value={this.state.date}
    //       onChange={date => this.setState({ date })}
    //     >
    //       <List.Item arrow="horizontal">Date</List.Item>
    //     </DatePicker>

    //     <DatePicker
    //       mode="time"
    //       minuteStep={2}
    //       use12Hours
    //       value={this.state.time}
    //       onChange={time => this.setState({ time })}
    //     >
    //       <List.Item arrow="horizontal">Time (am/pm)</List.Item>
    //     </DatePicker>
    //     <DatePicker
    //       mode="time"
    //       minDate={minDate}
    //       maxDate={maxDate}
    //       value={this.state.time}
    //       onChange={time => this.setState({ time })}
    //     >
    //       <List.Item arrow="horizontal">Limited time</List.Item>
    //     </DatePicker>

    //     <DatePicker
    //       mode="time"
    //       locale={enUs}
    //       format={val => `UTC Time: ${formatDate(val).split(' ')[1]}`}
    //       value={this.state.utcDate}
    //       onChange={date => this.setState({ utcDate: date })}
    //     >
    //       <List.Item arrow="horizontal">UTC time</List.Item>
    //     </DatePicker>

    //     <List.Item
    //       extra={this.state.dpValue && formatDate(this.state.dpValue)}
    //       onClick={() => this.setState({ visible: true })}
    //     >
    //       External control visible state
    //     </List.Item>
    //     <DatePicker
    //       visible={this.state.visible}
    //       value={this.state.dpValue}
    //       onOk={date => this.setState({ dpValue: date, visible: false })}
    //       onDismiss={() => this.setState({ visible: false })}
    //     />

    //     <DatePicker
    //       mode="time"
    //       format="HH:mm"
    //       title="Select Time"
    //       value={this.state.customChildValue}
    //       onChange={v => this.setState({ customChildValue: v })}
    //       extra="click to choose"
    //     >
    //       <CustomChildren>With customized children</CustomChildren>
    //     </DatePicker>
    //   </List>
     );
  }
}

