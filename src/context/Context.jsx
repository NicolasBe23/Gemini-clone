import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [savedResponses, setSavedResponses] = useState(new Map());

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let finalPrompt = prompt ?? input;
    if (!finalPrompt.trim()) return;

    setRecentPrompt(finalPrompt);

    if (savedResponses.has(finalPrompt)) {
      setResultData(savedResponses.get(finalPrompt));
      setLoading(false);
      return;
    }

    if (!prevPrompts.includes(finalPrompt)) {
      setPrevPrompts((prev) => [...prev, finalPrompt]);
    }

    try {
      const response = await run(finalPrompt);

      let responseArray = response.split("**");
      let newResponse = responseArray
        .map((item, index) => (index % 2 === 1 ? `<b>${item}</b>` : item))
        .join("");

      let newResponse2 = newResponse.replace(/\*/g, "<br>");
      let newResponseArray = newResponse2.split(" ");

      let formattedResponse = "";
      newResponseArray.forEach((word, i) => {
        delayPara(i, word + " ");
        formattedResponse += word + " ";
      });

      setSavedResponses((prev) =>
        new Map(prev).set(finalPrompt, formattedResponse)
      );
    } catch (error) {
      console.error("Erro ao processar resposta:", error);
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
