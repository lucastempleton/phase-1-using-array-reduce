const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// Code your solution here
// const totalBatteries = batteryBatches.reduce(reducer);

const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue);