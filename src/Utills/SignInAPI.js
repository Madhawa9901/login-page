export const registerUser = async (credentials) => {
    try {
        //console.log(credentials);
        const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return { success: false, message: data.message || "Registration error" };
      } else {
        return { success: true, token: data.token, message: "Sign In successful" };
      }
    } catch (error) {
      console.error("Error:", error);
      return { success: false, message: "Network error: Unable to connect to the server" };
    }
  };
