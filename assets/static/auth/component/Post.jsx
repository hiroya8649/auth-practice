import React from 'react';
import Markdown from 'react-markdown';
import breaks from 'remark-breaks';

function Post(props) {
  return (
    <div className="row">
      <Markdown
        {...props}
        plugins={[breaks]}
      />
    </div>
  );
}

export default Post;
