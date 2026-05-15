const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://linenaura.onrender.com";

export async function getProducts() {
  const response = await fetch(
    `${API_URL}/api/products/`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}