import React from 'react'
import ReactVirtualizedTable from './Table'
import Sidebarr from './Sidebarr'

export default function Dashboard() {
  return (
    <div>
    <Sidebarr/>
    <ReactVirtualizedTable/>
    </div>
  )
}
