import { NotesListItem } from './NotesListItem';

export const NotesListPage = () => {
  return (
    <ul className={'list-group'}>
      <NotesListItem id={1} />
      <NotesListItem id={2} />
      <NotesListItem id={3} />
    </ul>
  );
};
