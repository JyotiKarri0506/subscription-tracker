import { config } from 'dotenv';

// .env will extract all our environment  variables 
config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});

// and then export from the below file
//If facing problem with only refering process directly Use globalThis (not common, but works everywhere)

// access the port from env variables and also access the node_env if it exits by default above we set this to development in line 4,  this way we can switch between production and development very easily without overwriting one and another.

export const { PORT, NODE_ENV, DB_URI } =  process.env;  