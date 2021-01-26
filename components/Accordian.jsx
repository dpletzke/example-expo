import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";
import { FiPLus, FiMinus } from "react-icons/fi";

import { missionData } from "../fixtures/MissionData";
import { launchData } from "../fixtures/LaunchData";
import { launchSiteData } from "../fixtures/LaunchSiteData";

function Accordian(props) {
  return (
    <div>
      {missionData.map((md) => {
        return <section>{md.mission_name}</section>;
      })}
    </div>
  );
}

export default Accordian;

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#000",
  },
});
