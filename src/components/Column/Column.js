import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss'
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import { deleteCardByColumnId } from '../../redux/cardsRedux';
import { deleteColumn } from '../../redux/columnsRedux';

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));
  const dispatch = useDispatch();

  const handleDelete = e => {
    console.log('poszlo')
    e.preventDefault();
    dispatch(deleteCardByColumnId(props.id))
    dispatch(deleteColumn(props.id))
  }
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />{props.title}
      </h2>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
          
        </ul>
        <CardForm columnId={props.id} />
        <span className={styles.trash}><span onClick={handleDelete} className='fa fa-trash trash' /></span>
    </article>
  );
};

export default Column;