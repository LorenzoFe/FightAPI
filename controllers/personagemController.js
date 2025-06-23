const db = require('../db');

//Listar todos os personagens
exports.getAll = async(req, res) =>{
    try{
        const[rows] = await db.query('SELECT * FROM personagem');
        res.json(rows);
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

// Buscar personagem por ID

exports.getById = async(req, res) =>{
    try{
        const [rows] = await db.query('SELECT * FROM personagem WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({message : 'Personagem não encontrado'});
        res.json(rows[0]);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

// Criar personagem

exports.create = async(req, res) =>{
    const{name, tipo, especial} = req.body;
    try{
        const[result] = await db.query(
            'INSERT INTO personagem (name, tipo, especial) VALUES (?, ?, ?)', [name, tipo, especial]
        );
        res.status(201).json({id: result.insertId, name, tipo, especial});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

//atualizar personagem

exports.update = async(req, res) =>{
    const { name, tipo, especial } = req.body;
    try{
        const [result] = await db.query(
            'UPDATE personagem SET name = ?, tipo = ?, especial = ? WHERE id = ?', [name, tipo, especial, req.params.id]
        );
        if(result.affectedRows === 0 ) return res.status(404).json({ message:'Personagem não encontrado'});
        res.json({ id: req.params.id, name, tipo, especial});
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

//Deletar personagem

exports.remove = async(req, res) =>{
    try{
        const [result] = await db.query('DELETE FROM personagem WHERE id =?',[req.params.id]);
        if(result.affectedRows === 0) return res.status(404).json({message: 'Personagem não encontrado'});
        res.json({ message: 'Personagem deletado com sucesso'});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
};