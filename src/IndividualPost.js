import React from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import moment from "moment";

export default function IndividualPost({ post, detailed }) {
  console.log("@@@@@@@post@@@@@@@");
  console.log(post);
  console.log({ detailed: detailed });
  const trimmedBlogPostBody = post.fields.body.slice(0, 300) + `...`;
  console.log({ trimmedBlogPostBody: trimmedBlogPostBody });
  return (
    <>
      <div className="blogpost-wrapper" key={post.sys.id}>
        <h2 className="blogpost-title">{post.fields.title}</h2>
        <Markdown className="blogpost-body">
          {detailed ? post.fields.body : trimmedBlogPostBody}
        </Markdown>
        {!detailed && <Link to={`/${post.sys.id}`}>Read More</Link>}
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
