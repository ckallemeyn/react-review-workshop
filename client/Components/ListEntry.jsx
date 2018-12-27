import React from 'react';

function ListEntry(props) {
  return (
    props.characterList.map((chars, index) => {
      return <li key={index} onClick={props.logged}> {chars} </li>
    })
  )
}

export default ListEntry;
