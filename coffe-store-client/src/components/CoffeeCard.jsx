import React from "react";

const CoffeeCard = ({ coffee }) => {
    const { name, chef, category, taste, detail, supplier, photo } = coffee;

    return (
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full max-w-lg transition-transform transform hover:scale-105 hover:shadow-lg">

            {/* Left: Image */}
            <div className="w-24 h-24">
                <img
                    src={photo}
                    alt={name || "Coffee Image"}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Middle: Coffee Details */}
            <div className="flex flex-col gap-1 flex-grow px-4">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <h3 className="text-md text-gray-600">By {chef}</h3>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Taste:</span> {taste}
                </p>
                <p className="text-sm text-gray-500 truncate w-56">
                    <span className="font-semibold">Supplier:</span> {supplier}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    <span className="font-semibold">Details:</span> {detail}
                </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-2">
                <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    View
                </button>
                <button className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                    Edit
                </button>
                <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
