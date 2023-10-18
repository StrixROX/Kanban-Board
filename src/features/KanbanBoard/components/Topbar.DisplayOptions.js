import '../assets/css/topbar.options.css'

import { validGroupings, useGrouping, useUpdateGrouping } from "../context/GroupingContext"
import { useSorting, useUpdateSorting, validSortings } from "../context/SortingContext"

export default function DisplayOptions() {
  const grouping = useGrouping()
  const updateGrouping = useUpdateGrouping()

  const sorting = useSorting()
  const updateSorting = useUpdateSorting()

  return (
    <>
      <div className="options-container">
        <div className="option grouping">
          <span className="label">Grouping</span>
          <select name="grouping" value={grouping} onChange={(e) => updateGrouping(e.target.value)}>
            {
              Object.keys(validGroupings).map((el, i) => {
                return <option value={el} key={i}>{validGroupings[el]}</option>
              })
            }
          </select>
        </div>
        <div className="option sorting">
          <span className="label">Sorting</span>
          <select name="sorting" value={sorting} onChange={(e) => updateSorting(e.target.value)}>
            {
              Object.keys(validSortings).map((el, i) => {
                return <option value={el} key={i}>{validSortings[el]}</option>
              })
            }
          </select>
        </div>
      </div>
    </>
  )
}