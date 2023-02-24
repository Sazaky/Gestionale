import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Doctor } from '../models/doctor';
import { Visit } from '../models/visit';
enablePromise(true);

export const getDoctors = async (db: SQLiteDatabase): Promise<Doctor[]> => {
    try {
        const resultArray: Doctor[] = []
        const results = await db.executeSql("SELECT * FROM doctor ORDER BY last_visit;");

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                const myItem = result.rows.item(index);
                myItem.last_visit = new Date(Date.parse(myItem.last_visit));
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
        const doctor : Doctor = results[0].rows.item(0);
        return doctor;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get doctors !!!');
    }
};

export const putDoctor = async (db: SQLiteDatabase, d: Doctor) => {
    const putQuery = `INSERT OR REPLACE INTO doctor (name, last_name, specialization, address, postal_code, email, phone, mobile)
        VALUES
        ( '${d.name}', '${d.last_name}', '${d.specialization}', '${d.address}', '${d.postal_code}', '${d.email}', '${d.phone}', '${d.mobile}')
        ;`;
    

    return db.executeSql(putQuery);
  };

  export const updLastVisit = async (db: SQLiteDatabase, v: Visit) => {
    const updQuery = `UPDATE doctor
    SET last_visit = '${v.date.toISOString()}'
    WHERE id = '${v.doctor_id}'
    ;`;

    return db.executeSql(updQuery);
    
  }
