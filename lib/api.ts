export async function getProducts() {
  const response = await fetch(
    "https://linenaura.onrender.com/api/products/",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}