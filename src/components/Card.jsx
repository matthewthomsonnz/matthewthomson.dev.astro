import styles from './../styles/components.module.scss'

export default function Card(props) {
    return <div class={styles.card}>{props.children}</div>;
  }