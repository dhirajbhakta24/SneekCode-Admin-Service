const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImpemented.error');

function pingProblemController(req,res){
    return res.json({message : 'ProblemController is up'});
}

function addProblem(req,res){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function getProblem(req,res){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function getProblems(req,res){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function deleteProblem(req,res){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function updateProblem(req,res){
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