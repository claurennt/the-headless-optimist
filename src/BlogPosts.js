import React from "react";

import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import qs from "querystringify";
import Card from "react-bootstrap/Card";

export default function BlogPosts({ blogPosts }) {
  const { entry_id } = useParams();
  const { tag } = useParams();
  const { author } = useParams();
  let location = useLocation();
  let search = location.search;
  let query = qs.parse(search).searchField;
  console.log({ q: query });
  //keep filtered posts
  //return filtered posts if at least 1 available
  //return text saying something like "no articles found" otherwise
  const filteredBlogPosts = blogPosts
    .filter((post) => {
      if (query) {
        return (
          post.fields.body.toLowerCase().includes(query.toLowerCase()) ||
          post.fields.title.toLowerCase().includes(query.toLowerCase())
        );
      } else if (entry_id) {
        return entry_id === post.sys.id;
      } else if (tag) {
        try {
          return tag === post.metadata.tags[0].sys.id;
        } catch (ex) {
          return false;
        }
      } else if (author) {
        return author === post.fields.postAuthor;
      } else {
        return post;
      }
    })
    .map((post) => {
      console.log("returning post:\n");
      console.log(post);
      return <IndividualPost post={post} detailed={entry_id ? true : false} />;
    });

  if (filteredBlogPosts) {
    if (filteredBlogPosts.length >= 1) {
      //at least one result => render
      console.log(filteredBlogPosts.length + " articles found.");
      return filteredBlogPosts;
    } else {
      //no results found, give feedback
      if (query) {
        //query search wanted but no results found
        return (
          <div className="query-noresults-feedback">
            <Card bg="warning">
              <Card.Header>
                Oops! Couldn't find any blog articles for your search query.
              </Card.Header>
            </Card>
          </div>
        );
      } else {
        return (
          <div className="generic-noresults-feedback vh-100">
            <Card bg="danger">
              <Card.Header>
                Oops! Couldn't find any blog articles. Our codemonkeys are hard
                at work fixing this issue!
              </Card.Header>
            </Card>
          </div>
        );
      }
    }
  } else {
    return (
      <div className="generic-noresults-feedback">
        <Card bg="danger">
          <Card.Header>
            Oops! Couldn't find any blog articles. Our codemonkeys are hard at
            work fixing this issue!
          </Card.Header>
        </Card>
      </div>
    );
  }
}
