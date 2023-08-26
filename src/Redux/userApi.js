import axios from "axios";

export const addUserApi = async (payload) => {
  console.log(payload);
  let res = await axios.post(
    "https://agency-backend-e2v8.onrender.com/users/register",
    payload
  );
  return res.data;
};
export const loginApi = async (payload) => {
  
  let res = await axios.post(
    "https://agency-backend-e2v8.onrender.com/users/login",
    payload
  );
  return res.data;
};

export const postApi = async () => {
  let res = await axios.get("https://agency-backend-e2v8.onrender.com/posts");
  return res.data;
};

export const deletePostApi = async (id) => {
  let res = await axios.delete(
    `https://good-blue-cygnet-cuff.cyclic.app/carts/delete/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};
