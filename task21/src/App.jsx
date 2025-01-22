import React from "react";
import Card from "./components/Card";

const App = () => {
  const data = [
    {
      id: 1,
      title: "Shinchan Nohara",
      description: "Does he need a description?",
      image: "https://i.pinimg.com/736x/83/7e/6b/837e6bc8615a254a681988bccac87010.jpg",
    },
    {
      id: 2,
      title: "Doraemon",
      description: "a raccoon dog",
      image: "https://i.pinimg.com/474x/5f/ae/e6/5faee66ede9b7184e3bc69df23f06303.jpg",
    },
    {
      id: 3,
      title: "Kiteretsu",
      description: "Miyoko Nonohana,also known as Miyo-Chan, is Kiteretsu's closest friend and his crush. ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DTYbu5KEN0O5EzdFmiLusw-5T1Y6vLmjzA&s",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
