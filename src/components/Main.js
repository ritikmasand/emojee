import emojiList from "../EmojiList";
import { useState, useEffect } from "react";
import EmojiContainer from "./EmojiContainer";
const Main = () => {
  const [list, setList] = useState(emojiList);
  const [keyword, setkeyword] = useState("");
  const typed = (e) => {
    const value = e.target.value;
    setkeyword(value);
  };
  //console.log(list);
  useEffect(() => {
    const filterList = emojiList.filter((singleemoji) => {
      // console.log(singleemoji);
      if (singleemoji.emoji === keyword) {
        return true;
      }
      if (singleemoji.description.startsWith(keyword)) {
        return true;
      }
      if (singleemoji.category.startsWith(keyword)) {
        return true;
      }
      if (singleemoji.aliases.some((e) => e.startsWith(keyword))) {
        return true;
      }
      return false;
    });
    setList(filterList);
  }, [keyword]);
  return (
    <main>
      <div className="search">
        <input type="text" placeholder="search 🔎" onKeyUp={typed} />
        {keyword === "" ? false : <h3>Result for -{keyword}</h3>}
      </div>
      <hr />
      {list.length === 0 ? (
        <h3 className="no-result ">No emoji found 😔</h3>
      ) : (
        <EmojiContainer filteredlist={list} />
      )}
    </main>
  );
};
export default Main;
