export const filterCitizens = (citizens, searchTerm, positionFilter) => {
  return citizens.filter((citizen) => {
    const matchesName = citizen.fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPosition = citizen.employment.some((employment) =>
      employment.position.toLowerCase().includes(positionFilter.toLowerCase())
    );
    return matchesName && matchesPosition;
  });
};

export const sortByFullName = (citizens, sortOrder) => {
  return [...citizens].sort((a, b) => {
    if (sortOrder === "asc") return a.fullName.localeCompare(b.fullName);
    if (sortOrder === "desc") return b.fullName.localeCompare(a.fullName);
    return 0;
  });
};

export const sortById = (citizens, idSortOrder) => {
  return [...citizens].sort((a, b) => {
    if (idSortOrder === "asc") return a.id - b.id;
    if (idSortOrder === "desc") return b.id - a.id;
    return 0;
  });
};

export const getDataOrDefault = (data) => {
  return data || "Нет данных";
};

export const aggregateAgeData = (data) => {
  const ageGroups = Array.from({ length: 10 }, (_, i) => ({
    name: `${i * 10}-${i * 10 + 9}`,
    count: 0,
  }));

  data.forEach((citizen) => {
    const age = citizen.age;
    if (age !== undefined && age !== null && age < 100) {
      const groupIndex = Math.floor(age / 10);
      ageGroups[groupIndex].count += 1;
    }
  });

  return ageGroups;
};

export const aggregateRequestsData = (data) => {
  const requestsCounts = Array.from({ length: 11 }, (_, i) => ({
    name: `${i}`,
    requests: 0,
  }));

  data.forEach((citizen) => {
    const requests = citizen.helpDeskRequests;
    if (requests !== undefined && requests !== null && requests <= 10) {
      requestsCounts[requests].requests += 1;
    }
  });

  return requestsCounts;
};
