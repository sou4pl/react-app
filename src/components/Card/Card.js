import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, deleteCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = ({title, id, isFavorite}) => {
    
  const dispatch = useDispatch();
  const handleFavorite = e => {
  e.preventDefault()
  dispatch(toggleCardFavorite(id));
  };

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <div>
      <span onClick={handleFavorite} className={clsx('fa fa-star-o', isFavorite && styles.favorite )} /><span onClick={handleDelete} className="fa fa-trash" />
      </div>
    </li>
  );
};

export default Card;
