import { enablePromise, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Drug, DrugLight } from '../models/drug';
import { Outcome } from '../models/outcome';
enablePromise(true);



export const getDrugs = async (db: SQLiteDatabase): Promise<Drug[]> => {
    try {
        const resultArray: Drug[] = []

        let drugs = 'SELECT * FROM product;';

        const results = await db.executeSql(drugs);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                resultArray.push(result.rows.item(index));
            }
        });
        return resultArray;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get drugs !!!');
    }
};

export const getDrugsLight = async (db: SQLiteDatabase): Promise<DrugLight[]> => {
    try {
        const resultArray: DrugLight[] = []

        let drugs = 'SELECT product.name, product.id FROM product;';

        const results = await db.executeSql(drugs);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                console.log(result.rows.item(index));
                resultArray.push(result.rows.item(index));
            }
        });
        return resultArray;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get drugs !!!');
    }
};

export const putDrug = async (db: SQLiteDatabase, d: Drug) => {
    const putQuery = `INSERT OR REPLACE INTO product (name, description)
        VALUES
        ( '${d.name}', '${d.description}')
        ;`;
    
    return db.executeSql(putQuery);
  };