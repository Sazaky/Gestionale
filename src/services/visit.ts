import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Visit } from '../models/visit';
enablePromise(true);

export const getVisitsByDoctorId = async (db: SQLiteDatabase, id: number): Promise<Visit[]> => {
    try {
        const resultArray: Visit[] = []
        const results = await db.executeSql(`SELECT * FROM visit WHERE doctor_id=${id};`);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                const myItem = result.rows.item(index);
                myItem.date = new Date(Date.parse(myItem.date));
                resultArray.push(myItem);
            }
        });
        return resultArray;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get visits !!!');
    }
};

export const putVisit = async (db: SQLiteDatabase, v: Visit) => {
    const putQuery = `INSERT OR REPLACE INTO visit (doctor_id, agent_id, date, status, note)
        VALUES
        ( ${v.doctor_id}, ${v.agent_id}, '${v.date.toISOString()}', ${v.status}, '${v.note}')
        ;`;
    db.executeSql(putQuery)

    const getQuery = `SELECT id FROM visit
        WHERE
        doctor_id = ${v.doctor_id} AND 
        agent_id = ${v.agent_id} AND 
        date = '${v.date.toISOString()}' AND 
        status = ${v.status};`;

    const results = await db.executeSql(getQuery);

    return results[0].rows.item(0).id;
  };