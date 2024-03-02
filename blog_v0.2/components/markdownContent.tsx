export default function MarkdownContent({postData} : PostProp) {
    return (        
        <div className="markdown-body bg-white" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    )
}