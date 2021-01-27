import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

import { missionData } from "../fixtures/MissionData";
import { launchData } from "../fixtures/LaunchData";
import { launchSiteData } from "../fixtures/LaunchSiteData";

const AccordianItem = (props) => {
  return <section>{props.children}</section>;
};

const Container = (props) => {
  return <div>{props.children}</div>;
};

const Wrap = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 30px 5px 30px",
        border: "2px solid black",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

const Accordian = (props) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, []);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FF89", size: "25px" }}>
      <AccordianItem>
        <Container>
          {missionData.map((md, index) => {
            return (
              <>
                <Wrap
                  onClick={() => {
                    toggle(index);
                  }}
                  key={index}
                  styles={styles.wrap}
                >
                  <h1>{md.mission_name}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index && <p>{md.payload_ids}</p>}
              </>
            );
          })}
        </Container>
      </AccordianItem>
    </IconContext.Provider>
  );
};

export default Accordian;

const styles = StyleSheet.create({});
