export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
<p id="wd-ai-p">
        Wrapping text in <code>{"<p>"}</code> creates vertical spacing because browsers apply default margins to paragraph elements, separating them visually from adjacent content.
      </p>
      <p id="wd-p-your-1">
        I'm Caolan Disini, and throughout this class I hope to be able to gain the confidence to build my own websites.
        I know that I submitted this assignment late due to extenuating circumstances, but I plan on catching up easy enough.
      </p>
      <p id="wd-p-your-2">
        I'm from the Philippines, and have lived there my whole life until I went to the United States for college.
        I did my undergrad at Boston University and worked professionally for 3 years before going to Northeastern University for my master's degree.
      </p>
    </div>
  );
}