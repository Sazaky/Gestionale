import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Visit } from '../models/visit';
enablePromise(true);

export const getVisitsByDoctorId = async (db: SQLiteDatabase, id: number): Promise<Visit[]> => {
    try {
        const resultArray: Visit[] = []
        const results = await db.executeSql(`SELECT * FROM visit WHERE doctor_id=${id};`);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                console.log(result.rows.item(index));
                resultArray.push(result.rows.item(index));
            }
        });
        return resultArray;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get visits !!!');
    }
};