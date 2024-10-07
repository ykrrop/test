const SearchBar = ({
  searchTerm,
  setSearchTerm,
  positionFilter,
  setPositionFilter,
}) => (
  <div className="flex space-x-4">
    <div className="text-lg font-semibold space-y-2">
      <p className="ml-1">Найти по ФИО</p>
      <input
        type="text"
        placeholder="Иванов Иван Иванович"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-slate-300 border border-violet-950 rounded-xl p-2 w-64 h-12 text-black focus:outline-none focus:ring-0"
      />
    </div>

    <div className="text-lg font-semibold space-y-2">
      <p className="ml-1">Найти по должности</p>
      <input
        type="text"
        placeholder="Разработчик"
        value={positionFilter}
        onChange={(e) => setPositionFilter(e.target.value)}
        className="bg-slate-300 border border-violet-950 rounded-xl p-2 w-64 text-black focus:outline-none focus:ring-0"
      />
    </div>
  </div>
);

export default SearchBar;
