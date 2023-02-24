import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#010101",
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  titleList: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "#29292e",
    color: "#f1f1f1",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#eba417",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#121214",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTask: {
    backgroundColor: "#29292e",
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  titleTask: {
    color: "#f1f1f1",
    fontSize: 20,
    fontWeight: "bold",
  },
});
