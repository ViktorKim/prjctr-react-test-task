import { useParams } from 'react-router-dom';

export const NotePage = () => {
  const { id } = useParams();
  return (
    <article>
      <h1>Note Title</h1>
      <div>note: {id}</div>
    </article>
  );
};
