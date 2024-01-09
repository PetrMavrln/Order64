import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import styles from '../scss/css-modules/assortmentCards.module.css';
import { fetchAssortment } from '../store/reducers/ActionCreators';
import AssortmentCardComponent from './AssortmentCardComponent';
import LoadingComponent from './LoadingComponent';

const AssortmentCardsComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAssortment());
  }, []);

  const { assortment, isLoading } = useAppSelector((state) => state.assortmentReducer);

  //копия массива assortment (через slice) и сортировка по цене:

  const assortmentSorted = assortment.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
  return (
    <div className={styles.cards}>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        assortmentSorted.map?.((card, index) => (
          <AssortmentCardComponent key={card.id} card={card} index={index} />
        ))
      )}
    </div>
  );
};

export default AssortmentCardsComponent;
