import express from "express";
import mongoose from 'mongoose'
import corse from 'cors';
import userRoutes from '../backend/routes/UserRoutes.js'

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("database connect"));
app.use(corse());
app.use(express.json());
app.use(userRoutes);

app.listen(5000, () => console.log('server up and running'))