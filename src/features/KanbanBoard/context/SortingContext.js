const { createContext, useContext } = require("react");

const SortingContext = createContext()
const UpdateSortingConext = createContext()

export function useSorting() {
  return useContext(SortingContext)
}

export function useUpdateSorting() {
  return useContext(UpdateSortingConext)
}

export function SortingProvider({ children }) {
  const [sorting, setSorting] = useState('status')

  function updateSorting(value) {
    if (['priority', 'title'].indexOf(value) != -1){
      setSorting(value)
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