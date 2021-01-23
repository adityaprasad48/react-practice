import axios from "axios";

let userInfo = {};


export const handleUser = () => {
  // const userInfo = Cookies.get("USER");
  // const data = userInfo ? JSON.parse(userInfo) : "notFound";
  // console.log(data);
  axios
    .post(
      "/authenticate",
      {
        email: "aditya@gmail.com",
        password: "123456789",
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer`,
        },
      }
    )
    .then(({ data }) => {
      userInfo = {
        authKey: data?.auth_token,
        name: data?.user?.name,
        email: data?.user?.email,
        userId: data?.user?.id,
      };
      console.log( userInfo.authKey);
    })
    .catch((error) => {
      console.error(error);
    });
};
