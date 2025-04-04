export async function registerService ({ username, email, password}){
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log("email:", email);
  console.log("pass:",password);
  console.log("username:", username);
  const res = fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    })
  })

  const data = (await res).json();

  console.log("Data in registerService:", data);

  return data;
}