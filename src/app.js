
import e from "express";
import "dotenv/config";
import "./db.js";
import workshop_router from "./routes/workshop_route.js";
import vehicle_router from "./routes/vehicle_route.js";
import maintence_router from "./routes/maintence_route.js";
const app = e();

app.use(e.json());

app.use("/workshop", workshop_router);
app.use("/maintence", maintence_router);
app.use("/vehicle", vehicle_router);

app.listen(process.env.API_PORT, () => console.log("Server running"));