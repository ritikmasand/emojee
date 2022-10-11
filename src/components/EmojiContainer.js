import SingleEmoji from "./SingleEmoji";

const EmojiContainer = ({ filteredlist }) => {
  return (
    <div className="container">
      {filteredlist.map((singleemoji, idx) => {
        return <SingleEmoji key={idx} singleemoji={singleemoji} />;
      })}
    </div>
  );
};
export default EmojiContainer;
