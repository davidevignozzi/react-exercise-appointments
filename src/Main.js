import React, { useState } from 'react'
import data from './data'
import List from './List'

const Main = () => {

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
    }

    const reloadAll = () => {
        setPeople(data);
    }

    const deleteAll = () => {
        setPeople([]);
    }

  return (
    <main style={{margin: "3rem 10%"}}>
        <div className="container">
            <div className="people-list">
                <List data={people} removeItem={removeItem} />
            </div>

            <section id='buttons' className='btn-group'>
                <button className="btn btn-reset" onClick={reloadAll}>
                    Reload
                </button>
                <button className="btn btn-delete" onClick={deleteAll}>
                    Delete
                </button>
            </section>
        </div>
    </main>
  )
}

export default Main