import React from "react";
import ListComponent from "./ListComponent";
import { getRicercatori } from "../API"; 

const RicercatoriPage = () => <ListComponent title="Ricercatori" fetchFunction={getRicercatori} />;

export default RicercatoriPage;
