import PropTypes from "prop-types";

const DataTable = ({
  headers,
  data,
  onRowClick,
  renderCustomCell,
}) => {
  const keys = headers.map((header) =>
    header.toLowerCase().replace(/\s+/g, "_")
  );

  const getStatusColor = (statut) => {
    const statusColorMap = {
      Payé: "text-green-600",
      "En cours": "text-yellow-600",
      "En attente": "text-blue-600",
      Retard: "text-red-600",
      Terminé: "text-green-800",
      Annulé: "text-gray-500",
    };
    return statusColorMap[statut] || "text-gray-700";
  };

  return (
    <table className="w-full divide-y divide-gray-200">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-3 text-left text-sm font-medium text-textPrimary uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.length === 0 ? (
          <tr>
            <td
              colSpan={headers.length}
              className="text-center py-4 text-gray-500 dark:text-gray-400"
            >
              Aucune donnée disponible
            </td>
          </tr>
        ) : (
          data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b last:border-b-0  ${
                onRowClick ? "cursor-pointer" : ""
              }`}
              onClick={() => onRowClick && onRowClick(item)}
            >
              {keys.map((key, colIndex) => {
                if (renderCustomCell) {
                  const customCell = renderCustomCell(item, key, colIndex);
                  if (customCell) return customCell;
                }
                const value = item[key];
                const isStatus =
                  key.includes("statut") || key.includes("status");

                return (
                  <td
                    key={colIndex}
                    className={`p-4 ${
                      isStatus
                        ? getStatusColor(value)
                        : "text-gray-700"
                    }`}
                  >
                    {isStatus
                      ? value
                      : typeof value === "number"
                      ? new Intl.NumberFormat("fr-FR").format(value)
                      : value}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
  renderCustomCell: PropTypes.func,
};

export default DataTable;
