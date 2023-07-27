/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SearchItem } from '@features/search';
import styles from './Item.module.scss';
import { Button, IconButton } from '@mui/material';
import { Star, StarOutline } from '@mui/icons-material';
import {
  SubscriptionItem,
  addSubscriptionsFn,
  deleteSubscriptionsFn,
} from '@features/subscription';
import { useAuth } from '@providers';
import axios from 'axios';
import { useSubscriptions } from '@hooks/useSubscriptions';
import { useAddSubscriptions } from '@hooks/useAddSubscriptions';
import { useDeleteSubscriptions } from '@hooks/useDeleteSubscriptions';

type ItemProps = {
  info: SearchItem | SubscriptionItem;
  index?: number;
};

export function Item({ info, index }: ItemProps) {
  const { isLoggedIn } = useAuth();
  const { data } = useSubscriptions();
  const isInSubscriptions = (item: SearchItem): boolean => {
    return (
      (data &&
        data?.some(
          (subscription: SubscriptionItem) => subscription.link === item.link
        )) ||
      false
    );
  };
  const { addSubscriptions } = useAddSubscriptions();
  const { deleteSubscriptions } = useDeleteSubscriptions();

  const handleAdd = (e: React.MouseEvent, id: string) => {
    addSubscriptions(id);
  };

  const handleDelete = (e: React.MouseEvent, i: number) => {
    deleteSubscriptions(i);
  };

  if ('id' in info) {
    // Search Item
    return (
      <div className={styles.wrapper}>
        <img className={styles.itemImage} src={info.image} alt="Item Image" />
        <div className={styles.itemTitle}>
          <a href={info.link}>{info.title}</a>
          <p>Price: {info.lprice}</p>
          {isLoggedIn && (
            <div className={styles.iconBox}>
              {isInSubscriptions(info) ? (
                <IconButton color="primary">
                  <Star />
                </IconButton>
              ) : (
                <IconButton
                  onClick={(e) => {
                    if (info.id !== undefined) {
                      handleAdd(e, info.id);
                    }
                  }}
                >
                  <StarOutline />
                </IconButton>
              )}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    // Subscription Item
    return (
      <div className={styles.wrapper}>
        <img className={styles.itemImage} src={info.image} alt="Item Image" />
        <div className={styles.itemTitle}>
          <a href={info.link}>{info.title}</a>
          <p>Price: {info.lprice}</p>
          <div className={styles.iconBox}>
            <Button
              variant="contained"
              size="small"
              onClick={(e) => {
                if (index !== undefined) {
                  handleDelete(e, index);
                }
              }}
            >
              DELETE
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
