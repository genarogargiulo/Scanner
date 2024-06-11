// Logger.js
import RNFS from 'react-native-fs';

const logFilePath = `${RNFS.DocumentDirectoryPath}/app.log`;

export const log = async (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  try {
    await RNFS.appendFile(logFilePath, logMessage, 'utf8');
    console.log(logMessage); // Opcional: también puedes mostrar los logs en la consola
  } catch (error) {
    console.error('Error writing log:', error);
  }
};

export const readLogs = async () => {
  try {
    const logs = await RNFS.readFile(logFilePath, 'utf8');
    return logs;
  } catch (error) {
    console.error('Error reading log file:', error);
    return '';
  }
};

export const clearLogs = async () => {
  try {
    await RNFS.unlink(logFilePath);
  } catch (error) {
    console.error('Error clearing log file:', error);
  }
};
