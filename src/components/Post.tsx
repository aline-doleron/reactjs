import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, useState } from 'react';

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

export interface PostType {
    id?: number;
    author: Author;
    publishedAt: Date;
    content?: { type: 'paragraph' | 'link'; content: string }[]
}


export function Post({ author, content, publishedAt }: PostType) {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleAddComment(event: FormEvent) {
        event?.preventDefault();

        setComments([
            ...comments,
            newComment
        ]);

        setNewComment('');
    }

    function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
    }

    function deleteComment(deletedComment: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== deletedComment
        });

        setComments(commentsWithoutDeletedOne);

    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content?.map(item => {
                    if (item.type === 'link') {
                        return (
                            <p key={item.content}><a href='#'>{item.content}</a></p>
                        )
                    } else {
                        return (
                            <p key={item.content}>{item.content}</p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleAddComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea name="comment" value={newComment} onChange={handleCommentChange} placeholder="Deixe seu comentario" required />

                <footer>
                    <button type="submit" disabled={newComment.length === 0}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment onDeleteComment={deleteComment} key={comment} content={comment} />
                    )
                })}

            </div>
        </article >
    )
}