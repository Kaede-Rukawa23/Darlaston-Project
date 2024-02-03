import React, { useState } from 'react';

const FilterTasks = ({ filterTasks }) => {
  const [filterType, setFilterType] = useState('all');

  return (
    <div>
      <label>
        Show:
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <ul>
        {filterTasks(filterType).map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTasks;
