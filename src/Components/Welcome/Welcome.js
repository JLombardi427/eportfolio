import React from "react";
import { Link } from "react-router-dom";

import styles from "./Welcome.module.css";

function Welcome(props) {
	return (
		<div className={styles.welcomeContainer}>
			<div className={styles.welcomeFoodImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/xA3zulu.jpg"
					alt=""
				/>
				<h2>BIRTHDAYS</h2>
			</div>
			<div className={styles.welcomeExpImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/xA3zulu.jpg"
					alt=""
				/>
				<h2>ANNIVERSARIES</h2>
			</div>
			<div className={styles.welcomeLikeImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/xA3zulu.jpg"
					alt=""
				/>
				<h2>VACATIONS</h2>
			</div>
			<div className={styles.welcomePostImg}>
				<img
					className={styles.welcomeImg}
					src="https://i.imgur.com/xA3zulu.jpg"
					alt=""
				/>
				<h2>ACTIVITIES</h2>
			</div>

			<div className={styles.welcomeTitleContainer}>
				<div className={styles.welcomeText}>
					<h1 className={styles.welcomeTitle}>Calen-Dos</h1>
					<Link to="/home" className={styles.welcomeEnter}>
						<h3 className={styles.welcomeH3}>Click Here to Enter!</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
