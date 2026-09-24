async function testConnection() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=2665a8bc",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

testConnection();
