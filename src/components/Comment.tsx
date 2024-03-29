import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react'; 
import { Avatar } from './Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://avatars.githubusercontent.com/u/130615490?v=4" 
            alt="" 
            

            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='22 de Feveiro as 16:35h' dateTime="2024-02-22 16:36:01">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>  
                        </button>
                    </header>

                    <p>
                    {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}