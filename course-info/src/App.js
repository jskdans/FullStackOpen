const Header = (props) => {
  return <h1>{props.tittle.name}</h1>
}

const Content = (props) => {
  return <div>
    <Part part={props.content.parts[0].name + " " + props.content.parts[0].exercises} />
    <Part part={props.content.parts[1].name + " " + props.content.parts[1].exercises} />
    <Part part={props.content.parts[2].name + " " + props.content.parts[2].exercises} />
  </div>
}           

const Total = (props) => {
  return <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
}

const Part = (props) => {
  return <p>{props.part}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header tittle={course} />
      <Content content={course} />
      <Total total={course} />  
    </div>
  )
}

export default App;
