import Form from "@/components/Form";
import SubmitButton from "@/components/SubmitButton";
import { FormRegister } from "@/types/FormRegister";
import { useForm } from "react-hook-form";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  const { handleSubmit, setValue, getValues } = useForm<FormRegister>();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Data Sekolah</Text>
      <Form setValue={setValue} getValues={getValues} />
      <SubmitButton handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: 26,
    paddingBottom: 26,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "600",
    paddingBottom: 8,
  },
});

export default App;
