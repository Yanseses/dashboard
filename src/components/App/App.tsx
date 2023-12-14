import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Finalize, Results, NotFound } from "../../pages";
import { Layout } from "../Layout/Layout";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Dashboard} />
        <Route path="/finalize/:id" Component={Finalize} />
        <Route path="/results/:id" Component={Results} />
        <Route path="*" Component={NotFound} />
      </Route>
    </Routes>
  )
}