import "./App.css";
import AppRoutes from "./AppRoutes";
import CustomThemeProvider from "./providers/CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <AppRoutes />
    </CustomThemeProvider>
  );
}

export default App;
