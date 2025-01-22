import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm p-1 border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-border rounded-lg">
      {/* Card Content (Image and Description) */}
      <div className="bg-black text-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
