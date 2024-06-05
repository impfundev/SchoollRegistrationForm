import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { tipeSekolah, provinces } from "@/constants";

import Input from "./Input";
import Dropdown from "./Dropdown";

import type { FormProps } from "@/types/FormProps";
import { useRegencieData } from "@/hooks/useRegencieData";

const Form = ({ setValue, getValues }: FormProps) => {
  const { regencies } = useRegencieData();

  const dataProvinsi = provinces.map((data) => ({ value: data.province }));
  const dataKota = regencies.map((data) => ({ value: data.regency }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Dropdown
          data={tipeSekolah}
          setValue={setValue}
          getValues={getValues}
          name="tipe"
          placeholder="Pilih Tipe"
          label="Tipe Sekolah: *"
        />
        <Input
          name="nama"
          onChangeText={(newText) => setValue("nama", newText)}
          label="Nama Sekolah: *"
          placeholder="Contoh: SMK Negeri 1 Bandung"
        />
        <Input
          name="alamat"
          onChangeText={(newText) => setValue("alamat", newText)}
          label="Alamat: *"
          placeholder="masukan alamat sekolah"
        />
        <Input
          textContentType="postalCode"
          keyboardType="numeric"
          name="kode_pos"
          onChangeText={(newText) => setValue("kode_pos", Number(newText))}
          label="Kode Pos: *"
          maxLength={5}
          placeholder="5 digit angka"
        />
        <Dropdown
          data={dataProvinsi}
          setValue={setValue}
          getValues={getValues}
          name="provinsi"
          placeholder="Pilih provinsi"
          label="Provinsi: *"
        />
        <Dropdown
          data={dataKota}
          setValue={setValue}
          getValues={getValues}
          name="kota"
          placeholder="Pilih kota/kabupaten"
          label="Kota/Kabupaten: *"
        />
        <Input
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          name="telepon"
          onChangeText={(newText) => setValue("telepon", newText)}
          label="No Telepon Sekolah: *"
          placeholder="Masukan nomor telepon"
        />
        <Input
          textContentType="emailAddress"
          keyboardType="email-address"
          name="email"
          onChangeText={(newText) => setValue("email", newText)}
          label="Email Sekolah: *"
          placeholder="Masukan email"
        />
        <Input
          name="facebook"
          onChangeText={(newText) => setValue("facebook", newText)}
          label="Facebook"
          placeholder="(opsional)"
        />
        <Input
          keyboardType="numeric"
          name="jumlah_siswa"
          onChangeText={(newText) => setValue("jumlah_siswa", Number(newText))}
          label="Jumlah Siswa: *"
          placeholder="Masukan jumlah siswa"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "auto",
    width: "100%",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(250,205,205,1)",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
});

export default Form;
