import css from './navbar.module.css'

const Navbar = ({ setOpenAddModal }) => {
  return (
    <div className={css.navbar}>
      <button>a</button>
      <button>b</button>
      <button className={css.addBtn} onClick={() => setOpenAddModal(true)}>
        +
      </button>
      <button>c</button>
      <button>e</button>
    </div>
  )
}

export default Navbar;