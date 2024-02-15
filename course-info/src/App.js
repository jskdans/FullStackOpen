const Header = (props) => {
  return <h1>{props.titulo}</h1>
}

const Content = (props) => {
  return <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
}

const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>
}

const Part = (props) => {
  return <p>{props.part}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header titulo={course} />
      <Content part1={part1+" "+exercises1} part2={part2+" "+exercises2} part3={part3+" "+exercises3} />
      <Total exercises={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App;
