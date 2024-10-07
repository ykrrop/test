import { useState, useCallback } from "react";
import { ArrowUp, ArrowDown, ListOrdered } from "lucide-react";

import citizens from "../data/data";
import CitizenCard from "./CitizenCard";
import CitizenTableBody from "./CitizenTableBody";
import SearchBar from "./SearchBar";
import useCitizenFilters from "../hooks/use-citizen-filters";

const CitizenTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [idSortOrder, setIdSortOrder] = useState(null);
  const [selectedCitizen, setSelectedCitizen] = useState(null);

  const { sortedByIdCitizens, visibleRows, setVisibleRows } = useCitizenFilters(
    citizens,
    searchTerm,
    positionFilter,
    sortOrder,
    idSortOrder
  );

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setIdSortOrder(null);
  };

  const toggleIdSortOrder = (e) => {
    e.stopPropagation();
    setIdSortOrder(idSortOrder === "asc" ? "desc" : "asc");
    setSortOrder(null);
  };

  const handleCitizenClick = useCallback((citizen) => {
    setSelectedCitizen(citizen);
  }, []);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setVisibleRows((prevVisibleRows) => prevVisibleRows + 50);
    }
  };

  return (
    <div className="mx-40">
      <h2 className="text-2xl font-bold text-center my-6">Картотека граждан</h2>

      <div className="flex justify-between m-4 space-x-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          positionFilter={positionFilter}
          setPositionFilter={setPositionFilter}
        />
        <div>
          <span className="border-b-2 border-violet-950 text-xl font-bold">
            Всего граждан: {sortedByIdCitizens.length}
          </span>
        </div>
      </div>

      <div className="border-2 border-violet-950 rounded-xl p-4 shadow-xl shadow-violet-950">
        <div
          className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-violet-950 scrollbar-track-zinc-900"
          onScroll={handleScroll}
        >
          <table className="min-w-full text-center">
            <thead className="font-extrabold text-xl text-violet-400">
              <tr className="border-b-2 border-violet-950">
                <th
                  className="text-left px-4 py-2 border-r border-violet-950 flex items-center space-x-2 cursor-pointer"
                  onClick={toggleSortOrder}
                >
                  <span>ФИО</span>
                  <div className="flex flex-col">
                    <ArrowUp
                      size={16}
                      className={
                        sortOrder === "asc"
                          ? "text-violet-950"
                          : "text-gray-500"
                      }
                    />
                    <ArrowDown
                      size={16}
                      className={
                        sortOrder === "desc"
                          ? "text-violet-950"
                          : "text-gray-500"
                      }
                    />
                  </div>
                  <ListOrdered
                    size={16}
                    className={
                      idSortOrder ? "text-violet-950" : "text-gray-500"
                    }
                    onClick={(e) => toggleIdSortOrder(e)}
                  />
                </th>
                <th className="px-4 py-2 border-r border-violet-950">
                  Дата рождения
                </th>
                <th className="px-4 py-2 border-r border-violet-950">
                  Возраст
                </th>
                <th className="px-4 py-2">Должность</th>
              </tr>
            </thead>
            <CitizenTableBody
              citizens={sortedByIdCitizens}
              onCitizenClick={handleCitizenClick}
              visibleRows={visibleRows}
            />
          </table>
        </div>
      </div>

      {selectedCitizen && (
        <CitizenCard
          citizen={selectedCitizen}
          onClose={() => setSelectedCitizen(null)}
        />
      )}
    </div>
  );
};

export default CitizenTable;
