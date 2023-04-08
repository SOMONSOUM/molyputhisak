import React, { useState } from "react";
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
  const [button1Disabled, setButton1Disabled] = useState(false);

  return (
    <Center style={{ height: "100vh" }}>
      <div>
        <Text align="center" weight={700} style={{ marginBottom: "32px" }}>
          {title}
        </Text>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "60px" }}>
          <Button
            color="red"
            onClick={() => {
              if (!button1Disabled) {
                onClickButton1();
                const button1 = document.getElementById("button-1");
                if (button1) {
                  button1.style.transform = "translateX(-100px)";
                  setTimeout(() => {
                    button1.style.transform = "translateX(0)";
                  }, 500);
                }
              }
            }}
            style={{
              transition: "transform 0.1s ease",
              transform: "translateX(0)",
              pointerEvents: button1Disabled ? "none" : "auto",
            }}
            onMouseEnter={() => {
              setButton1Disabled(true);
              const button1 = document.getElementById("button-1");
              if (button1) {
                button1.style.transform = "translateX(-100px)";
              }
            }}
            onMouseLeave={() => {
              setButton1Disabled(false);
              const button1 = document.getElementById("button-1");
              if (button1) {
                button1.style.transform = "translateX(0)";
              }
            }}
            id="button-1"
          >
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
