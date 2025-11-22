"use server";

import AboutBlockHeading from "@/components/about/heading/AboutBlockHeading";
import * as globalStyles from "../../../styles/app.module.css";
import * as styles from "./detailButtons.module.css";
import ServicePaymentType from "./ServicePaymentType";

const DetailPayments = async () => {
  class Payment {
    constructor(name, stages, desc, advantage) {
      this.name = name;
      this.stages = stages;
      this.desc = desc;
      this.advantage = advantage;
    }
  }
  const payments = [
    new Payment(
      "поэтапная оплата",
      [
        "Работа делится на логические этапы: дизайн, верстка, программирование",
        "После заверешения и утверждения этапа производится оплата",
        "Каждый этап подкрепляется закрывающим актом",
      ],
      "Подходит, если вы хотите контролировать процесс разработки",
      "Преимущества: контроль, гибкость, уверенность на каждом этапе"
    ),
    new Payment(
      "полная предоплата",
      [
        "Вы оплачиваете полную стоимость проекта заранее",
        "В договор включаются сроки по ведению разработки вашего проекта",
        "Вы получаете приоритетное исполнение и сопровождение",
      ],
      "Подходит при ограниченных сроках или фиксированном бюджете",
      "Преимущества: экономия времени, быстрая реализация"
    ),
  ];
  return (
    <div className={[globalStyles.block, styles.paymentsBlock].join(" ")}>
      <AboutBlockHeading text={"способы оплаты"} style={{ marginBottom: 0, alignSelf: "center" }} />
      {payments.map((item, num) => (
        <ServicePaymentType key={num + 1} num={num + 1} {...item} />
      ))}
    </div>
  );
};

export default DetailPayments;
