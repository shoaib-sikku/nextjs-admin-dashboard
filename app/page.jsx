import Link from "next/link"
import styles from "@/app/ui/home/home.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Link href={'/dashboard'} className={styles.link}>Go to Dashboard</Link>
    </div>
  )
}

export default Homepage