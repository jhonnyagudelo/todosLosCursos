import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
const AppRouter = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </>
  );
};

export { AppRouter };
