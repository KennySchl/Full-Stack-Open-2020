import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return <h1>{props.headers}</h1>
}

 const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
 )
 
 const Statistic = ({text, value}) => {
  console.log({text, value})
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}


const Stats = (props) => {
  console.log(props)
  if (props.total === 0) {
    return (
      <div>No Feedback Given</div>
    )
  }
  return (
   
    <table>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="total" value={props.total} />
      <Statistic text="average" value={props.average} />
      <Statistic text="positive" value={props.positive} /> 
    </table>
  
  )
}

const App = () => {

  const headers = {
    name: [ 'give feedback','statistics']
}

  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const total = () => (good + neutral + bad)
const average = () => ((good - bad) / total()) 
const positive = () => (good / total() * 100 + '%')

  return (
    <div>
      <Header headers={headers.name[0]} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header headers={headers.name[1]} />
      <Stats good={good} neutral={neutral} bad={bad} total={total()} average={average()} positive={positive()} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
