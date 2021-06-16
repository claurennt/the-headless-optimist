import "./App.css";
import * as contentful from "contentful";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import Header from "./Header";
import Footer from "./Footer";
import Authors from "./Authors";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const client = contentful.createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACEID}`,

  accessToken: `${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
});

function App() {
  const [blogPosts, setBlogPosts] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    async function getEntriesAsync() {
      const response = await client.getEntries();
      setIsLoading(false);
      setBlogPosts(response.items);
    }

    getEntriesAsync();
  }, []);

  if (isLoading) {
    return (
      <Loader
        visible={isLoading}
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  } else if (blogPosts) {
    return (
      <>
        <div className="App">
          <Header blogPosts={blogPosts} />

          <div className="blogposts-container">
            <>
              <Route exact path="/">
                {<Redirect to="/home" />}
              </Route>
              <Switch>
                <Route path="/article/:entry_id">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/category/:tag">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/author/:author">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/Authors">
                  <Authors />
                </Route>
              </Switch>
              <Route path="/home">
                <BlogPosts blogPosts={blogPosts} />
              </Route>
            </>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="App">
        <Header />

        <div className="blogposts-container">
          <p>Oops! Couldn't receive blogpost data.</p>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
