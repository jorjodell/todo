import { useState } from "react";
import Navbar from "./components/Navbar";
import AddModal from "./components/AddModal";
import ToggleBtn from "./components/ToggleBtn";
import Calendar from "./components/Calendar";
import Todos from './components/Todos'

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [todos, setTodos] = useState([])

  return (
    <div className="bg-dark-bg min-h-screen pb-24">
      <div className="logo"></div>
      <ToggleBtn />
      <div className="px-8">
        <Calendar />
        <Todos />
      </div>
      {openAddModal && <AddModal onClose={() => setOpenAddModal(false)} />}
      <Navbar setOpenAddModal={setOpenAddModal} />
    </div>
  );
}

export default App;
