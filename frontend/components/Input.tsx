import * as React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import type { InputProps } from "@/types/InputProps";

const Input = React.forwardRef<any, InputProps>(
  (props, ref): React.ReactElement => {
    const { label, labelStyle, error, ...inputProps } = props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label && <Text>{label}</Text>}</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          ref={ref}
          {...inputProps}
        />
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
  input: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 9999,
    backgroundColor: "#fff",
    fontSize: 14,
    lineHeight: 14,
  },
});

export default Input;
