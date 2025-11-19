"use client";
import * as motion from "motion/react-client";
import React from "react";

export default function ConsultButtonClient(props) {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{ transform: "scale(1)" }}
      transition={{ duration: 1 }}
      viewport={{ amount: "some" }}
      style={{
        position: "initital",
        width: "fit-content",
        alignSelf: props.align ? props.align : "",
      }}
    >
      Заказать консультацию
    </motion.div>
  );
}
