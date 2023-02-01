import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
enablePromise(true);

let dropDoctorTable = 'DROP TABLE IF EXISTS doctor;'

let createDoctorTable = `CREATE TABLE IF NOT EXISTS doctor (
    id integer PRIMARY KEY,
    name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    specialization varchar(50) NOT NULL,
    address varchar(256) NOT NULL,
    postal_code char(5) NOT NULL,
    phone varchar(14),
    mobile varchar(14),
    latitude integer,
    longitude integer
);`;

let seedDoctorTable = `INSERT INTO doctor (name, last_name, specialization, address, postal_code, phone, mobile)
VALUES
( "Luciano", "Moggi", "Neuropsichiatra", "Via Mirafiori n. 1, 00123 Torino", "00123", "066668987", "3396667123"),
( "Pippo", "Inzaghi", "Chirurgo", "Via Giulio Cesare n. 2, 00456, Roma", "00456", "0816668987", "3386667123"),
( "Francesco", "Totti", "Naturopata", "Via Palermo n. 3, 00666, Firenze", "00666", "0865668987", "3346667123")
;`;

let dropAgentTable = 'DROP TABLE IF EXISTS agent;';

let createAgentTable = `CREATE TABLE IF NOT EXISTS agent (
    id integer PRIMARY KEY,
    name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL
);`; 

let seedAgentTable = `INSERT INTO agent (name, last_name)
VALUES
( "Dario", "Serio")
;`;

let dropVisitTable = 'DROP TABLE IF EXISTS visit;';

let createVisitTable = `CREATE TABLE IF NOT EXISTS visit (
    id integer PRIMARY KEY,
    doctor_id integer NOT NULL,
    agent_id integer NOT NULL,
    date datetime NOT NULL,
    outcome integer NOT NULL
);`;

let seedVisitTable = `INSERT INTO visit (doctor_id, agent_id, date, outcome)
VALUES
( 1, 0, '2023-01-01 12:00:00', -1),
( 1, 0, '2023-01-02 12:00:00', 1 ),
( 1, 0, '2023-01-03 12:00:00', 0 ),
( 1, 0, '2023-01-04 12:00:00', 1)
;`;

export const createDb = async () => {
    return openDatabase({ name: 'medicalsales.db', location: 'default' }, () => {}, err => console.log(err));
}

export const createTables = async (db: SQLiteDatabase) => {
    try {
        await db.executeSql(dropDoctorTable);
        await db.executeSql(createDoctorTable);
        await db.executeSql(seedDoctorTable);
        await db.executeSql(dropAgentTable);
        await db.executeSql(createAgentTable);
        await db.executeSql(seedAgentTable);
        await db.executeSql(dropVisitTable);
        await db.executeSql(createVisitTable);
        await db.executeSql(seedVisitTable);
    } catch (error) {
        console.error(error);
        throw Error('Failed to create tables.');
    }
};


