import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { Construction } from "lucide-react";

function App() {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Moyenne');

  const savedTodos = localStorage.getItem('todos');
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  function addTodo() {
    if (input.trim() === '') {
      alert('Veuillez entrer une tâche valide.');
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      priority: priority,
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setInput('');
    setPriority('Moyenne');
  }

  let filtredTodos = [];

  if (filter === 'Tous') {
    filtredTodos = todos;
  } else {
    filtredTodos = todos.filter((todo) => todo.priority === filter)
  }

  const urgentCount = todos.filter((t) => t.priority === 'Urgente').length;
  const mediumCount = todos.filter((t) => t.priority === 'Moyenne').length;
  const lowCount = todos.filter((t) => t.priority === 'Basse').length;

  const totalCount = todos.length;

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const [selectedTodos, setSelectedTodos] = useState(new Set());

  function toggleSelectedTodo(id) {
    const newSelected = new Set(selectedTodos)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedTodos(newSelected)
  }

  function finishedSelected() {
    const newTodos = todos.filter((todo) => {
      if (selectedTodos.has(todo.id)) {
        return false
      } else {
        return true
      }
    })
    setTodos(newTodos)
    setSelectedTodos(new Set())
  }


  return (
    <>
      <div className="Flex justify-content-center">
        <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
          <div className="flex gap-4">
            <input type="text" className="input w-full" placeholder="Ajouter une tache..."
              value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          <select name="priority" id="priority" className="select w-full" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button className="btn btn-primary w-full" onClick={addTodo}>Ajouter</button>

          <div className="space-y-2 flex-1 h-fit">
            <div className="flex item-center justify-between">
              <div className="flex flex-wrap gap-4">
                <button
                  className={`btn btn-soft ${filter === 'Tous' ? 'btn-primary' : ''}`}
                  onClick={() => setFilter('Tous')}
                >Tous ({totalCount})</button>

                <button
                  className={`btn btn-soft ${filter === 'Urgente' ? 'btn-primary' : ''}`}
                  onClick={() => setFilter('Urgente')}
                >Urgente ({urgentCount})</button>

                <button
                  className={`btn btn-soft ${filter === 'Moyenne' ? 'btn-primary' : ''}`}
                  onClick={() => setFilter('Moyenne')}
                >Moyenne ({mediumCount})</button>

                <button
                  className={`btn btn-soft ${filter === 'Basse' ? 'btn-primary' : ''}`}
                  onClick={() => setFilter('Basse')}
                >Basse ({lowCount})</button>

              </div>
              <button className="btn btn-primary"
                disabled={selectedTodos.size == 0}
                onClick={finishedSelected}
              >
                Finir la sélection ({selectedTodos.size})
              </button>
            </div>



            {filtredTodos.length > 0 ? (
              <ul className="divide-y divide-primary/20">
                {filtredTodos.map((todo) => (
                  <li key={todo.id}>
                    <TodoItem
                      todo={todo}
                      onDelete={() => deleteTodo(todo.id)}
                      isSelected={selectedTodos.has(todo.id)}
                      onToggleSelect={toggleSelectedTodo} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex justify-center items-center flex-col p-5">
                <div>
                  <Construction strokeWidth={1} className="w-40 h-40 text-primary" />
                </div>
                <p className="text-sm">Aucune tache pour ce filtre</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default App