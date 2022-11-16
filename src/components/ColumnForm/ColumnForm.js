import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }))
    setTitle('');
    setIcon('');
  }



  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.inputName}> Title: </span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <span className={styles.inputName}> Icon: </span><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
        <Button>Add column</Button>
      </form>
  );
};

export default ColumnForm;