import { Link, useNavigate } from 'react-router-dom';

export const NotesListItem = ({ id }) => {
  const navigate = useNavigate();

  const _onCardClick = (event) => {
    const isCard = !event.target.classList.contains('btn');

    if (isCard) {
      navigate(`/notes/${id}`);
    }
  };

  return (
    <div className="card my-1" onClick={_onCardClick}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>

        <div className="card-text">This is some text within a card body.</div>
        <Link to={`/notes/${id}/edit`} className="btn btn-primary">
          Edit
        </Link>
      </div>
    </div>
  );
};
