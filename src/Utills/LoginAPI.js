export const authenticateUser = async (credentials) => {
    try {
        //console.log(credentials);
        const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Authentication failed:", response.status, data.message);
        return { success: false, message: data.message || "Authentication error" };
      }
  
      //console.log("Token received:", data.token);
      return { success: true, token: data.token, message: "Login successful" };
    } catch (error) {
      console.error("Error in authenticateUser:", error.message);
      return { success: false, message: "Network error: Unable to connect to the server" };
    }
  };
  