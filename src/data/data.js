// data.js

const currentYear = new Date().getFullYear();

const citizens = [
  {
    id: 1,
    fullName: "Иванов Иван Иванович",
    dateOfBirth: "1985-06-15",
    address: "г. Москва, ул. Ленина, д. 10",
    phone: "+7 (495) 123-45-67",
    email: "ivanov@example.com",
    familyMembers: [
      {
        name: "Иванова Мария Петровна",
        relationship: "жена",
        dateOfBirth: "1986-04-20",
      },
      {
        name: "Иванов Сергей Иванович",
        relationship: "сын",
        dateOfBirth: "2010-01-10",
      },
    ],
    education: [
      {
        institution: "Московский государственный университет",
        degree: "Бакалавр",
        year: 2007,
      },
      {
        institution: "Московский государственный университет",
        degree: "Магистр",
        year: 2009,
      },
    ],
    employment: [
      {
        company: "АО Ромашка",
        position: "Менеджер",
        startDate: "2010-06-01",
        endDate: "н.в.",
      },
    ],
    position: "Руководитель",
    age: currentYear - 1985,
    helpDeskRequests: 5,
    socialMedia: [
      { platform: "Facebook", link: "https://facebook.com/ivanov" },
      { platform: "LinkedIn", link: "https://linkedin.com/in/ivanov" },
    ],
    hobbies: "Чтение книг, горные лыжи",
    medicalInfo: {
      bloodType: "O+",
      allergies: "Пыльца",
      chronicDiseases: "Гипертония",
    },
  },
  {
    id: 2,
    fullName: "Петров Петр Петрович",
    dateOfBirth: "1990-07-12",
    address: "г. Санкт-Петербург, пр. Невский, д. 5",
    phone: "+7 (812) 987-65-43",
    email: "petrov@example.com",
    familyMembers: [
      {
        name: "Петрова Ольга Сергеевна",
        relationship: "жена",
        dateOfBirth: "1991-09-15",
      },
    ],
    education: [
      {
        institution: "Санкт-Петербургский государственный университет",
        degree: "Бакалавр",
        year: 2012,
      },
    ],
    employment: [
      {
        company: "ООО Альфа",
        position: "Инженер",
        startDate: "2013-09-01",
        endDate: "н.в.",
      },
    ],
    position: "Главный инженер",
    age: currentYear - 1990,
    helpDeskRequests: 6,
    socialMedia: [
      { platform: "Instagram", link: "https://instagram.com/petrov" },
    ],
    hobbies: "Плавание, шахматы",
    medicalInfo: {
      bloodType: "A-",
      allergies: "Нет",
      chronicDiseases: "Нет",
    },
  },
  {
    id: 3,
    fullName: "Сидоров Сергей Александрович",
    dateOfBirth: "1978-04-05",
    address: "г. Казань, ул. Пушкина, д. 12",
    phone: "+7 (843) 234-56-78",
    email: "sidorov@example.com",
    familyMembers: [
      {
        name: "Сидорова Анна Игоревна",
        relationship: "дочь",
        dateOfBirth: "2008-12-11",
      },
    ],
    education: [
      {
        institution: "Казанский федеральный университет",
        degree: "Магистр",
        year: 2000,
      },
    ],
    employment: [
      {
        company: "ЗАО Техно",
        position: "Технический директор",
        startDate: "2001-02-15",
        endDate: "2020-03-30",
      },
    ],
    position: "Консультант",
    age: currentYear - 1978,
    helpDeskRequests: 1,
    socialMedia: [{ platform: "VK", link: "https://vk.com/sidorov" }],
    hobbies: "Туризм, рыбалка",
    medicalInfo: {
      bloodType: "B+",
      allergies: "Морепродукты",
      chronicDiseases: "Астма",
    },
  },
  {
    id: 4,
    fullName: "Михайлова Елена Ивановна",
    dateOfBirth: "1995-10-25",
    address: "г. Новосибирск, ул. Гоголя, д. 20",
    email: "mihailova@example.com",
    familyMembers: [
      {
        name: "Михайлов Александр Владимирович",
        relationship: "муж",
        dateOfBirth: "1994-03-22",
      },
    ],
    education: [
      {
        institution: "Новосибирский государственный университет",
        degree: "Бакалавр",
        year: 2017,
      },
    ],
    employment: [
      {
        company: "ООО Энергия",
        position: "Аналитик",
        startDate: "2018-07-01",
        endDate: "н.в.",
      },
    ],
    position: "Ведущий аналитик",
    age: currentYear - 1995,
    helpDeskRequests: 2,
    socialMedia: [
      { platform: "Facebook", link: "https://facebook.com/mihailova" },
    ],
    hobbies: "Рисование, бег",
    medicalInfo: {
      bloodType: "AB+",
      allergies: "Кошачья шерсть",
      chronicDiseases: "Диабет",
    },
  },
  {
    id: 5,
    fullName: "Васильев Василий Николаевич",
    dateOfBirth: "1982-09-13",
    address: "г. Екатеринбург, ул. Куйбышева, д. 30",
    phone: "+7 (343) 987-12-34",
    email: "vasiliev@example.com",
    familyMembers: [],
    education: [
      {
        institution: "Уральский федеральный университет",
        degree: "Бакалавр",
        year: 2004,
      },
    ],
    employment: [
      {
        company: "ООО Стройком",
        position: "Прораб",
        startDate: "2005-09-01",
        endDate: "2019-06-30",
      },
    ],
    position: "Консультант",
    age: currentYear - 1982,
    helpDeskRequests: 0,
    socialMedia: [],
    hobbies: "Футбол, чтение",
    medicalInfo: {
      bloodType: "O-",
      allergies: "Молочные продукты",
      chronicDiseases: "Ожирение",
    },
  },
  {
    id: 6,
    fullName: "Кузнецова Наталья Викторовна",
    dateOfBirth: "1988-02-18",
    address: "г. Самара, ул. Победы, д. 8",
    phone: "+7 (846) 123-45-67",
    email: "kuznetsova@example.com",
    familyMembers: [
      {
        name: "Кузнецов Виктор Иванович",
        relationship: "муж",
        dateOfBirth: "1987-11-23",
      },
      {
        name: "Кузнецова Ирина Викторовна",
        relationship: "дочь",
        dateOfBirth: "2015-03-30",
      },
    ],
    education: [
      {
        institution: "Самарский государственный университет",
        degree: "Бакалавр",
        year: 2010,
      },
    ],
    employment: [
      {
        company: "ООО Волга",
        position: "Менеджер по продажам",
        startDate: "2011-10-01",
        endDate: "н.в.",
      },
    ],
    position: "Директор по продажам",
    age: currentYear - 1988,
    helpDeskRequests: 4,
    socialMedia: [
      { platform: "Instagram", link: "https://instagram.com/kuznetsova" },
    ],
    hobbies: "Путешествия, йога",
    medicalInfo: {
      bloodType: "A+",
      allergies: "Глютен",
      chronicDiseases: "Нет",
    },
  },
  {
    id: 7,
    fullName: "Александров Александр Иванович",
    dateOfBirth: "1975-11-10",
    address: "г. Воронеж, ул. Советская, д. 15",
    phone: "+7 (473) 654-32-21",
    email: "alexandrov@example.com",
    familyMembers: [],
    education: [
      {
        institution: "Воронежский государственный университет",
        degree: "Бакалавр",
        year: 1997,
      },
    ],
    employment: [
      {
        company: "ЗАО Комплекс",
        position: "Программист",
        startDate: "1998-02-10",
        endDate: "н.в.",
      },
    ],
    position: "Ведущий разработчик",
    age: currentYear - 1975,
    helpDeskRequests: 3,
    socialMedia: [],
    hobbies: "Программирование, настольные игры",
    medicalInfo: {
      bloodType: "B-",
      allergies: "Кошачья шерсть",
      chronicDiseases: "Гипертония",
    },
  },
  {
    id: 8,
    fullName: "Григорьева Ольга Андреевна",
    dateOfBirth: "1992-05-07",
    address: "г. Ростов-на-Дону, ул. Горького, д. 22",
    phone: "+7 (863) 543-21-09",
    email: "grigorieva@example.com",
    familyMembers: [
      {
        name: "Григорьев Андрей Сергеевич",
        relationship: "муж",
        dateOfBirth: "1991-02-14",
      },
      {
        name: "Григорьев Алексей Андреевич",
        relationship: "сын",
        dateOfBirth: "2020-09-12",
      },
    ],
    education: [
      {
        institution: "Южный федеральный университет",
        degree: "Бакалавр",
        year: 2014,
      },
    ],
    employment: [
      {
        company: "ООО Вектор",
        position: "Маркетолог",
        startDate: "2015-03-01",
        endDate: "н.в.",
      },
    ],
    position: "Руководитель отдела маркетинга",
    age: currentYear - 1992,
    helpDeskRequests: 7,
    socialMedia: [
      { platform: "Facebook", link: "https://facebook.com/grigorieva" },
    ],
    hobbies: "Танцы, фотография",
    medicalInfo: {
      bloodType: "AB-",
      allergies: "Пыльца",
      chronicDiseases: "Нет",
    },
  },
  {
    id: 9,
    fullName: "Смирнова Татьяна Николаевна",
    dateOfBirth: "1981-12-09",
    address: "г. Красноярск, ул. Ленина, д. 13",
    phone: "+7 (391) 987-65-43",
    email: "smirnova@example.com",
    familyMembers: [
      {
        name: "Смирнов Николай Петрович",
        relationship: "муж",
        dateOfBirth: "1980-08-02",
      },
    ],
    education: [
      {
        institution: "Сибирский федеральный университет",
        degree: "Бакалавр",
        year: 2003,
      },
    ],
    employment: [
      {
        company: "ЗАО Сибирь",
        position: "Экономист",
        startDate: "2004-05-10",
        endDate: "н.в.",
      },
    ],
    position: "Главный экономист",
    age: currentYear - 1981,
    helpDeskRequests: 8,
    socialMedia: [{ platform: "VK", link: "https://vk.com/smirnova" }],
    hobbies: "Шитье, садоводство",
    medicalInfo: {
      bloodType: "O+",
      allergies: "Морепродукты",
      chronicDiseases: "Артрит",
    },
  },
  {
    id: 10,
    fullName: "Николаев Николай Сергеевич",
    dateOfBirth: "1983-01-29",
    address: "г. Челябинск, ул. Труда, д. 18",
    phone: "+7 (351) 654-32-87",
    email: "nikolaev@example.com",
    familyMembers: [],
    education: [
      {
        institution: "Челябинский государственный университет",
        degree: "Магистр",
        year: 2005,
      },
    ],
    employment: [
      {
        company: "ООО Сталь",
        position: "Директор",
        startDate: "2006-07-01",
        endDate: "н.в.",
      },
    ],
    position: "Генеральный директор",
    age: currentYear - 1983,
    helpDeskRequests: 10,
    socialMedia: [
      { platform: "Instagram", link: "https://instagram.com/nikolaev" },
    ],
    hobbies: "Автомобили, плавание",
    medicalInfo: {
      bloodType: "A+",
      allergies: "Нет",
      chronicDiseases: "Гастрит",
    },
  },
  {
    id: 11,
    fullName: "Шмагин Владислав Анатольевич",
    phone: "+7 (235) 433-34-88",
    familyMembers: [],
    education: [
      {
        institution: "Пермский государственный университет",
        degree: "Магистр",
        year: 2005,
      },
    ],
    employment: [
      {
        company: "ООО УРАЛКаЛИЙ",
        position: "Директор",
        startDate: "2008-05-01",
        endDate: "н.в.",
      },
    ],
    position: "Генеральный директор",

    socialMedia: [
      { platform: "Instagram", link: "https://instagram.com/nikolaev" },
    ],
  },
];

export default citizens;
