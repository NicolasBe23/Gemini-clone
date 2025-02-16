import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import AlertMessage from "./components/Alert/AlertMessage";

const App = () => {
  return (
    <>
      <AlertMessage />
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
