import { Link } from "react-router-dom";

import styles from "./VehicleListPage.module.css"
const VehicleListPage = () => {

    return (
        <section className={styles.ListItem}>
            
                <div className={styles.LeftInfo}>
                    <img className={styles.Image} src="logo192.png" alt='Your Car Here' />
                    <Link>
                        <div className={styles.Btn}>
                            Update
                        </div>
                    </Link>
                </div>

                <div className={styles.Info}>
                    
                    <article>

                        <Link style={{textDecoration: 'none'}}>
                            <h4 className={styles.ListItemTitle}>BMW M3 F80 Competition</h4>
                        </Link>

                        <hr className={styles.ListItemHr} />

                        <p className={styles.SecondaryDetails}>
                            <span>510hp</span>
                            <span>Gasoline</span>
                            <span>All-Wheel-Drive</span>
                            <span>Automatic</span>
                        </p>

                    </article>

                </div>
        </section>
    );

}

export default VehicleListPage;