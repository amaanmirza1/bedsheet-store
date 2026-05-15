import { getProducts } from "@/lib/api";

export default async function CollectionsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Our Collections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-2">
                ₹{product.price}
              </p>

              <button className="mt-4 bg-black text-white px-5 py-2 rounded-xl">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}