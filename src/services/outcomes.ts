import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Outcome } from '../models/outcome';
import { Visit } from '../models/visit';
enablePromise(true);

export const getOutcomesByVisitId = async (db: SQLiteDatabase, id: number): Promise<Outcome[]> => {
    try {
        const resultArray: Outcome[] = []
        const results = await db.executeSql(`SELECT * FROM outcome WHERE visit_id=${id};`);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                console.log(result.rows.item(index));
                resultArray.push(result.rows.item(index));
            }
        });
        return resultArray;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get outcomes !!!');
    }
};