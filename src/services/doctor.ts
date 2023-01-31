import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Doctor } from '../models/doctor';
enablePromise(true);

export const getDoctors = async (db: SQLiteDatabase): Promise<Doctor[]> => {
    try {
        const resultArray: Doctor[] = []
        const results = await db.executeSql("SELECT * FROM doctor;");

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                resultArray.push(result.rows.item(index));
            }
        });
        return resultArray;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get doctors !!!');
    }
};

export const getDoctorById = async (db: SQLiteDatabase, id: number): Promise<Doctor> => {
    try {
        const results = await db.executeSql(`SELECT * FROM doctor WHERE id=${id};`);
        console.log(results);
        const doctor : Doctor = results[0].rows.item(0);
        return doctor;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get doctors !!!');
    }
};