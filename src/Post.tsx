export function Post({ author, content }: { author: string, content: string }) {
    return (
        <>
            <strong>{author}</strong>
            <p>{content}</p>
        </>
    )


}