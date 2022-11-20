const express = require('express');
const app = express();
const port = 4000;


app.get('/', (_, res) => {
    res.status(200).json({ message: 'UNID - Radio y TV' });
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);