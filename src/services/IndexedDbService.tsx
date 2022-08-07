import { IDBPDatabase, openDB } from "idb";
import nzsl from "../dictionary/nzsl.json";
import { Database } from "../shared/constants";

export class IndexedDbService {
  private readonly databaseName = Database.Name;
  private db: IDBPDatabase<unknown> | undefined;

  public async createObjectStore(tableNames: string[]) {
    try {
      this.db = await openDB(this.databaseName, 1, {
        upgrade(db) {
          tableNames.forEach(async (tableName) => {
            if (db.objectStoreNames.contains(tableName)) {
              return;
            }
            const idbpObjectStore = db.createObjectStore(tableName, {
              autoIncrement: true,
              keyPath: "id",
            });

            if (tableName === Database.TableSignDictionary) {
              await Promise.all(nzsl.map((sign) => idbpObjectStore.put(sign)));
              idbpObjectStore.createIndex(
                Database.Index.English.Name,
                Database.Index.English.KeyPath
              );
            }
          });
        },
      });
    } catch (error) {
      return false;
    }
  }

  public async getValue(tableName: string, id: number) {
    return this.db?.get(tableName, id);
  }

  public async getAllValues(tableName: string) {
    return this.db?.getAll(tableName);
  }

  public async searchDb(tableName: string, searchTerm: string) {
    let cursor = await this.db
      ?.transaction(tableName)
      .store.index(Database.Index.English.Name)
      .openCursor();
    const matchingResults: object[] = [];
    while (cursor) {
      if (cursor.key.toString().includes(searchTerm)) {
        console.log(cursor.key, cursor.value);
        matchingResults.push(cursor.value);
      }
      cursor = await cursor.continue();
    }
    return matchingResults;
  }

  public async putValue(tableName: string, value: object) {
    return this.db?.put(tableName, value);
  }

  public async putBulkValue(tableName: string, values: object[]) {
    if (!this.db) {
      return;
    }
    const tx = this.db.transaction(tableName, "readwrite");
    await Promise.all(values.map((value) => tx.store.put(value)));
    // tx.done;
    return this.getAllValues(tableName);
  }

  public async deleteValue(tableName: string, id: number) {
    return this.db?.delete(tableName, id);
  }
}
