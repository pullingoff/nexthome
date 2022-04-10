import styles from "../styles/Loading.module.scss";
import logo from "../public/logo.svg"
import Image from "next/image";

const Loading = (props: {
    loading: boolean
}) => {
    return (
        <div className={props.loading ? styles.body_loading : styles.none}>
            <div className={styles.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading