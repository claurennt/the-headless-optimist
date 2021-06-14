import "./App.css";

import * as contentful from "contentful";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import { useParams } from "react-router-dom";

import Header from "./Header";

// const aValue = "i am a secret value";
// const aTemplateLiteral = `${aValue}`;
// // `${}`

console.log(process.env.REACT_APP_CONTENTFUL_TOKEN);
// spaceid

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: `${process.env.REACT_APP_CONTENTFUL_SPACEID}`,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: `${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
// .getEntry("6Juy1ErMKVXwyOKuYnfTOw")
// .then((entry) => console.log(entry))
// .catch((err) => console.log(err));

function App() {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    async function getContentTypesAsync() {
      const response = await client.getContentTypes();
      console.log({ content_models: response.items });
      //return response;
    }
    async function getEntriesAsync() {
      const response = await client.getEntries();
      console.log({ entries_response: response });
      console.log({ first_item_id: response.items[0].sys.id });
      //console.log({ response.items.})
      //TODO: use useState for setting list of articles generated from this response
      setBlogPosts(response.items);
      console.log(response.items);
      //return response;
    }
    getContentTypesAsync();
    getEntriesAsync();
  }, []);

  // <Route path="/:tag">
  //   <BlogPosts blogPosts={blogPosts} />
  // </Route>;

  if (blogPosts && true) {
    return (
      <>
        <div className="App">
          <Header />
          {/* NavBar */}
          <div className="blogposts-container">
            <Switch>
              <Route path="/:entry_id">
                <BlogPosts blogPosts={blogPosts} />
              </Route>
              <Route path="/:tag">
                <BlogPosts blogPosts={blogPosts} />
              </Route>
              <Route path="/">
                <BlogPosts blogPosts={blogPosts} />
              </Route>
            </Switch>
          </div>
          {/* Footer */}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="App">
        <Header />
        {/* NavBar */}
        <div className="blogposts-container">
          <p>Oops! Couldn't receive blogpost data.</p>
        </div>
        {/* Footer */}
      </div>
      <Switch>
        <Route path="/:entry_id"></Route>
      </Switch>
    </>
  );
}

export default App;
