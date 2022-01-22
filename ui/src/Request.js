import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjNiYzM3ZTZhMGQ5NWNkZWZlYjk0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTMxMjE0NSwiZXhwIjoxNjM5NTcxMzQ1fQ.-n3D1RYA6vf-K7pBIPH19BnpxAAwUZGbo35gNcjapiw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer${Token}` },
});
