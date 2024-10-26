import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react'
function App() {
  // const watches = [
  //   { id: 1, name: 'Apple Watch', price: 1200 },
  //   { id: 2, name: 'Samsung Watch', price: 900 },
  //   { id: 3, name: 'Xiaomi Watch', price: 600 }
  // ]
  // const watches = [
  //   {
  //     id: 1,
  //     brand: "Apple",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     brand: "Samsung",
  //     price: 299
  //   },
  //   {
  //     id: 3,
  //     brand: "Garmin",
  //     price: 349
  //   },
  //   {
  //     id: 4,
  //     brand: "Fitbit",
  //     price: 229
  //   },
  //   {
  //     id: 5,
  //     brand: "Amazfit",
  //     price: 199
  //   }
  // ];
  const [watches, setWatches] = useState([])

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, [])


  return (
    <>
      <h2>Watch Shop</h2>
      {/* <Watch></Watch> */}
      {
        watches.map(watch => <Watch
          watch={watch}
          key={watch.id}
        ></Watch>)
      }
      {/* {
        watches.map(watch => <Watch key={watch.id}></Watch>)
      } */}
    </>
  )
}

export default App
