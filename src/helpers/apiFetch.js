// Get Without Authorization
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });


  