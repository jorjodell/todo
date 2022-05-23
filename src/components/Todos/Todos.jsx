import { useSelector } from 'react-redux'

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="grid gap-4 text-white pt-4">
      {todos.map((task) => (
        <div key={task.id} className="border-b border-white">
          <p className="font-semibold mb-1">{task.title}</p>
          <p className="text-sm">{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Todos;
