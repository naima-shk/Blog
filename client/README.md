# Frontend Blog UI

## Want to add a blog post?

### Follow the steps below to add a new blog post.

1. Create a folder inside `src/client/assets/blog-posts` where we will keep our blog post.
 **folder name must be the same as id of post!**
```
cd client/src/assets/blog-posts
mkdir example-post
```

2. Create a `index.mdx` file inside the folder created in step 1.
```
touch index.mdx
```

2. Write a post in the index mdx file created in step 2!
**blog post must export a metadata object which describes the post**
```markdown
export const metadata = {
    id: "example-post" // id must be the same as the folder name we created in step 1!
    title: "Example Post!!! :)"
    author: "You!"
    date: "Today!"
    description: "For README.md!"
};

# Example Post
this is a post for _example_ purposes
notice I am using **markdown** syntax! 
```

2. Export blog post created in step 2 from `blog-posts/index.js` file.
```javascript
import { metadata as firstPostMetdata } from "./first-post/index.mdx";
import { metadata as examplePostMetadata } from "./example-post/index.mdx"; // import the metadata from post we just created

export default [
    firstPostMetdata,
    examplePostMetadata // export the metadata from the post we just created
]
```

### AND THAT'S IT! We just created a new blog post!
