import styles from '../scss/css-modules/mainContent.module.css';
import LeftPanelComponent from './LeftPanelComponent';
import OrderContactsComponent from './OrderContactsComponent';
import OrderLinksComponent from './OrderLinksComponent';
import OrderSystemThesisBlockComponent from './OrderSystemThesisBlockComponent';
import RightPanelComponent from './RightPanelComponent';
import ThematicBreakComponent from './ThematicBreakComponent';

const MainContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LeftPanelComponent />
        <main className={styles.content}>
          <ThematicBreakComponent />
          <OrderLinksComponent />
          <ThematicBreakComponent />
          <OrderSystemThesisBlockComponent />
          <ThematicBreakComponent />
          <OrderContactsComponent />
        </main>
        <RightPanelComponent />
      </div>
    </div>
  );
};

export default MainContent;
