import React from "react";

const List = (props) => {
  return <ul className="user-list">
    {
      props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} />
        </li>
      ))
    }
  </ul>;
};

const Person = ({id, name, state, img}) => {
  return <article>
    <img src={img} alt="prs" className="person-img" />
    <div className="person-info">
      <div className="person-action">
        <h4>{name}</h4>
        <button className="btn" onClick={console.log(id)}>X</button>
      </div>
      <p>{state}</p>
    </div>
  </article>;
};

export default List;