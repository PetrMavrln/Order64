import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import LeftPanelComponent from "../components/LeftPanelComponent";
import OrdersImageComponent from "../components/OrdersImageComponent";
import RightPanelComponent from "../components/RightPanelComponent";
import ThematicBreakComponent from "../components/ThematicBreakComponent";
import styles from "../scss/scss-modules/ordersPage.module.scss";
// import { useAppDispatch, useAppSelector } from '../hooks/redux';
// import { fetchOrderPageImgs } from '../store/reducers/ActionCreators';

const Orders = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchOrderPageImgs());
  // }, []);

  // const { orderPageImgs, isLoading } = useAppSelector((state) => state.orderPageImgsReducer);

  const orderPageImgs = [
    {
      id: 0,
      alt: "Триадная структура ордера",
      img: "1_.jpg",
    },
    {
      id: 1,
      alt: "Римские ордеры",
      img: "2.1.png",
    },
    {
      id: 2,
      alt: "Римские ордеры",
      img: "2.2.jpg",
    },
    {
      id: 3,
      alt: "Римские ордеры",
      img: "2.3.png",
    },
    {
      id: 4,
      alt: "Разница между колоннами",
      img: "3.png",
    },
    {
      id: 5,
      alt: "Римские ордеры",
      img: "2.jpg",
    },
  ];

  const image4 = require(`../assets/orders/${orderPageImgs[4].img}`);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Архитектурные ордера и их различие</title>
          <meta
            name="keywords"
            content="ордер, барокко, рококо, модерн, классика, коринфский, дорический, ионический, композитный, восточный"
          />
          <meta name="description" content="Архитектурные ордера и их различие" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <main className={styles.content}>
              <ThematicBreakComponent />
              <div className={styles.notion}>
                <div>Антаблемент моделируется индивидуально.</div>
              </div>
              <ThematicBreakComponent />
              <div className={styles.main}>
                <h2 className={styles.header}>
                  Архитектурный ордер - порядок связей архитектурных элементов.
                </h2>
                <div>
                  В традиционном понимании архитектурный ордер имеет триадную структуру: все его
                  части, большие и малые, делятся на три:
                </div>
                <ol>
                  <li>постамент (стереобат)</li>
                  <li>несущая часть (колонна)</li>
                  <li>несомая (антаблемент).</li>
                </ol>
                <div>Колонна делится на следующие три части:</div>
                <ol>
                  <li>база</li>
                  <li>фуст</li>
                  <li>капитель</li>
                </ol>
                <div>Антаблемент также делится на три части (снизу вверх):</div>
                <ol>
                  <li>архитрав</li>
                  <li>фриз</li>
                  <li>карниз</li>
                </ol>
                <div>База имеет плинт, торус (вал), трохилус (выкружка).</div>
                <OrdersImageComponent img={orderPageImgs[0]} />
              </div>
              <ThematicBreakComponent />
              <div className={styles.main}>
                <h2 className={styles.header}>Ордерные системы</h2>
                <h2>Греческие ордеры</h2>
                <ol>
                  <li>Греческий дорический ордер</li>
                  <li>Греческий ионический ордер</li>
                  <li>Малоазийский ионический ордер</li>
                  <li>Аттический ионический ордер</li>
                  <li>Греческий коринфский ордер</li>
                </ol>
                <div>
                  Основные греческие ордеры — дорический и ионический — появились уже в первых
                  известных науке полностью каменных сооружениях в первой половине VI века до н. э.
                  Третий ордер — коринфский — появился значительно позже. Греческие ордера состоят
                  из трёх главных частей:
                </div>
                <br />
                <div>
                  Стереобат — как правило ступенчатое основание, покоящееся на верхнем ряде кладки
                  фундамента; верхняя ступень стереобата — стилобат (хотя иногда так называют только
                  поверхность ступени, на которой покоятся колонны); Колонны — вертикальные опоры,
                  главный несущий элемент конструкции; Антаблемент — верхняя, венчающая, несомая
                  часть конструкции; антаблемент делится на три части: Архитрав, в переводе с
                  греческого — верхняя балка, опирающаяся на колонны и передающая на них всю
                  нагрузку от элементов, расположенных выше; Фриз — средняя часть антаблемента,
                  расположенная между архитравом и карнизом, имеет как правило декоративную
                  нагрузку; Карниз — самая верхняя часть ордера, на которой покоится кровля.
                </div>
                <h2>Римские ордеры</h2>
                <ol>
                  <li>Тосканский ордер</li>
                  <li>Римский дорический ордер</li>
                  <li>Римский ионический ордер</li>
                  <li>
                    Римский коринфский ордер, который делится на две разновидности:
                    <ol className={styles.subOl}>
                      <li>Итало-коринфский ордер</li>
                      <li>Римско-коринфский ордер</li>
                    </ol>
                  </li>
                  <li>Композитный ордер (Модульный)</li>
                </ol>
                <OrdersImageComponent img={orderPageImgs[5]} />
                <div className={styles.imageCont}>
                  <div className={styles.imgWrapper}>
                    <OrdersImageComponent img={orderPageImgs[1]} />
                  </div>
                  <div className={styles.imgWrapper}>
                    <OrdersImageComponent img={orderPageImgs[2]} />
                  </div>
                  <div className={styles.imgWrapper}>
                    <OrdersImageComponent img={orderPageImgs[3]} />
                  </div>
                </div>
              </div>
              <ThematicBreakComponent />
              <div className={styles.main}>
                <h2 className={styles.header}>Элементы классического ордера</h2>
                <div>
                  Все части классического ордера имеют триадную структуру. Так основных частей три:
                  основание (опорная часть), несущая и несомая. Каждая часть также делится на три.
                  Основание на фундамент (цоколь), стереобат, стилобат. Несущая на базу (постамент),
                  фуст колонны и капитель. Венчающая (несомая часть): архитрав, фриз, карниз. И так
                  далее, вплоть до самых мелких деталей. Многие греческие названия частей ордера
                  антропоморфны. Подножие, основание постройки называли: подиум (podes — нога,
                  стопа), или крепидома (krepidoma — основание дома). Возвышающаяся над уровнем
                  земли объемная часть фундамента, обычно имеющая три ступени — стереобат (stereo —
                  прочный, твердый, и baino — ступаю). Верхняя плоскость стереобата — стилобат
                  (stylos — опора, колонна, и baino — ступаю), то есть плоскость, по которой ступают
                  колонны.
                </div>
                <br />
                <div>
                  Выше располагается база, поддерживающая вертикальные опоры — колонны, служащие
                  главным несущим элементом конструкции. Колонны венчает капитель (лат. capitellum —
                  головка), которая в зависимости от типа ордера может состоять из ряда элементов:
                  эхина (круглой «подушки») и абаки (квадратной плиты) в дорическом ордере, волют
                  (завитков) в ионическом, листьев аканта в коринфском. Верхняя, несомая часть
                  конструкции, называемая антаблемент, или «надстолье», разделяется на следующие
                  части:
                </div>
                <ol>
                  <li>
                    архитрав, или эпистиль, — главная балка, которая располагается непосредственно
                    на капители колонны. В ионическом и коринфском ордерах ради зрительной легкости
                    расчленен по горизонтали на три части.
                  </li>
                  <li>
                    фриз — средняя часть антаблемента, расположена между архитравом и карнизом. В
                    дорическом ордере фриз оформлен чередующимися триглифами и метопами, в
                    ионическом и коринфском имеет рельефный декор, в античности дополняемый росписью
                    и позолотой.
                  </li>
                  <li>карниз — верхняя часть антаблемента, над которой располагается кровля.</li>
                </ol>
                <div>В чем разница между колонной с энтазисом и прямой конической колонной?</div>
                <div>
                  Прямая коническая круглая колонна имеет прямую линию между нижним (большим)
                  диаметром и верхним (меньшим) диаметром. Это приводит к непривлекательному виду,
                  поскольку создает иллюзию, что стороны колонны вогнуты (закруглены внутрь).
                  Лучший, более архитектурно правильный способ сужения круглой колонны - придать ей
                  архитектурный вид. Это означает, что нижняя часть (примерно 1/3 высоты вала)
                  прямая, затем она начинает постепенно сужаться. По мере подъема конусность
                  становится круче, придавая боковой стенке небольшой выпуклый изгиб. В результате
                  получается гораздо более красивая установка.
                </div>
                <br />
                <div>
                  Взгляните на следующее сравнение. Как только вы поймете разницу, вы никогда больше
                  не будете смотреть на круглые колонны одинаково! Прямая конусность всегда будет
                  выглядеть “дешево”, в то время как архитектурный энтазис будет выглядеть
                  аутентично и красиво.
                </div>
                <div className={styles.imageContNoInt}>
                  <img src={image4} className={styles.imageNoInt} alt={orderPageImgs[4].alt} />
                </div>
                <br />
              </div>
            </main>
            <RightPanelComponent />
          </div>
        </div>
        <FooterComponent />
      </HelmetProvider>
    </>
  );
};

export default Orders;
