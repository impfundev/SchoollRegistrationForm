import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import type { DropdownProps } from "@/types/DropdownProps";
import { provinces, regencies } from "@/constants";
import { useRegencieData } from "@/hooks/useRegencieData";

const Dropdown = React.forwardRef<any, DropdownProps>(
  (props, ref): React.ReactElement => {
    const {
      data,
      placeholder,
      label,
      labelStyle,
      error,
      name,
      setValue,
      getValues,
      ...pressableProps
    } = props;
    const [open, isOpen] = React.useState(false);
    const { setRegenciesData } = useRegencieData();

    const handleOpen = () => isOpen(!open);
    const handleSelect = (value: string) => {
      if (name === "provinsi") {
        const provinceCode = provinces.find(
          (data) => data.province === value
        )?.code;

        setRegenciesData(
          regencies.filter((data) => data.province_code === provinceCode)
        );
      }

      setValue(name, value);
      isOpen(false);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label && <Text>{label}</Text>}</Text>
        <Pressable
          style={styles.button}
          ref={ref}
          onPress={handleOpen}
          {...pressableProps}
        >
          <Text>{getValues(name) ? getValues(name) : placeholder}</Text>
          {open ? (
            <AntDesign name="upcircleo" size={24} color="black" />
          ) : (
            <AntDesign name="downcircleo" size={24} color="black" />
          )}
        </Pressable>
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.dropdownContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 14,
              }}
            >
              <Text>{placeholder}</Text>
              <Pressable onPress={handleOpen}>
                <AntDesign name="closecircleo" size={24} color="black" />
              </Pressable>
            </View>
            <FlatList
              data={data}
              keyExtractor={(item, index) => `${item.value}-${index}`}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.option}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text>{item.value}</Text>
                </Pressable>
              )}
            />
          </View>
        </Modal>
        <Text>{error && error.message}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    width: "100%",
  },
  label: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "600",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 9999,
    backgroundColor: "#fff",
    color: "#fff",
    fontSize: 14,
    lineHeight: 14,
  },
  dropdownContainer: {
    width: "100%",
    height: "80%",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
  },
  option: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 9999,
    backgroundColor: "rgba(250,205,205,1)",
    color: "#fff",
    fontSize: 14,
    lineHeight: 14,
  },
});

export default Dropdown;
