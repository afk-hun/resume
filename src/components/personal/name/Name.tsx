import styles from './Name.module.css';

function Name(props: { name: string, knowledge: string }) {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.knowledge}>{props.knowledge}</p>
            </div>
        </div>
    );
}

export default Name;