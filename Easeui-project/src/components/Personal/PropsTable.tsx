interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm" style={{ backgroundColor: "var(--bg-color)" }}>
      <table className="w-full">
        <thead className="bg-black/5 dark:bg-white/5">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: "var(--text-color)" }}>Prop</th>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: "var(--text-color)" }}>Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: "var(--text-color)" }}>
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: "var(--text-color)" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-sm font-mono opacity-80" style={{ color: "var(--text-color)" }}>
                {row.type}
              </td>
              <td className="px-4 py-3 text-sm font-mono opacity-60" style={{ color: "var(--text-color)" }}>
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm opacity-90" style={{ color: "var(--text-color)" }}>
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
