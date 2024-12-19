export const mockData = {
  category: {
    name: "Камеры",
    items: [
      {
        id: 1,
        name: "Камера 1",
        count: 1,
        cost: 1000,
      },
      {
        id: 2,
        name: "Камера 2",
        count: 2,
        cost: 2000,
      },
    ],
  },
  optics: {
    name: "Оптика",
    items: [
      {
        id: 3,
        name: "Объектив 1",
        count: 2,
        cost: 1000,
      },
      {
        id: 4,
        name: "Объектив 2",
        count: 3,
        cost: 500,
      },
    ],
  },
};

export const otherParams = [
  {
    name: "Стоимость аренды",
    value: 8500,
  },
  {
    name: "Количество смен",
    value: 2,
  },
  {
    name: "Общая стоимость аренды",
    value: 17000,
  },
  {
    name: "Скидка (%)",
    value: 20,
  },
  {
    name: "Итого по аренде оборудования",
    value: 13600,
  },
]

export const engineeringAssistanceMockData = [
  {
    id: 1,
    name: "Расходные материалы",
    count: 1,
    cost: 5000
  },
  {
    id: 2,
    name: "Осветитель (Смена 10 часов) (переработки 1500р/час",
    count: 2.5,
    cost: 9000
  },
  {
    id: 3,
    name: "Инженер-техник/логгер (Смена 12 часов) (переработки 1500р/час)",
    count: 2.5,
    cost: 15000
  }
]