
import styles from '../../styles/Navbar.module.css';


const Navbar=()=> {
  return (
    <>
   <nav>   
  <div className={styles.navb}>
     <div className={styles.logo}>
     <img src ="/images/totel.png" alt="Reload page"/>
     </div>
   
     <div className={styles.saveexit}>
     <button className={styles.save}>
      Save&Exit
     </button>
  
  </div>
  </div>
   </nav>
     
    </>
  )
}

export default Navbar



