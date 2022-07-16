import React, { useState } from 'react'
import data from './data'
import List from './List'

const Main = () => {

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
    }

  return (
    <main>
        <div className="container">
            <div className="people-list">
                <List data={people} removeItem={removeItem} />
            </div>
        </div>
    </main>
  )
}

export default Main