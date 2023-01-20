import styles from './Login.module.css'

function Login(){


    return(

    <div className={styles.body}>
            <div className={styles.main}>
                <p className={styles.sign} align="center">Sign in</p>
                <form className={styles.form1}>
                <input className={styles.un} type="text" align="center" placeholder="Username"></input>
                <input className={styles.pass} type="password" align="center" placeholder="Password"></input>
                <a className={styles.submit} align="center">Sign in</a>
                <p className={styles.forgot} align="center"><a href="#">Forgot Password?</a></p>
                </form> 
            </div>
    </div>
    )
}

export default Login

