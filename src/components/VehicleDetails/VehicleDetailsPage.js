import { Link } from "react-router-dom";

import styles from "./VehicleDetailsPage.module.css"
const VehicleDetailsPage = () => {

    return (
        <div className={styles.Details}>
            <section className="UpperSection">
                <div className={styles.LeftInfo}>
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
                            <span>510hp</span>
                            <span>Gasoline</span>
                            <span>All-Wheel-Drive</span>
                            <span>Automatic</span>
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
                </div>
            </section>
            <article className={styles.SectionsInfo}>
                Vehicle's sections
            </article>
            <section className={styles.VehicleSections}>

                <article>
                    <p>
                        Chassis <Link><button className={styles.AddBtn}>add</button></Link>
                    </p>
                    <ul>
                        <li>polished white paint with some lines</li>
                        <li>18' wheels</li>
                        <li>18' wheels</li>
                        <li>18' wheels</li>
                        <li>18' wheels</li>
                    </ul>

                </article>
                <article>
                    <p>
                        Exterior <Link><button className={styles.AddBtn}>add</button></Link>
                    </p>
                    <ul>
                        <li>polished white paint with some lines</li>
                        <li>Foldable mirrors</li>
                        <li>Foldable mirrors</li>
                        <li>Foldable mirrors</li>
                        <li>Foldable mirrors</li>
                        <li>Foldable mirrors</li>
                    </ul>

                </article>
                <article>
                    <p>
                        Interior <Link><button className={styles.AddBtn}>add</button></Link>
                    </p>
                    <ul>
                        <li>Nappa Leather</li>
                        <li>Nappa Leather</li>
                        <li>Nappa Leather</li>
                        <li>Nappa Leather</li>
                        <li>Nappa Leather</li>
                    </ul>

                </article>
                <article>
                    <p>
                        Tuning <Link><button className={styles.AddBtn}>add</button></Link>
                    </p>
                    <ul>

                        <li>Ceramic brakes</li>
                        <li>Ceramic brakes</li>
                        <li>Ceramic brakes</li>
                        <li>Ceramic brakes</li>
                        <li>Ceramic brakes</li>
                    </ul>

                </article>
            </section>
        </div>
    );

}

export default VehicleDetailsPage;