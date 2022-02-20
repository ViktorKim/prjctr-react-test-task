import { useParams } from 'react-router-dom';

export const EditPage = () => {
  const { id } = useParams();

  return (
    <form>
      <textarea name="content" id={id} cols={30} rows={10}>
        Edit Note {id}
      </textarea>
    </form>
  );
};
