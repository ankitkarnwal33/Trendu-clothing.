import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = { isConnected: 0 };

export default async function connectDB(): Promise<void | string> {
  if (connection.isConnected) {
    //Database is already connected.
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {}); //Production
    // const db = await mongoose.connect(process.env.MONGO_URI_LOCAL, {}); //Localhost Dev
    if (db && db.connections && db.connections[0]) {
      //ReadyState => Return whether db is ready (Runnning ) or not
      connection.isConnected = db.connections[0].readyState; //Set the ready state
      // console.log("Database has been connected");
    }
  } catch (error: any) {
    return error.message;
  }
}
