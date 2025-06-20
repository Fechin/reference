const { encodeURL } = require('hexo-util');

hexo.extend.helper.register('share_link', function (type) {
  const title = this.page_title();
  const description = this.page_description();
  const url = this.url_for(this.url);
  let link = '';
  switch (type) {
    case 'facebook':
      link = `https://facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'twitter':
    case 'x':
      link = `https://x.com/intent/tweet/?text=${description}&url=${url}`;
      break;
    case 'linkedin':
      link = `https://www.linkedin.com/shareArticle?url=${url}&title=${title}&summary=${description}`;
      break;
    case 'reddit':
      link = `https://reddit.com/submit/?url=${url}&resubmit=true&title=${description}`;
      break;
    case 'pinterest':
      link = `https://pinterest.com/pin/create/button/?url=${url}&description=${description}`;
      break;
    case 'mail':
      link = `mailto:?subject=${title}&body=\n${description}\n\n${url}`;
      break;
    case 'line':
      link = `https://social-plugins.line.me/lineit/share?url=${url}`;
      break;
  }
  return encodeURL(link);
});
