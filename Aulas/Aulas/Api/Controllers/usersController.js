const express = require('express');

const router = express.Router();

router.post("/users", async (req, res) => { 

    const data = req.body;

    console.log(data);

    return res.json({
        mensagem: "Usuário cadastrado com sucesso"
    })
});

module.exports = router