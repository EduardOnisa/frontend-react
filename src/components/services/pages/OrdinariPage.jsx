import React from "react";
import ListComponent from "./ListComponent";
import { getOrdinari } from "../API"; 

const OrdinariPage = () => <ListComponent title="Ordinari" fetchFunction={getOrdinari} />;

export default OrdinariPage;
