import { useMemo, useState } from "react";
import {
  filterCitizens,
  sortByFullName,
  sortById,
} from "../utils/citizenUtils";

const useCitizenFilters = (
  citizens,
  searchTerm,
  positionFilter,
  sortOrder,
  idSortOrder
) => {
  const [visibleRows, setVisibleRows] = useState(50);

  const filteredCitizens = useMemo(
    () => filterCitizens(citizens, searchTerm, positionFilter),
    [searchTerm, positionFilter]
  );

  const sortedCitizens = useMemo(
    () => sortByFullName(filteredCitizens, sortOrder),
    [filteredCitizens, sortOrder]
  );

  const sortedByIdCitizens = useMemo(
    () => sortById(sortedCitizens, idSortOrder),
    [sortedCitizens, idSortOrder]
  );

  return { sortedByIdCitizens, visibleRows, setVisibleRows };
};

export default useCitizenFilters;
