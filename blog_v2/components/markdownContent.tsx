export default function MarkdownContent({postData} : PostProp) {
    return (        
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    )
}