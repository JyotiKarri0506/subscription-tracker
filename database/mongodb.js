import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env";

if(!DB_URI){
    throw new Error('please define the MONGODB_URI environment variable inside .env.local');
}