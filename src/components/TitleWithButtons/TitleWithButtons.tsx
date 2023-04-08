import React from "react";
import { Button } from "@mantine/core";
import { Center } from "@mantine/core";
import { Text } from "@mantine/core";

interface Props {
  title: string;
  button1Label: string;
  button2Label: string;
  onClickButton1: () => void;
  onClickButton2: () => void;
}

export default function TitleWithButtons(props: Props) {
  const {
    title,
    button1Label,
    button2Label,
    onClickButton1,
    onClickButton2,
  } = props;

  return (
    <Center style={{ height: "100vh" }}>
      <div>
        <Text align="center" weight={700} style={{ marginBottom: "32px" }}>
          {title}
        </Text>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "60px" }}>
          <Button color="red" onClick={onClickButton1}>
            {button1Label}
          </Button>
          <Button color="blue" onClick={onClickButton2}>
            {button2Label}
          </Button>
        </div>
      </div>
    </Center>
  );
}
