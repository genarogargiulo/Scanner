// styles.js
import {StyleSheet} from 'react-native';

const primaryColor = '#1f1f1f';
const secondaryColor = '#282828';
const accentColor = '#ff9800';
const textColor = '#ffffff';
const borderColor = '#444';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: primaryColor,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: textColor,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 8,
    backgroundColor: secondaryColor,
    color: textColor,
  },
  label: {
    width: '100%',
    marginVertical: 8,
    fontSize: 16,
    color: textColor,
  },
  picker: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 8,
    backgroundColor: secondaryColor,
    color: textColor,
  },
  button: {
    backgroundColor: accentColor,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: textColor,
    fontSize: 16,
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: primaryColor,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: textColor,
  },
  settingsButton: {
    alignSelf: 'flex-end',
    backgroundColor: accentColor,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  settingsButtonText: {
    color: textColor,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: borderColor,
    padding: 10,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: secondaryColor,
    color: textColor,
  },
  addButton: {
    backgroundColor: accentColor,
    padding: 12,
    borderRadius: 8,
  },
  whiteText: {
    color: textColor,
  },
  scrollContainer: {
    flex: 1,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  historyText: {
    color: textColor,
  },
  historyDate: {
    color: textColor,
    fontSize: 12,
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: primaryColor,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: textColor,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 8,
    backgroundColor: secondaryColor,
    color: textColor,
  },
  button: {
    backgroundColor: accentColor,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: textColor,
    fontSize: 16,
  },
});
