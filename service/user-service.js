export async function userService(token){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const res = await fetch(`${BASE_URL}/user`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await res.json();
    console.log("data:", data);
    return data;
  } catch (error){
    return [];
  }
}