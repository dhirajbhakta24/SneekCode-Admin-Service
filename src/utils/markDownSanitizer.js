const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const turndown = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService =  new TurndownService();
    //1.Convert markdown to html
    const convertedHtml = marked.parse (markdownContent);

    //2.sanitize
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    });
    //3. convert tyhe sanitize html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;

}
module.exports = sanitizeMarkdownContent;