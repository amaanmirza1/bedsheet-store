export async function getProducts() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/products/",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}