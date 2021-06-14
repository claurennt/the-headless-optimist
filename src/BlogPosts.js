import React from "react";
import Markdown from "markdown-to-jsx";
import moment from "moment";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";

export default function BlogPosts({ blogPosts, sitePath }) {
  const location = useLocation();
  console.log(location);
  console.log({ sitePath: sitePath });

  const { entry_id } = useParams();
  const { tag } = useParams();

  console.log({ tag: tag });

  function tagsContainGivenTag(givenTags, oneTag) {
    let tagsArray = [];
    tagsArray = givenTags;
    let foundTag = false;
    for (const aTag in tagsArray) {
      if (oneTag.toLowerCase() === aTag.sys.id.toLowerCase()) {
        console.log("Found a fitting tag!");
        foundTag = true;
      }
    }
    return foundTag;
  }

  return blogPosts
    .filter((post) =>
      entry_id
        ? entry_id === post.sys.id
        : tag
        ? tagsContainGivenTag(post.metadata.tags, tag)
        : true
    )
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
