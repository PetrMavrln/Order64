import { LeftPanel } from "../../../../components/LeftPanel/LeftPanelComponent";
import { RightPanel } from "../../../../components/RightPanel/RightPanel";
import { ThematicBreak } from "../../../../components/ThematicBreak/ThematicBreak";
import { OrderContacts } from "../OrderContacts/OrderContacts";
import { OrderLinks } from "../OrderLinks/OrderLinks";
import { OrderSystemThesisBlock } from "../OrderSystemThesisBlock/OrderSystemThesisBlock";
import styles from "./styles.module.scss";

export const MainContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LeftPanel />
        <main className={styles.content}>
          <ThematicBreak />
          <OrderLinks />
          <ThematicBreak />
          <OrderSystemThesisBlock />
          <ThematicBreak />
          <OrderContacts />
        </main>
        <RightPanel />
      </div>
    </div>
  );
};
