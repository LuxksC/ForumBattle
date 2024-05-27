import TopicsList from "../components/TopicsList";
import topics from "../data/topics";

export default function TopicsMainScreen() {
  return (
    <section>
      <TopicsList topics={topics} />
    </section>
  )
}