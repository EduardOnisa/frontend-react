import React from "react";
import ListComponent from "./ListComponent";
import { getAssociati } from "../API";  

const AssociatiPage = () => <ListComponent title="Associati" fetchFunction={getAssociati} />;
export default AssociatiPage;
