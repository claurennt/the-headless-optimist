import React from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function IndividualPost({ post, detailed }) {
  const trimmedBlogPostBody = post.fields.body.slice(0, 300) + `...`;
  console.log({ trimmedBlogPostBody: trimmedBlogPostBody });

  return (
    <div className="blogpost-wrapper" key={post.sys.id}>
      <Card bg="light" border="info">
        <Card.Header>
          <h4 className="blogpost-title">{post.fields.title}</h4>
        </Card.Header>
        <Card.Body>
          {detailed && (
            <img
              src={post.fields.titleMedia.fields.file.url}
              alt="Article cover Image"
              className="w-50"
            />
          )}
          <Markdown className="blogpost-body">
            {detailed ? post.fields.body : trimmedBlogPostBody}
          </Markdown>
          {!detailed && (
            <>
              <Button variant="link" href={`/article/${post.sys.id}`}>
                Read More
              </Button>
            </>
          )}
          <footer className="blockquote-footer">
            <p className="blogpost-info small">
              {"published on "}
              <span>
                {moment(post.fields.publishingDate).format("MMM Do YYYY")}
              </span>
              {" by "}
              <Link to={`/author/${post.fields.postAuthor}`}>
                {post.fields.postAuthor}
              </Link>{" "}
              {" in "} <span className="blogpost-location">{"Neverland"}</span>
            </p>{" "}
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
}
