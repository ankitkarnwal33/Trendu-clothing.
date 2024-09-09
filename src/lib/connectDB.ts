import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = { isConnected: 0 };

export default async function connectDB() {
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {}); //Production
    // const db = await mongoose.connect(process.env.MONGO_URI_LOCAL, {}); //Localhost
    if (
      db &&
      db.connections &&
      db.connections[0] &&
      db.connections[0].readyState
    ) {
      connection.isConnected = db.connections[0].readyState;
      console.log("Database has been connected again.");
    }
  } catch (error) {
    console.log("can't connect + ", error);
    process.exit(1);
  }
}
