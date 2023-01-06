import { getUserID, getUserToken } from "./auth";

const postJsonOpt = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

const postJsonWithCreds = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-ID": getUserID(),
      Token: getUserToken(),
    },
    body: JSON.stringify(data),
  };
};

const getJsonWithCreds = () => {
  return {
    method: "GET",
    headers: {
      "User-ID": getUserID(),
      Token: getUserToken(),
    },
  };
};

export { postJsonOpt, postJsonWithCreds, getJsonWithCreds };
