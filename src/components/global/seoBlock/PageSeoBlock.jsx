"use server";
import { loadSeoBlock } from "../../../services/loadSeoBlock.service";
import * as styles from "./pageSeo.module.css";
import SeoItem from "./SeoItem";
import WhyUsElem from "./WhyUsElem";
import ConsultButton from "../../buttons/consult/ConsultButton";

const PageSeoBlock = async ({ page }) => {
  const data = await loadSeoBlock(page);
  if (!data) {
    return <></>;
  }
  let items = [];
  for (let i = 0; i < data.headers.length; i++) {
    items.push({
      id: i + 1,
      header: data.headers[i],
      text: data.descriptions[i],
    });
  }
  return (
    <>
      <div className={styles.block}>
        <SeoItem header={items[0].header} text={items[0].text} id={0} />
        <WhyUsElem />
        {items.slice(1).map((item) => (
          <SeoItem header={item.header} text={item.text} key={item.id} />
        ))}
      </div>
      <ConsultButton
        align={"center"}
        style={{ marginBottom: "20svh", scale: 0.9 }}
      />
    </>
  );
};

export default PageSeoBlock;
