import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';
enablePromise(true);


export const getDoctors = async (db: SQLiteDatabase): Promise<any[]> => {
    try {
      const resultArray: any[] | PromiseLike<any[]> = []
      const results = await db.executeSql("SELECT * FROM doctor;");

      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          resultArray.push(result.rows.item(index))
        }
      });
      return resultArray;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get doctors !!!');
    }
  };