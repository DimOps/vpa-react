import { Link } from "react-router-dom";

import styles from "./VehicleDetailsPage.module.css"
const VehicleDetailsPage = () => {

    return (
        <div className={styles.Details}>
            <div className="LeftInfo">
                <img className={styles.Image} src="logo192.png" alt='Your Car Here' />
                <Link>
                    <div className={styles.Btn}>
                        Update
                    </div>
                </Link>
                <Link>
                    <div className={styles.Btn}>
                        Add Section
                    </div>
                </Link>
            </div>


            <div className={styles.Info}>
                <article>
                    <h4>BMW M3 F80 Competition</h4>
                    <p>
                        <span>hp</span>
                        <span>engine</span>
                        <span>drive</span>
                        <span>transmission</span>
                    </p>
                </article>

                <div>
                    <hr />
                    <Link>
                        <div className={styles.Btn}>
                            Maintenance Record
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.Btn}>
                            Care
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.Btn}>
                            To Fix
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.Btn}>
                            Notes
                        </div>
                    </Link>
                </div>
                <div className="Secitons">

                </div>
            </div>

        </div>
    );

}

export default VehicleDetailsPage;