import { Link } from 'react-router-dom';

import styles from './Header.module.css'

const Header = (props) => {
    const reactElement = (

        <div className={styles.header}>

            
                <Link to="/" style={{textDecoration: 'none'}}>
                <article>VPA</article>
                </Link>
            

            <div>
                <nav>
{/* 
                    <button>My Vehicle</button>
                    <button>Vehicles</button>
                    <button>To Buy</button>
                    <button>Login</button>
                    <button>Logout</button> */}

                </nav>
            </div>

        </div>

    );

    return reactElement;
};

export default Header;