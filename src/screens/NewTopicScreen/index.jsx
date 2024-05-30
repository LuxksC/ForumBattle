import { useEffect, useState } from "react";
import baseUrl from "../../data/api";
import NewTopicForm from "../../components/NewTopicForm";

import './styles.css';

export default function NewTopicScreen() {
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  var addNewTopic = (topic) => {
    console.log("Enter in fetch function")
    console.log(topic)
    setLoading(true)
    fetch(`${baseUrl}/topics.json`, {
      method: "post",
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(topic),
    })
      .then(_ => setMessage("Tópico cirado com sucesso!"))
      .catch((error) => setMessage(error.message))
      .finally(setLoading(false));
  }

  return (
    <>
      <h1 className="listTitle">Novo Tópico</h1>
      <section>
        {isLoading && <p>Carregando...</p>}
        {message && <p>{message}</p>}
      </section>
      <NewTopicForm submitAction={addNewTopic}/>
    </>
  )
}