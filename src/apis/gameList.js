import { api } from "./api";

export const getGameList = async () => {
  const response = await api.get("/game-list");
  return response;
};
