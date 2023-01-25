import { About, Contact, Home, NavBar, Skills, Works } from "./components";
function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-screen">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
