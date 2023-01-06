const postJsonOpt = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

const postJsonWithCreds = (data, token, uid) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-ID": uid,
      Token: token,
    },
    body: JSON.stringify(data),
  };
};

const getJsonWithCreds = (token, uid) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-ID": uid,
      Token: token,
    },
  };
};

export { postJsonOpt, postJsonWithCreds, getJsonWithCreds };
