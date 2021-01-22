// Get Without Authorization
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });


  const postCustomer = () => {
    axios
      .post("/sales_customers", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer + ${authorization}`,
        },
      })
      .then((res) => {
        console.log("Data sent");
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };