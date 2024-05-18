import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import pug from "./../../public/pug.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={pug} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
