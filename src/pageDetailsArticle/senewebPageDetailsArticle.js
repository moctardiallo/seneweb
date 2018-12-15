import React, { Component } from "react";

import Article from "../article/senewebArticleDetails";
import PostsRecents from "./postsRecents/senewebPostsRecents";
import Commentaires from "./commentaires/senewebCommentaires";

class PageDetailsArticle extends Component {
  render() {
    return (
      <div>
        <Article id={this.props.match.params.article_id} />;
        <PostsRecents />
        <Commentaires />
      </div>
    );
  }
}

export default PageDetailsArticle;
