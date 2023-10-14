const apiResponse = {
  status: "success",
  data: {
    users: [
      {
        id: 1,
        attributes: {
          name: "Alice",
          age: 25,
          contact: { email: "alice@example.com" },
          role: "User",
          score: 120,
        },
      },
      {
        id: 2,
        attributes: {
          name: "Bob",
          age: 30,
          contact: { email: "bob@example.com" },
          role: "User",
          score: 150,
        },
      },
      {
        id: 3,
        attributes: {
          name: "Charlie",
          age: 35,
          contact: { email: "charlie@example.com" },
          role: "Admin",
          score: 200,
        },
      },
      {
        id: 4,
        attributes: {
          name: "David",
          age: 40,
          contact: { email: "david@example.com" },
          role: "User",
          score: 180,
        },
      },
      {
        id: 5,
        attributes: {
          name: "Eve",
          age: 45,
          contact: { email: "eve@example.com" },
          role: "Admin",
          score: 220,
        },
      },
      {
        id: 6,
        attributes: {
          name: "Frank",
          age: 50,
          contact: { email: "frank@example.com" },
          role: "User",
          score: 140,
        },
      },
      {
        id: 7,
        attributes: {
          name: "Grace",
          age: 55,
          contact: { email: "grace@example.com" },
          role: "User",
          score: 160,
        },
      },
      {
        id: 8,
        attributes: {
          name: "Hank",
          age: 60,
          contact: { email: "hank@example.com" },
          role: "Admin",
          score: 210,
        },
      },
      {
        id: 9,
        attributes: {
          name: "Ivy",
          age: 65,
          contact: { email: "ivy@example.com" },
          role: "User",
          score: 170,
        },
      },
      {
        id: 10,
        attributes: {
          name: "Jack",
          age: 70,
          contact: { email: "jack@example.com" },
          role: "Admin",
          score: 230,
        },
      },
    ],
  },
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(apiResponse);
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
