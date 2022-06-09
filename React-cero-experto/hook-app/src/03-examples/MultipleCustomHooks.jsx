import React from "react";
import { useFetch } from "./useFetch";
import { Alert, AlertTitle } from "@mui/material";
const MultipleCustomHoosk = () => {
  const state = useFetch("https://www.breakingbadapi.com/api/quotes/1");
  console.log(state);
  return (
    <>
      <h1>BreakingBad</h1>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        <strong>Loading</strong>
      </Alert>
    </>
  );
};
export { MultipleCustomHoosk };
