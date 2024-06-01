import { createContext } from "react";
import run from "../config/gemini"

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent("what is react js")

    const values = {};

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
