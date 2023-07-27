/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useSubscriptions } from '@hooks/useSubscriptions';

import styles from './User.module.scss';
import { Item } from '@components';
import { SubscriptionItem } from '@features/subscription';

export function User() {
  const { data, isLoading, error } = useSubscriptions();

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridBox}>
        {data &&
          data.map((item: SubscriptionItem, index: number) => (
            <Item key={item.link} info={item} index={index} />
          ))}
      </div>
    </div>
  );
}
