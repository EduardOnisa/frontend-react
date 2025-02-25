import React from "react";
import ListComponent from "./ListComponent";
import { getProfessori } from "../API"; 

const ProfessorsPage = () => <ListComponent title="Professori" fetchFunction={getProfessori} />;

export default ProfessorsPage;
