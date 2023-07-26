import { SearchItem } from '@features/search';
import styles from './Item.module.scss';
import { IconButton } from '@mui/material';
import { StarBorder } from '@mui/icons-material';

type ItemProps = {
  info: SearchItem;
};

export function Item({ info }: ItemProps) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.itemImage} src={info.image} alt="Item Image" />
      <div className={styles.itemTitle}>
        <a href={info.link}>{info.title}</a>
        <p>Price: {info.lprice}</p>
        <IconButton>
          <StarBorder />
        </IconButton>
      </div>
    </div>
  );
}
