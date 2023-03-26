import "./App.css";
import Navbar from "./Components/Navbar";
import NoticeBoard from "./Components/NoticeBoard";
import Sidebar from "./Components/Sidebar";
import Task from "./Components/Task";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Task />
      <Sidebar />
      <NoticeBoard />
    </div>
  );
}

export default App;
