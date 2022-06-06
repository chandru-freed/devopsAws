import styles from './master-plan.module.scss';
import { Header } from '../header/header';

export interface MasterPlanProps {
  openModal: () => void;
}

export const MasterPlan = ({ openModal }: MasterPlanProps) => {
  return (
    <div id={styles['master-plan']}>
      <div className={`${styles['master-plan-outer']} ${styles['bgclolr']}`}>
        <Header title='Master Plan' />
        <div className={styles['master-plan-wrp']}>
          <div className={styles['master-plan-section']}>
            <div
              className={styles['e-model']}
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://teja12.kuikr.com/is/a/c/655x525/public/plan-images/india/bangalore/Unishire%20Belvedere%20Premia/519c8de946015.gif')",
                height: '350px',
              }}></div>
            <div className={styles['e-model-wrp']}>
              <p className={styles['title']}>MASTER PLAN</p>
              <button type='submit' className={styles['btn btn-exp btn-lg']} title='Master Plan - Unishire Belvedere Premia' onClick={openModal}>
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='clearfix'></div>
    </div>
  );
};
