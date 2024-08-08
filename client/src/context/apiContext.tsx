import React, { createContext, useContext } from "react";
import axiosInstance from "../lib/axiosInstance";
import { ApiContextProps } from "./apiContex.interfaces";

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getPokemons = async () => {
    try {
      const response = await axiosInstance.get("/pokemons");
      return response.data;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      throw error;
    }
  };

  const getPokemonById = async (id: string) => {
    try {
      const response = await axiosInstance.get(`/pokemons/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching pokemon by id:", error);
      throw error;
    }
  };

  const postBattle = async (pokemon1Id: string, pokemon2Id: string) => {
    try {
      const response = await axiosInstance.post("/battles", {
        pokemon1Id,
        pokemon2Id,
      });
      return response.data;
    } catch (error) {
      console.error("Error posting battle:", error);
      throw error;
    }
  };

  const getBattles = async () => {
    try {
      const response = await axiosInstance.get("/battles");
      return response.data;
    } catch (error) {
      console.error("Error fetching battles:", error);
      throw error;
    }
  };

  return (
    <ApiContext.Provider
      value={{ getPokemons, getPokemonById, postBattle, getBattles }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
