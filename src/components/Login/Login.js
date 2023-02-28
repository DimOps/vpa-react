import styles from "./Login.module.css"

const LoginPage = () => {

    return (
        <section className={styles.LoginWrapper}>



                <article>
                    <h4 className={styles.LoginTitle}>Login to your account</h4>
                    <hr/>
                    <form>
                        <p>Username</p>  
                        <p>
                            <input type="text" name="username" />
                        </p>
                        <p>Password</p>
                        <p>
                            <input type="password" name="password" />
                        </p>
                        
                        <p>
                            <input className={styles.Btn} type="submit" value="Submit" />
                        </p>
                    </form>
                </article>

        </section>
    );

}

export default LoginPage;