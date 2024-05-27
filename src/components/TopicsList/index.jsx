import TopicCard from "../TopicCard";

import './styles.css';

export default function TopicsList({topics}) {
  return(
    <section className="listContainer">
      <h1 className="listTitle">Lista de tópicos</h1>
      <div className="topicsGridContainer">
        {topics.map((topic) => ( <TopicCard topic={topic} /> ))}
      </div>
    </section>
  )
}