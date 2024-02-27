import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {Skills, queryType} from "../../types";

async function getData({queryString}: queryType): Promise<Skills[]> {
  try {
    const q = query(collection(db, `${queryString}`));

    // Create a Promise to handle the asynchronous operation
    return new Promise((resolve, reject) => {
      const data: Skills[] = [];

      // Subscribe to query snapshots
      const unsubscribe = onSnapshot(
        q,
        (QuerySnapshot) => {
          QuerySnapshot.forEach((doc) => {
            data.push({...doc.data()} as Skills);
          });
          resolve(data);
        },
        (error) => {
          // Reject the Promise if there's an error
          reject(error);
        },
      );
    });
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
}

export default getData;
