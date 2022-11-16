import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();
  const search = e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCH_PHRASE', payload: {searchPhrase}});
    setSearchPhrase('');
  }

  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..." type="text" value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)}/>
      <Button value={search} >
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;