import './styles.css';
import { useState } from "react";

export default function NewTopicForm({submitAction}) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    <section>
      <div>
        <label htmlFor="author">Insira seu nome: </label>
        <input
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="title">Título: </label>
        <input
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="image">Imagem: </label>
        <input
          id="image"
          value={image_url}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição: </label>
        <input
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button
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
        }}
      >
        Criar tópico
      </button>
    </section>
  )
}