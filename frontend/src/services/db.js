import { openDB } from 'idb';

const DB_NAME = 'netwise-db';
const DB_VERSION = 1;

export async function getDb() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore('bundles', { keyPath: 'id', autoIncrement: true });
      db.createObjectStore('results', { keyPath: 'id', autoIncrement: true });
      db.createObjectStore('historical', { keyPath: 'id', autoIncrement: true });
    },
  });
}


