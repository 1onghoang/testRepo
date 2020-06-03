import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import TestRes from '../components/testRes';
import FormT from '../components/formT';
import FormAmount from '../components/formAmount';
import All from '../components/all';
import fetch from 'isomorphic-unfetch'
import dayjs from 'dayjs'

const Home = ({data}) => {


  const [results, setResults] = useState(data);
  const [test, setTest] = useState(data);


  const getAll = async () => {
    let newDate = dayjs('1810-09-16').format('YYYY-MM-DD HH:mm:ss');
    const res = await fetch('http://localhost:3000/api/dailyt?date=' + newDate)
    const json = await res.json()
    setTest(json)
  }

  const onChangeName = (e) => {
    const data = { ...results };

    data.transaction1.name = e.target.value;
    setResults(data);
  }

  const onChangeAmount = (e) => {
    const data = { ...results };
    data.transaction1.amount = parseInt(e.target.value);
    setResults(data);

  }

  const getDataForPreviousDay = async () => {
  let currentDate = dayjs(results.date);
  let newDate = currentDate.subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
  const res = await fetch('http://localhost:3000/api/dailyt?date=' + newDate)
  const json = await res.json()

  setResults(json);
}

const getDataForNextDay = async () => {
  let currentDate = dayjs(results.date);
  let newDate = currentDate.add(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
  const res = await fetch('http://localhost:3000/api/dailyt?date=' + newDate)
  const json = await res.json()

  setResults(json);
}



const updateTransactions = async () => {
  const res = await fetch('http://localhost:3000/api/dailyt', {
    method: 'post',
    body: JSON.stringify(results)
  })

  console.log(res);
}

  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>

    <div className="container mx-auto">

      <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">Money Tracker</h1>
        </div>
      </div>

    <div className="flex text-center">
      <div className="w-1/3 bg-gray-200 p-4"><button onClick={getDataForPreviousDay}>Previous Day</button></div>
      <div className="w-1/3 p-4">{dayjs(results.date).format('MM/DD/YYYY')}</div>
      <div className="w-1/3 bg-gray-200 p-4"><button onClick={getDataForNextDay}>Next Day</button></div>
    </div>

      <div className="flex mb-4 text-center">
        <TestRes results={results.transaction1} />
        <div className="flex mb-4 text-center">
          <All test={test}/>
        </div>
      </div>

      <div className="flex">
             <FormT data={results} onChange={onChangeName}/>
             <FormAmount data={results} onChange={onChangeAmount}/>
      </div>

      <div className="flex text-center">
        <div className="w-full m-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateTransactions}>
              Save
          </button>
        </div>
      </div>

      <div className="flex text-center">
        <div className="w-full m-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getAll}>
              Get all Transactions
          </button>
        </div>
      </div>

    </div>
  </div>
)}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/dailyt')
  const json = await res.json()
  return { data: json }
}

export default Home
