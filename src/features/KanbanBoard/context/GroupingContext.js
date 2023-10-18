const { createContext, useContext, useState } = require("react");

const GroupingConext = createContext()
const UpdateGroupingConext = createContext()

export const validGroupings = {
  'status': 'Status',
  'priority': 'Priority',
  'userId': 'User'
}

export function useGrouping() {
  return useContext(GroupingConext)
}

export function useUpdateGrouping() {
  return useContext(UpdateGroupingConext)
}

export function GroupingProvider({ children }) {
  const [grouping, setGrouping] = useState(localStorage.getItem('kanban_board_grouping_scheme') || 'status')

  function updateGrouping(value) {
    if (Object.keys(validGroupings).indexOf(value) != -1){
      setGrouping(value)
      localStorage.setItem('kanban_board_grouping_scheme', value)
    }
  }

  return (
    <GroupingConext.Provider value={grouping}>
      <UpdateGroupingConext.Provider value={updateGrouping}>
        { children }
      </UpdateGroupingConext.Provider>
    </GroupingConext.Provider>
  )
}