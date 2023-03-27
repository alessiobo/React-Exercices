// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop.
// The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering 
// should only happen when the list changes. Use useMemo to memoize the filtered list.

import React, { useMemo } from 'react';

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default FilteredList;