import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

const App = () => {
  return (
    <>
      <AuthRoutes />
      <DashboardRoutes />
    </>
  );
};

export default App;
