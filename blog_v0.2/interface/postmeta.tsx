interface MetaPost {
    title : string,
    created : string,
    slug : string,
    author : string,
    tag : Array<string>,
    catagory : string,
    contentHtml : string,
}

interface PostProp {
    postData : MetaPost
}

interface ImageData { 
    imageData : string,
}

interface GetIdParams {
    params :  {
        id : string,
    }
}