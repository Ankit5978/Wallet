import express from "express"
import { createTransaction, deleteTransactionById, getTransactionByUserId, summaryByUserId } from "../controllers/transactionsController.js"
const router =express.Router()
router.post("/",createTransaction)  

router.get('/:userId',getTransactionByUserId)

router.delete("/:id",deleteTransactionById)

router.get("/summary/:userId",summaryByUserId)

export default router