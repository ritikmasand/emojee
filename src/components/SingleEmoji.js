import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

const SingleEmoji = ({ singleemoji }) => {
  const [isCopied, setcopy] = useState(false);
  useEffect(
    (_) => {
      if (isCopied) {
        setTimeout((_) => {
          setcopy(false);
        }, 1500);
      }
    },
    [isCopied]
  );
  return (
    <CopyToClipboard
      text={singleemoji.description}
      onCopy={() => setcopy(true)}
    >
      <div className={`item ${isCopied ? "copied" : ""}`}>
        <p className="emoji">{isCopied ? "✅" : singleemoji.emoji}</p>
        <p className="emoji">{singleemoji.description}</p>
      </div>
    </CopyToClipboard>
  );
};
export default SingleEmoji;
