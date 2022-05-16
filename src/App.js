import { useState } from "react";
import Navbar from "./components/Navbar";
import AddModal from "./components/AddModal";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div className="bg-dark-bg min-h-screen">
      <div className="logo"></div>
      <div className="filter"></div>
      <div className="list text-big"></div>
      {openAddModal && <AddModal />}
      <Navbar setOpenAddModal={setOpenAddModal} />
    </div>
  );
}

export default App;
