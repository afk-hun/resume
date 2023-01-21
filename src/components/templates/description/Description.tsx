import styles from './Description.module.css';

function Description(props: { title?: string, subtitle?: string, description: string, className?: string }) {
    const wrapedText = props.description.split('|');
    
    return (
        <div className={styles.container}>
            {props.title && <p className={`${styles.title} ${styles[`${props.className}`]}`}>{props.title}</p>}
            {props.subtitle && <p className={`${styles.subtitle} ${styles[`${props.className}`]}`}>{props.subtitle}</p>}
            {wrapedText.map(item => {
                return(
                    <p key={item} className={`${styles.description} ${styles[`${props.className}`]}`}>{item}</p>
                );
            })}
        </div>);
}

export default Description;