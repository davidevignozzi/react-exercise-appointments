import React, { useState } from 'react'
import data from './data'
import List from './List'

const Main = () => {

    const [people, setPeople] = useState(data)

  return (
    <main>
        <div className="container">
            <div className="people-list">
                <List data={people} />
            </div>
        </div>
    </main>
  )
}

export default Main