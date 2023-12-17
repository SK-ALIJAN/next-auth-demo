"use client";
import { Provider, ProviderProps } from "react-redux";
import { store } from "./store";

export let ReduxProvider = ({ children }: any) => {
    return <Provider store={ store }> { children } < /Provider>
};
