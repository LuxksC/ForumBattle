import { useEffect, useState } from "react";
import TopicsList from "../components/TopicsList";
import baseUrl from "../data/api";
// import topics from "../data/topics";

export default function TopicsMainScreen() {
  const [topics, setTopics] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  function convertData(data) {
    const ids = Object.keys(data);
    let topics = Object.values(data);
    return topics.map((topic, index) => {
      return {
        id: ids[index],
        ...topic,
      };
    });
  }

  useEffect(() => {
    fetch(`${baseUrl}/topics.json`)
      .then(async (resp) => {
        const respTopics = await resp.json();
        let convertedTopics = convertData(respTopics);
        setTopics(convertedTopics);
      })
      .catch((err) => setError(err.message))
      .finally((_) => setLoading(false))
  }, [])
  
  return (
    <section>
      {isLoading && <p>Carregando...</p>}

      {error && <p>{error}</p>}

      {topics && <TopicsList topics={topics} />}
    </section>
  )
}