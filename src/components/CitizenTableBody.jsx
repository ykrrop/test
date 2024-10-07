import React from "react";
import { getDataOrDefault } from "../utils/citizenUtils";

const CitizenTableBody = React.memo(
  ({ citizens, onCitizenClick, visibleRows }) => {
    if (citizens.length === 0) {
      return (
        <tbody>
          <tr>
            <td colSpan={4} className="py-4 text-center">
              Ничего не найдено
            </td>
          </tr>
        </tbody>
      );
    }

    return (
      <tbody>
        {citizens.slice(0, visibleRows).map((citizen) => (
          <tr
            key={citizen.id}
            className="border-b border-violet-950 cursor-pointer hover:bg-violet-950"
            onClick={() => onCitizenClick(citizen)}
          >
            <td className="text-left px-4 py-2 border-r border-violet-950">
              {citizen.id}. {citizen.fullName}
            </td>
            <td className="px-4 py-2 border-r border-violet-950">
              {getDataOrDefault(citizen.dateOfBirth)}
            </td>
            <td className="px-4 py-2 border-r border-violet-950">
              {getDataOrDefault(citizen.age)}
            </td>
            <td className="px-4 py-2">{getDataOrDefault(citizen.position)}</td>
          </tr>
        ))}
        {visibleRows < citizens.length && (
          <tr>
            <td colSpan={4} className="py-4 text-center">
              Подгружаем больше данных...
            </td>
          </tr>
        )}
      </tbody>
    );
  }
);

export default CitizenTableBody;
