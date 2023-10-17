import { createContext, useContext, useEffect, useState } from "react"

const TasksContext = createContext()

export function useTasks() {
  return useContext(TasksContext)
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState({})

  useEffect(() => {
    const fetchTasks = new Promise((resolve, reject) => {
      if (!process.env.REACT_APP_API_KEY) {
        resolve({
          success: false,
          result: {},
          msg: 'API key not found in environment variables'
        })
      }
      
      fetch(process.env.REACT_APP_API_KEY)
      .then(res => res.json())
      .then(res => resolve({ success: true, result: res, msg: ''}))
      .catch(err => reject(err))
    })

    fetchTasks
    .then(res => {
      setTasks(res.result)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <TasksContext.Provider value={tasks}>
      { children }
    </TasksContext.Provider>
  )
}
