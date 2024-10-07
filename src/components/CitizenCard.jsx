import React from "react";
import { X } from "lucide-react";
import { getDataOrDefault } from "../utils/citizenUtils";

const CitizenCard = ({ citizen, onClose }) => {
  if (!citizen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-violet-950 p-8 rounded-lg shadow-lg w-full max-w-7xl z-50 overflow-auto max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-900"
        >
          <X />
        </button>
        <div className="flex">
          <h2 className="p-2 rounded-xl border-2 border-zinc-900 text-2xl font-bold mb-4">
            {getDataOrDefault(citizen.fullName)}
          </h2>
        </div>

        <div className="flex space-x-28">
          <div>
            <div className="mb-4">
              <p>
                <strong>Дата рождения:</strong>{" "}
                {getDataOrDefault(citizen.dateOfBirth)}
              </p>
              <p>
                <strong>Возраст:</strong> {getDataOrDefault(citizen.age)}
              </p>
            </div>
            <div className="mb-4">
              <div className="flex">
                <h3 className="border-b-2 border-zinc-900 text-xl font-semibold">
                  Контактная информация
                </h3>
              </div>

              <p>
                <strong>Адрес:</strong> {getDataOrDefault(citizen.address)}
              </p>
              <p>
                <strong>Телефон:</strong> {getDataOrDefault(citizen.phone)}
              </p>
              <p>
                <strong>Email:</strong> {getDataOrDefault(citizen.email)}
              </p>
            </div>
            <div className="mb-4">
              <div className="flex">
                <h3 className="border-b-2 border-zinc-900 text-xl font-semibold">
                  Члены семьи
                </h3>
              </div>

              <ul>
                {citizen.familyMembers && citizen.familyMembers.length > 0 ? (
                  citizen.familyMembers.map((member, index) => (
                    <li key={index}>
                      {getDataOrDefault(member.name)} -{" "}
                      {getDataOrDefault(member.relationship)} (
                      {getDataOrDefault(member.dateOfBirth)})
                    </li>
                  ))
                ) : (
                  <li>{getDataOrDefault(null)}</li>
                )}
              </ul>
            </div>
            <div className="mb-4">
              <div className="flex">
                <h3 className="border-b-2 border-zinc-900 text-xl font-semibold">
                  Образование
                </h3>
              </div>

              <ul>
                {citizen.education && citizen.education.length > 0 ? (
                  citizen.education.map((edu, index) => (
                    <li key={index}>
                      {getDataOrDefault(edu.institution)} -{" "}
                      {getDataOrDefault(edu.degree)} (
                      {getDataOrDefault(edu.year)})
                    </li>
                  ))
                ) : (
                  <li>{getDataOrDefault(null)}</li>
                )}
              </ul>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="flex">
                <h3 className="border-b-2 border-zinc-900 text-xl font-semibold">
                  Трудовая деятельность
                </h3>
              </div>

              <ul>
                {citizen.employment && citizen.employment.length > 0 ? (
                  citizen.employment.map((job, index) => (
                    <li key={index}>
                      {getDataOrDefault(job.position)} в{" "}
                      {getDataOrDefault(job.company)} (
                      {getDataOrDefault(job.startDate)} -{" "}
                      {getDataOrDefault(job.endDate)})
                    </li>
                  ))
                ) : (
                  <li>{getDataOrDefault(null)}</li>
                )}
              </ul>
            </div>
            <div className="mb-4">
              <div className="flex">
                <h3 className="border-b-2 border-zinc-900 text-xl font-semibold">
                  Дополнительная информация
                </h3>
              </div>

              <p>
                <strong>Должность:</strong> {getDataOrDefault(citizen.position)}
              </p>
              <p>
                <strong>Заявки в службу поддержки:</strong>{" "}
                {getDataOrDefault(citizen.helpDeskRequests)}
              </p>
              <div>
                <strong>Социальные сети:</strong>
                <ul>
                  {citizen.socialMedia && citizen.socialMedia.length > 0 ? (
                    citizen.socialMedia.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getDataOrDefault(social.platform)}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>{getDataOrDefault(null)}</li>
                  )}
                </ul>
              </div>
              <p>
                <strong>Хобби:</strong> {getDataOrDefault(citizen.hobbies)}
              </p>
              <h4 className="font-semibold">Медицинская информация</h4>
              <p>
                <strong>Группа крови:</strong>{" "}
                {getDataOrDefault(citizen.medicalInfo?.bloodType)}
              </p>
              <p>
                <strong>Аллергии:</strong>{" "}
                {getDataOrDefault(citizen.medicalInfo?.allergies)}
              </p>
              <p>
                <strong>Хронические заболевания:</strong>{" "}
                {getDataOrDefault(citizen.medicalInfo?.chronicDiseases)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenCard;
