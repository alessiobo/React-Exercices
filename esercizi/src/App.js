import React, { useState } from 'react';
import FilteredList from './FilteredList';

function App() {
  const [list, setList] = useState([
    { name: 'John', id: 1, age: 25 },
    { name: 'Mary', id: 2, age: 17 },
    { name: 'Peter', id: 3, age: 30 },
    { name: 'Alice', id: 4, age: 20 },
  ]);

  return (
    <div>
      <h1>Filtered List</h1>
      <FilteredList list={list} />
    </div>
  );
}

export default App;
