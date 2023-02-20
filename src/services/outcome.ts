import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Outcome, OutcomeFull } from '../models/outcome';
enablePromise(true);

export const getOutcomesByVisitId = async (db: SQLiteDatabase, id: number): Promise<OutcomeFull[]> => {
    try {
        const resultArray: OutcomeFull[] = []

        let outcomes = `SELECT O.*, P.name AS product_name, P.description AS product_description
            FROM outcome O JOIN product P ON O.product_id == P.id
            AND visit_id=${id};
        );`;


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

export const putOutcomesByVisitId = async (db: SQLiteDatabase, outcomes: Outcome[], id: number) => {

    const putQuery = `INSERT INTO outcome (visit_id, product_id, product_info_type )
            VALUES
            ${outcomes.map(function (outcome) {
        return "( '" + id + "', '" + outcome.product_id + "', '" + outcome.product_info_type + "'),"
    }).join("\n").slice(0, -1)}
            ;`;

    return db.executeSql(putQuery);
}