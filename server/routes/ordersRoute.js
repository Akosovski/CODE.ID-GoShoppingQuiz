import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const route = Router()

route.post('/create',indexCtrl.ordersCtrl.create)

export default route