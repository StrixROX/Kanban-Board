import '../assets/css/topbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import DisplayOptions from './Topbar.DisplayOptions'

export default function Topbar() {
  const [showDisplayOptions, setShowDisplayOptions] = useState(false)

  function toggleDisplayOptions() {
    setShowDisplayOptions(!showDisplayOptions)
  }

  return (
    <>
      <div className="topbar">
        <button className="display" onClick={() => toggleDisplayOptions()}>
          <FontAwesomeIcon icon={faSliders} />
          <span>Display</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        
        { showDisplayOptions ? (
          <span className="options display">
            <DisplayOptions />
          </span>
        ) : null }
      </div>
    </>
  )
}