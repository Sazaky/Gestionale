import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Agent } from "../models/agent";

export const getAgentByName = async (db: SQLiteDatabase, name: string, last_name: string): Promise<Agent> => {
    try {
        const results = await db.executeSql(`SELECT * FROM agent WHERE name='${name}' AND last_name='${last_name}';`);
        const agent : Agent = results[0].rows.item(0);
        return agent;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get agent !!!');
    }
};