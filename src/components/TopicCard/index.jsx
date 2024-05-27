import './styles.css';
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";

export default function TopicCard({ topic }) {
  return(
    <div className="topic">
      <header className="topicHeaderContainer">
        <div className="topicHeaderContainer">
          <div className="authorImg">
            <CgProfile />
          </div>
          <span className="authorName">{topic.author}</span>
        </div>

        <div className="topicHeaderContainer">
          <div className="topicHeaderIconContainer">
            <span className="topicHeaderText">{topic.likes}</span>
            <AiOutlineLike className="topicHeaderIcon"/>
          </div>
          <div className="topicHeaderIconContainer">
            <span className="topicHeaderText">{topic.comments.length}</span>
            <FaRegCommentAlt className="topicHeaderIcon"/>
          </div>
        </div>
      </header>
      <h2 className="topicTitle">{topic.title}</h2>
      <img className="topicImage" src={topic.image}/>
      <p className="topicDescription">{topic.description}</p>
    </div>
  )
}