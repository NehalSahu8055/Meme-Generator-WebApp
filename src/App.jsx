import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

const App = () => {
  return (
    //fragment
    <div className="font-['Karla'] flex flex-col justify-center min-h-screen max-w-xl mx-auto py-3">
      <Header />
      <Content />
    </div>
  );
};

export default App;
