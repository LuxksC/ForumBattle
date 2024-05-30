import './styles.css';
import { useState } from "react";

export default function NewTopicForm({submitAction}) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    <section className="form">
      <input
        id="author"
        placeholder="Nome do autor"
        className="input"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        id="title"
        placeholder='Título'
        className="input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        id="image"
        placeholder='Url da imagem'
        className="input"
        value={image_url}
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      <textarea
        id="description"
        placeholder='Descrição'
        className="textarea"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        className="submitButton"
        onClick={() => {
          const topic = {
            author,
            comments: null,
            description,
            image_url,
            likes: 0,
            title
          };
          submitAction(topic)
          setDescription("")
          setAuthor("")
          setImageUrl("")
          setTitle("")
        }}
      >
        Criar tópico
      </button>
    </section>
  )
}