const { createContext, useContext, useState } = require("react");

const SortingContext = createContext()
const UpdateSortingConext = createContext()

export const validSortings = {
  'priority': 'Priority',
  'title': 'Title'
}

export function useSorting() {
  return useContext(SortingContext)
}

export function useUpdateSorting() {
  return useContext(UpdateSortingConext)
}

export function SortingProvider({ children }) {
  const [sorting, setSorting] = useState(localStorage.getItem('kanban_board_sorting_scheme') || 'priority')

  function updateSorting(value) {
    if (['priority', 'title'].indexOf(value) != -1){
      setSorting(value)
      localStorage.setItem('kanban_board_sorting_scheme', value)
    }
  }

  return (
    <SortingContext.Provider value={sorting}>
      <UpdateSortingConext.Provider value={updateSorting}>
      { children }
      </UpdateSortingConext.Provider>
    </SortingContext.Provider>
  )
}