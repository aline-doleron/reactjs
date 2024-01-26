import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }: { content: string, onDeleteComment: (comment: string) => void }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);

    }

    function handleLikeClick() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/aline-doleron.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorNameAndTime}>
                            <strong>Aline Doleron</strong>
                            <time title=" 11 de Maio as 8:13" dateTime="2022-05-11 08:12:23">Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}></Trash>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>


                <footer>
                    <button onClick={handleLikeClick}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}