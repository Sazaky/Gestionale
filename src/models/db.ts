import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
enablePromise(true);


let createDoctorTable = `CREATE TABLE IF NOT EXISTS doctor (
    id integer PRIMARY KEY,
    name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    specialization varchar(50) NOT NULL,
    address varchar(256) NOT NULL,
    postal_code char(5) NOT NULL,
    latitude integer NULL,
    longitude integer NULL
);`;

let seedDoctorTable = `INSERT INTO doctor (name, last_name, specialization, address, postal_code)
VALUES
( "Luciano", "Moggi", "Neuropsichiatra", "Via Mirafiori n. 1, 00123 Torino", "00123"),
( "Pippo", "Inzaghi", "Chirurgo", "Via Giulio Cesare n. 2, 00456, Roma", "00456"),
( "Francesco", "Totti", "Naturopata", "Via Palermo n. 3, 00666, Firenze", "00666")
;`;

export const createDb = async () => {
    return openDatabase({ name: 'medicalsales.db', location: 'default' }, () => console.log("OK"), err => console.log(err));
}

export const createTables = async (db: SQLiteDatabase) => {
    try {
        console.log(createDoctorTable);
        await db.executeSql(createDoctorTable);
        await db.executeSql(seedDoctorTable);
    } catch (error) {
        console.error(error);
        throw Error('Failed to create tables.');
    }
    return db
};


