import { ISearch } from '@utils/models';
import axios, { AxiosInstance } from 'axios';
import { createContext, ReactNode, useContext } from 'react';

export interface IAxiosContext {
  apiClient: AxiosInstance;
  getSearch: (searchText: string) => Promise<ISearch | null>;
}

const DefaultValues: IAxiosContext = {
  apiClient: axios,
  getSearch: function (searchText: string): Promise<ISearch | null> {
    throw new Error('Function not implemented.');
  }
};

const AxiosContext = createContext<IAxiosContext>(DefaultValues);

export function useAxios() {
  return useContext(AxiosContext);
}

interface IProps {
  children: ReactNode;
}

export function AxiosProvider({ children }: IProps) {
  const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const getSearch = async (searchText: string) : Promise<ISearch | null> => {
    console.log(searchText);
    const res = await apiClient.get<ISearch>(
      `/search?term=${searchText}&media=music`
    );
    console.log(process.env.REACT_APP_API_URL);
    return res.data;
  };

  const value = {
    apiClient,
    getSearch
  };

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
}
