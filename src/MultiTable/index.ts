import type { App } from "vue";
import MultiTable from "./MultiTable.vue";
import type { ColumnConfig, FlatColumn, HeaderRow, IndexColumnConfig, LeafColumn } from "./types"

export function install(app: App) {
  app.component("MultiTable", MultiTable);
}
export type { ColumnConfig, FlatColumn, HeaderRow, IndexColumnConfig, LeafColumn }
export type MultiTableInstance = InstanceType<typeof MultiTable>
export { MultiTable };
