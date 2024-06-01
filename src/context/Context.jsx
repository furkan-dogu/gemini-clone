import { createContext, useState } from "react";
import run from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPropmts, setPrevPropmts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    const values = {
        prevPropmts,
        setPrevPropmts,
        showResult,
        onSent,
        recentPrompt,
        setRecentPrompt,
        loading,
        resultData,
        input,
        setInput
    };

    return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
