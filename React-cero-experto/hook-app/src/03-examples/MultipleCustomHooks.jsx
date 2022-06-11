import React from "react";
import { useFetch } from "./useFetch";
import { useCounter } from "../01-useState/hook/useCounter";
import {
  Alert,
  AlertTitle,
  Card,
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
const MultipleCustomHoosk = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad</h1>
      <hr />
      {loading ? (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          <strong>Loading</strong>
        </Alert>
      ) : (
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={5}>
              <Typography fontWeight={700}>{author}</Typography>
              <Typography variant="body2" color="text.secondary">
                {quote}
              </Typography>
            </Stack>
          </Box>
        </Card>
      )}
      <Button variant="contained" onClick={increment}>
        Siguiente quote
      </Button>
    </>
  );
};
export { MultipleCustomHoosk };
