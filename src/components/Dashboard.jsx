import { aggregateAgeData, aggregateRequestsData } from "../utils/citizenUtils";
import citizens from "../data/data";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF5722",
  "#673AB7",
  "#4CAF50",
  "#FFC107",
  "#9C27B0",
  "#2196F3",
];

export default function Dashboard() {
  const totalCitizens = citizens.length;
  const ageAvailableCitizens = citizens.filter(
    (citizen) => citizen.age !== undefined && citizen.age !== null
  );
  const averageAge =
    ageAvailableCitizens.length > 0
      ? Math.round(
          ageAvailableCitizens.reduce((sum, citizen) => sum + citizen.age, 0) /
            ageAvailableCitizens.length
        )
      : 0;

  const ageData = aggregateAgeData(citizens);
  const helpDeskData = aggregateRequestsData(citizens);

  const requestsAvailableCitizens = citizens.filter(
    (citizen) =>
      citizen.helpDeskRequests !== undefined &&
      citizen.helpDeskRequests !== null
  );
  const totalRequests = requestsAvailableCitizens.reduce(
    (sum, entry) => sum + (entry.helpDeskRequests || 0),
    0
  );
  const averageRequests =
    requestsAvailableCitizens.length > 0
      ? Math.round(totalRequests / requestsAvailableCitizens.length)
      : 0;

  return (
    <div className="px-4">
      <h2 className="text-center text-3xl font-bold my-10">Статистика</h2>

      <div className="flex justify-center">
        <h3 className="rounded-xl bg-violet-950 font-bold p-4">
          Возрастные группы
        </h3>
      </div>

      <div className="flex gap-2 mb-10 ml-20">
        <div className="border-2 border-violet-950 text-lg font-semibold p-4">
          Всего граждан: {totalCitizens}
        </div>
        <div className="border-2 border-violet-950 text-lg font-semibold p-4">
          Средний возраст граждан: {averageAge}
        </div>
      </div>

      <div className="h-96 w-full mb-10">
        <BarChartComponent data={ageData} />
      </div>

      <div className="mb-4">
        <div className="flex justify-center">
          <h3 className="rounded-xl bg-violet-950 font-bold p-4">
            Заявки в Help Desk
          </h3>
        </div>

        <div className="flex gap-2 mt-10 ml-20">
          <div className="border-2 border-violet-950 text-lg font-semibold p-4">
            Всего заявок: {totalRequests}
          </div>
          <div className="border-2 border-violet-950 text-lg font-semibold p-4">
            Среднее количество заявок: {averageRequests}
          </div>
        </div>
      </div>

      <div className="h-96 w-full">
        <PieChartComponent data={helpDeskData} colors={COLORS} />
      </div>
    </div>
  );
}
