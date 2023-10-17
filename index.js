const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(express.static("public_html"));

app.use(express.json());

app.get('/api/', (req, res) => {
    res.send("OK");
});


app.post('/api/hex-to-rgb',(req,res)=>{
    const hex = req.body.hex;
    const rgb = hexToRGB(hex);
    res.json({rgb});
});

function hexToRGB(hex){
    if(typeof hex !== 'string' || !hex.match(/^#?[0-9a-fA-F]{3,6}$/)){
        throw new Error('Invalid hex color format. Please use a valid hex color string.');
    }

    hex = hex.replace("#","");

    if (hex.length ===3){
        hex=hex
            .split("")
            .map(char=>char+char)
            .join("");
    }

    const bigint = parseInt(hex,16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return{r,g,b};
}

const PORT = process.env.PORT || 3000;
const HOST = "127.0.0.1";
const server = app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports={
    app,
    server,
    hexToRGB
}