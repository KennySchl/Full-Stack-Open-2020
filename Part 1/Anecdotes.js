import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return <h1>{props.headers}</h1>
}

const RandomButton = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
 )

 const VotingButton = (props) => (
   <button onClick={props.handleClick}>{props.text}</button>
 )

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
 
const headers = {
  name: ['Anecdote of the Day','Anecdote with the Most Votes']
}

const randomAnecdote = () =>  {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const copy = [...votes]

const placeVote = () => {
  copy[selected] += 1    
  setVotes(copy)

  console.log(copy)
}

const indexMaxVote = votes.indexOf(Math.max(...votes))

const maxVoteAnecdote = anecdotes[indexMaxVote]

//console.log(copy.indexOf(...anecdotes)
console.log(anecdotes[selected])

const maxVotes = Math.max(...votes)
  


  return (
    <div>
       <Header headers={headers.name[0]} />
      {props.anecdotes[selected]}
      <p>has {votes[selected]} vote(s)</p>
      <br />
      <VotingButton handleClick={placeVote} text="vote" />
      <RandomButton handleClick={randomAnecdote} text="next anecdote" />
      <Header headers={headers.name[1]} />
      {maxVoteAnecdote}
      <p>has {maxVotes} vote(s)</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
