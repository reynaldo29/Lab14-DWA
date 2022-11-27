import instance from "./config";

export const get = async (url) => {
  try {
    return await (
      await instance.get(url)
    ).data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, body) => {
  try {
    return await (
      await instance.post(url, JSON.stringify(body))
    ).data;
  } catch (error) {
    return error;
  }
};
