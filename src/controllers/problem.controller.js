const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImpemented.error');

const{ProblemService} = require('../services');
const{ProblemRepository} = require('../repositories');

const problemService = new ProblemService( new ProblemRepository());

function pingProblemController(req,res){
    return res.json({message : 'ProblemController is up'});
}

async function addProblem(req,res,next){
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfully created a new problem',
            error:{},
            data : newproblem
        })
    } catch (error) { 
        next(error);
    }
}

function getProblem(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function getProblems(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function deleteProblem(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function updateProblem(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    };
}

module.exports ={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController

}