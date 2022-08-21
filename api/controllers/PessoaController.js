const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.pessoas.findOne({ 
                where: {
                     id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req,res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.pessoas.create(novaPessoa)
            return res.status(201).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req,res){
        const { id } = req.params
        const dadosPessoa = req.body
        try {
            await database.pessoas.update(dadosPessoa,{
                where:{
                    id: Number(id)
                }
            })
            const pessoaAtualizada = await database.pessoas.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async removePessoa(req,res){
        const { id } = req.params
        try {
            const pessoaRemovida = await database.pessoas.destroy({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json({mensagem:`Pessoa ${id} Removida`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //pessoas/:estudanteId/matricula/:matriculaId
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.matriculas.findOne({ 
                where: {
                     id: Number(matriculaId),
                     estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req,res){
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try{    
            const novaMatriculaCriada = await database.matriculas.create(novaMatricula)
            return res.status(201).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params
        const dadosMatricula = req.body
        try {
            await database.matriculas.update(dadosMatricula,{
                where:{
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.matriculas.findOne({
                where:{
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async removeMatricula(req,res){
        const { matriculaId } = req.params
        try {
            await database.matriculas.destroy({
                where:{
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json({mensagem:`Matricula ${matriculaId} Removida`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController