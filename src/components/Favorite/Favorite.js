import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards.length) return (<PageTitle>Add cards to favorite in your list!</PageTitle>)

    return (
      <div>
        <PageTitle>favorite</PageTitle>
        <div className={styles.favorite}>
          <article className={styles.column}>
            <ul className={styles.cards}>
              {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
            </ul>
          </article>
        </div>

      </div>
    );
  };

  export default Favorite;