import React, { useContext } from "react";
import dayjs from 'dayjs'

const All = ({test}) => {
var cloneArray = JSON.parse(JSON.stringify(test));

var dates = [];
var amounts = [];
var name = [];


for (let i = 0; i < test.length; i++){
  dates.push(test[i].date);
  name.push(test[i].transaction1.name);
  amounts.push(test[i].transaction1.amount);
}

for (let i = 0; i < dates.length; i++){
  console.log(dates[i])
  console.log(amounts[i])
  console.log(name[i])
}

var armixed = dates.map(function (x, i) {
            return [x, name[i], amounts[i] ]
});

for (let i = 0; i < armixed.length; i++){
  let currentDate = dayjs(armixed[i][0]).format('YYYY/MM/DD');
  armixed[i][0] = currentDate;
}
//
// const map1 = test.map(obj =>{
//     let rOnj = {}
//     rObj[obj.date] = obj.transaction1.name
//     return rObj
// })

// console.log(cloneArray[0])
//
// for (let i = 0; i < test.length; i++){
//   console.log(test[i].date);
//   console.log(test[i].transaction1.name);
//   console.log(test[i].transaction1.amount);
// }


  return (
    <>
      <h3>History</h3>
      <ul>
        {armixed.map(item => {
          return <li>{item[0]}" "{item[1]}" "{item[2]}</li>;
        })}
      </ul>
    </>
  );
};

export default All
