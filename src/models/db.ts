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
    email varchar(256),
    phone varchar(14),
    mobile varchar(14),
    latitude integer,
    longitude integer
);`;

let seedDoctorTable = `INSERT INTO doctor (name, last_name, specialization, address, postal_code, email, phone, mobile)
VALUES
( "Luciano", "Moggi", "Neuropsichiatra", "Via Mirafiori n. 1, 00123 Torino", "00123", "luciano.moggi@host.it", "066668987", "3396667123"),
( "Pippo", "Inzaghi", "Chirurgo", "Via Giulio Cesare n. 2, 00456, Roma", "pippo.inzaghi@host.it", "00456", "0816668987", "3386667123"),
( "Francesco", "Totti", "Naturopata", "Via Palermo n. 3, 00666, Firenze", "francesco.totti@host.it", "00666", "0865668987", "3346667123")
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
    outcome integer NOT NULL,
    note text
);`;

let seedVisitTable = `INSERT INTO visit (doctor_id, agent_id, date, outcome, note)
VALUES
( 1, 0, '2023-01-01 12:00:00', -1, 'Non mi ha voluto ricevere'),
( 1, 0, '2023-01-02 12:00:00', 1, 'Depliant Aspirina 100, Campione Brufen' ),
( 1, 0, '2023-01-03 12:00:00', 0, 'Era fuori studio' ),
( 1, 0, '2023-01-04 12:00:00', 1, 'Depliant Aspirina e Tachipirina')
;`;

let dropProductTable = 'DROP TABLE IF EXISTS product;';

let createProductTable = `CREATE TABLE IF NOT EXISTS product (
    id integer PRIMARY KEY,
    name varchar(50) NOT NULL,
    description text NOT NULL
);`;

let seedProductTable = `INSERT INTO product (name, description )
VALUES
( 'Aspirina', 'Antinfiammatorio'),
( 'Polase', 'Integratore Multivitaminico'),
( 'Brufen', 'Antinfiammatorio non steroideo'),
( 'Lansoprazolo', 'Inibitore della pompa protonica' ),
( 'Aulin 1000', 'Antinfiammatorio non steroideo'),
( 'Moment Fiale', 'Antinfiammatorio non steroideo' )
;`;

let dropOutcomeTable = 'DROP TABLE IF EXISTS outcome;';

let createOutcomeTable = `CREATE TABLE IF NOT EXISTS outcome (
    id integer PRIMARY KEY,
    visit_id integer,
    product_id integer,
    product_info_type integer,
    note text
);`;

let seedOutcomeTable = `INSERT INTO outcome (visit_id, product_id, product_info_type, note )
VALUES
( 2, 1, 0, ''),
( 2, 3, 1, ''),
( 2, 4, 1, ''),
( 2, 5, 0, ''),
( 2, 6, 1, ''),
( 4, 2, 0, ''),
( 4, 4, 0, '')
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
        await db.executeSql(dropProductTable);
        await db.executeSql(createProductTable);
        await db.executeSql(seedProductTable);
        await db.executeSql(dropOutcomeTable);
        await db.executeSql(createOutcomeTable);
        await db.executeSql(seedOutcomeTable);
    } catch (error) {
        console.error(error);
        throw Error('Failed to create tables.');
    }
};


