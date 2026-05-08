export default function ProductCard() {
  return (
    <div className="bg-white p-6 w-72 shadow-sm">

      <img
        src="/bed1.jpg"
        className="w-full h-60 object-cover mb-4"
      />

      <h2 className="font-serif text-lg">
        Premium Cotton Bedsheet
      </h2>

      <p className="mt-2 text-gray-700">
        ₹1499 
        <span className="line-through text-gray-400 ml-2">
          ₹2499
        </span>
      </p>

    </div>
  );
}