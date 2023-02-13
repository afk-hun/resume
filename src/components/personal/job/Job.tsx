import Description from "../../../templates/description/Description";
import styles from "./Job.module.css";

type job = {
  interval: string;
  position: string;
  company: string;
  jobDescription: string;
};

function Job(props: job) {
  return (
    <div className={styles.container}>
      <p>{props.interval}</p>
      <Description
        className="black"
        title={props.position}
        subtitle={props.company}
        description={props.jobDescription}
      />
    </div>
  );
}

export default Job;
