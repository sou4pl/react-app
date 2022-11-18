import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({title, id, isFavorite}) => {
    
  const dispatch = useDispatch();
  const toggleFavorite = e => {
  e.preventDefault()
  dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card} onClick={toggleFavorite}>{title}<span className={clsx('fa fa-star-o', isFavorite && styles.favorite )} /></li>
                                                                 
  );
};

export default Card;
