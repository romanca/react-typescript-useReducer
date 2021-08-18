import Layout from "./Components/Layout";
import Theme from "./Providers/ThemeProvider";

function App() {
  return (
    <Theme>
      <Layout />
    </Theme>
  );
}

export default App;
