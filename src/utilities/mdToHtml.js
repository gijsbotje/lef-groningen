import React from 'react';
import remark from 'remark';
import remarkHTML from 'remark-html'

export default content => {
  const html = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString();

  return html;
};
