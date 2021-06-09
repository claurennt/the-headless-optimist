import "./App.css";
// import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import * as contentful from "contentful";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import BlogPost from "./BlogPost";

import Header from "./Header";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const aValue = "i am a secret value";
const aTemplateLiteral = `${aValue}`;
// `${}`

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

  const monthToStr = (monthNum) => {
    switch (monthNum) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {/* NavBar */}
        <div className="blogposts-container">
          {blogPosts &&
            blogPosts.map((post) => {
              return <BlogPost post={post} />;
            })}
        </div>
        {/* Footer */}
      </div>
    </ThemeProvider>
  );
}

export default App;
