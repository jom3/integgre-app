import { useState } from "react";
import { Persona, useTarjetaStore } from "../../stores/tarjeta.store";
import {
  CellChange,
  Column,
  ReactGrid,
  Row,
  TextCell,
} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";

const getColumns = (): Column[] => [
  { columnId: "cliente", width: 150 },
  { columnId: "celular", width: 150 },
  { columnId: "monto", width: 230 },
];

const headerRow: Row = {
  rowId: "header",
  cells: [
    { type: "header", text: "Cliente" },
    { type: "header", text: "Celular" },
    { type: "header", text: "Monto tarjeta Aprobado" },
  ],
};

const getRows = (tabla: Persona[]): Row[] => [
  headerRow,
  ...tabla.map<Row>((table, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: table.nombre, nonEditable: true },
      { type: "text", text: table.telefono, nonEditable: true },
      { type: "number", value: table.monto! },
    ],
  })),
];

const applyChangesToPeople = (
  changes: CellChange<TextCell>[],
  prevPeople: Persona[]
): Persona[] => {
  changes.forEach((change) => {
    const personIndex = change.rowId;
    const fieldName = change.columnId;
    prevPeople[personIndex][fieldName] = +change.newCell.text;
  });
  return [...prevPeople];
};

export const AprobacionesPage = () => {
  const [personas, setPersonas] = useState(
    useTarjetaStore((state) => state.aComputed.tarjetasAprobadas)
  );
  const rows = getRows(personas);
  const columns = getColumns();

  const handleChanges = (changes: CellChange<TextCell>[]) => {
    setPersonas((prevPeople) => applyChangesToPeople(changes, prevPeople));
  };

  return (
    <div className="p-5 bg-dev_02 border-2 border-dev_06 rounded-lg text-blue-500 shadow-lg shadow-dev_06 fixed" id="reactgrid-styles">
      <ReactGrid rows={rows} columns={columns} onCellsChanged={handleChanges} />
    </div>
  );
};
