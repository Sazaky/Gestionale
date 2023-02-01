import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Outcome } from '../models/outcome';
enablePromise(true);



export const getOutcomesByVisitId = async (db: SQLiteDatabase, id: number): Promise<Outcome[]> => {
    try {
        const resultArray: Outcome[] = []

        let outcomes = `SELECT O.*, P.name AS product_name, P.description AS product_description
            FROM outcome O JOIN product P ON O.product_id == P.id
            AND visit_id=${id};
        );`;

        console.log(outcomes)

        const results = await db.executeSql(outcomes);

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