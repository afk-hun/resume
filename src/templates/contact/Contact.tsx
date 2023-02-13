import styles from './Contact.module.css';

function Contact(props: { title: string, subtitle: string }) {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.yellowmarker}></div>
                <div className={styles.titlebox}>
                    <p className={styles.title}>{props.title}</p>
                </div>
            </div>
            <div className={styles.subcontainer}>
                <div className={styles.subtitle}>{props.subtitle}</div>
            </div>
        </div>

    );
}

export default Contact;