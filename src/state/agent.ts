import { atom, selector } from "recoil";
import { createDb } from "../models/db";
import { getAgentByName } from "../services/agent";

const agent = atom({
    key: 'agent',
    default: {
      name: 'Tizio',
      last_name: 'Caio'
    }
  });

const agentWithId = selector({
    key: 'agentWithId',
    get: async ({get}) => {
      const db = await createDb();
      const myAgent = await getAgentByName(db, get(agent).name, get(agent).last_name);
      return myAgent;
    },
  });