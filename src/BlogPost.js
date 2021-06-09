import React from "react";
import Markdown from "markdown-to-jsx";
import moment from "moment";

export default function BlogPost({ post }) {
  const trimmedBlogPostBody = post.fields.body.slice(0, 300) + `...`;
  console.log(trimmedBlogPostBody);

  return (
    <>
      <div className="blogpost-wrapper" key={post.sys.id}>
        <h2 className="blogpost-title">{post.fields.title}</h2>
        <Markdown className="blogpost-body">{trimmedBlogPostBody}</Markdown>
        <p className="blogpost-info">
          {"published on "}
          <a>{moment(post.fields.publishingDate).format("MMM Do YYYY")}</a>
          {" by "}
          <a href="./author/TODO_ROUTING">{post.fields.postAuthor}</a> {" in "}{" "}
          <a className="blogpost-location">{"Neverland"}</a>
        </p>
      </div>
    </>
  );
}
