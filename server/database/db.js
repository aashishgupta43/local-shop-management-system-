import mongoose from 'mongoose';

const Connection = async (username, password) => {
   //const URL = `mongodb+srv://<username:<password>@ecommerce-website.wel2pfx.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-website` ;
   //`mongodb://${aashu}:${aashu}@cluster0-shard-00-00.s0dw5.mongodb.net:27017,cluster0-shard-00-01.s0dw5.mongodb.net:27017,cluster0-shard-00-02.s0dw5.mongodb.net:27017/ecommerce-website?ssl=true&replicaSet=atlas-t34crb-shard-0&authSource=admin&retryWrites=true&w=majority`;
//const URL=`mongodb://<username>:<password>@ac-gzpgsg0-shard-00-00.wel2pfx.mongodb.net:27017,ac-gzpgsg0-shard-00-01.wel2pfx.mongodb.net:27017,ac-gzpgsg0-shard-00-02.wel2pfx.mongodb.net:27017/?ssl=true&replicaSet=atlas-a15wvm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-website`;
 //const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ecommerce-website?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
  // const URL = `mongodb://codeforinterview:<12345>@ecommerceweb-shard-00-00.mesln.mongodb.net:27017,ecommerceweb-shard-00-01.mesln.mongodb.net:27017,ecommerceweb-shard-00-02.mesln.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-oldq2r-shard-0&authSource=admin&retryWrites=true&w=majority`;
  //const URL =`mongodb://codeforinterview:<12345>@cluster0-shard-00-00.s0dw5.mongodb.net:27017,cluster0-shard-00-01.s0dw5.mongodb.net:27017,cluster0-shard-00-02.s0dw5.mongodb.net:27017/?ssl=true&replicaSet=atlas-t34crb-shard-0&authSource=admin&retryWrites=true&w=majority` ;
  const URL =`mongodb://aashu2:aashu22@ac-2fwbqls-shard-00-00.peksbfc.mongodb.net:27017,ac-2fwbqls-shard-00-01.peksbfc.mongodb.net:27017,ac-2fwbqls-shard-00-02.peksbfc.mongodb.net:27017/?ssl=true&replicaSet=atlas-yk5wyp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-website`;
  //
  
   try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
