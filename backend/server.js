require('dotenv').config();
const express       = require('express');
const mongoose      = require('mongoose');
const userRoutes    = require('./routes/user');
const projectRoutes = require('./routes/project');
const taskRoutes    = require('./routes/task');
const cors          = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});