import { Link } from 'react-router-dom';

export const NotesListPage = () => {
  return (
    <ul>
      <li>
        Note 1<Link to="/note/1">Read</Link>
      </li>
      <li>
        Note 2<Link to="/note/2">Read</Link>
      </li>
      <li>
        Note 3<Link to="/note/3">Read</Link>
      </li>
    </ul>
  );
};
