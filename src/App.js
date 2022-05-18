import { useState } from "react";
import Navbar from "./components/Navbar";
import AddModal from "./components/AddModal";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div className="bg-dark-bg min-h-screen">
      <div className="logo"></div>
      <ToggleBtn />
      <div className="filter"></div>
      <div className="list text-big"></div>
      {openAddModal && <AddModal />}
      <Navbar setOpenAddModal={setOpenAddModal} />
    </div>
  );
}

export default App;
