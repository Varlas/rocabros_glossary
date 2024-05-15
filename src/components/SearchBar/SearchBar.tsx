import React, { useState } from 'react';

interface Props {
  list: Adventure[] | NPC[] | null;
}

const SearchBar = ({ list }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredList =
    list?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button>Search</button>
      {filteredList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchBar;
