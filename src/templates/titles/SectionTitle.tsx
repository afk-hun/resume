import styles from './SectionTitle.module.css';

function SectionTitle(props: { title: string, className?: string }) {
    return (
        <div className={styles.container}>
            <p className={`${styles.title} ${styles[`${props.className}`]}`}>
                {props.title}
            </p>
            <div className={`${styles.line} ${styles[`${props.className}`]}`} ></div>
        </div>
    );
}

export default SectionTitle;