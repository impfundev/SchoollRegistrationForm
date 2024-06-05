import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import type { FormRegister } from "@/types/FormRegister";
import { StyleSheet, Pressable, Text } from "react-native";
import { useDb } from "@/hooks/useDb";

const SubmitButton = ({
  handleSubmit,
}: {
  handleSubmit: UseFormHandleSubmit<FormRegister, undefined>;
}) => {
  const { storeToDatabase, loading } = useDb();
  const onSubmit: SubmitHandler<FormRegister> = (data) => {
    if (!data.tipe) alert("Harap pilih tipe sekolah: Negeri/Swasta");
    else if (!data.nama) alert("Harap masukan nama sekolah");
    else if (!data.alamat) alert("Harap masukan alamat sekolah");
    else if (!data.kode_pos) alert("Harap masukan kode pos");
    else if (!data.provinsi) alert("Harap pilih provinsi");
    else if (!data.kota) alert("Harap pilih kota/kabupaten");
    else if (!data.telepon) alert("Harap masukan no telpon sekolah");
    else if (!data.email) alert("Harap masukan email sekolah");
    else if (!data.jumlah_siswa) alert("Harap masukan jumlah siswa");
    else {
      // const res = storeToDatabase(data);
      alert(JSON.stringify(data));
    }
  };

  return (
    <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
      <Text>{loading ? "Submiting..." : "Submit"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 9999,
    backgroundColor: "rgba(250,205,205,1)",
    color: "#fff",
    fontSize: 14,
    lineHeight: 14,
  },
});

export default SubmitButton;
