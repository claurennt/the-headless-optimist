import React from "react";

import { useParams } from "react-router-dom";
import IndividualPost from "./IndividualPost";

export default function BlogPosts({ blogPosts }) {
  const { entry_id } = useParams();
  const { tag } = useParams();
  const { postAuthor } = useParams();

  // function tagsContainGivenTag(givenTags, oneTag) {
  //   let tagsArray = [];
  //   tagsArray = givenTags;
  //   let foundTag = false;
  //   for (const aTag in tagsArray) {
  //     if (oneTag.toLowerCase() === aTag.metadata[0].sys.id.toLowerCase()) {
  //       console.log("Found a fitting tag!");
  //       foundTag = true;
  //     }
  //   }
  //   return foundTag;
  // }[2].fields.postAuthor

  return blogPosts
    .filter((post) => {
      if (entry_id) {
        return entry_id === post.sys.id;
      } else if (tag) {
        return tag === post.metadata.tags[0].sys.id;
      } else if (postAuthor) {
        return postAuthor === post.fields.postAuthor;
      }
      return post;
    })
    .map((post) => {
      return <IndividualPost post={post} detailed={entry_id ? true : false} />;
    });
}

// console.log({ entry_id: entry_id });
// console.log({ tag: tag });
// let selectedBlogPost;
// if (blogPosts) {
//   selectedBlogPost = blogPosts.find((item) => item.sys.id == entry_id);
// }
// try {
//   console.log({ selectedBlogPost: selectedBlogPost });
//   console.log({ post: post });

//   );
// } catch (ex) {
//   console.log(ex);
//   //TODO: add feedback for API / website errors like "Oops something went critically wrong with the website!"
//   return (
//     <>
//       <p>Oops something went critically wrong with the website!</p>
//     </>
//   );
// }
