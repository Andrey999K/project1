export const mockData = {
  cameras: [
    {
      id: "1",
      name: "Камера 1",
      price: "1000",
    },
    {
      id: "2",
      name: "Камера 2",
      price: "1500",
    },
    {
      id: "3",
      name: "Камера 3",
      price: "2000",
    },
    {
      id: "4",
      name: "Камера 4",
      price: "3000",
    },
  ],
  optics: [
    {
      id: "1",
      name: "Объектив 1",
      price: "500",
      binding: [
        {
          id: "1",
          name: "Камера 1",
          value: "5",
        },
        {
          id: "2",
          name: "Камера 2",
          value: "7",
        },
      ],
    },
    {
      id: "2",
      name: "Объектив 2",
      price: "1000",
      binding: null,
    },
    {
      id: "3",
      name: "Объектив 3",
      price: "2000",
      binding: null,
    },
  ],
};
