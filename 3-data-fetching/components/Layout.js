import styles from './Layout.module.css'

const Layout = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Layout
