import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/aline-doleron.png" />
                    <div className={styles.authorInfo}>
                        <strong>Aline DOleron</strong>
                        <span>Web Developer</span>

                    </div>
                </div>

                <time title=" 11 de Maio as 8:13" dateTime="2022-05-11 08:12:23">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>jane.design/doctorcare 👉 </p>

                <p> #novoprojeto #nlw #rocketseat </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea placeholder="Deixe seu comentario" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article >
    )
}