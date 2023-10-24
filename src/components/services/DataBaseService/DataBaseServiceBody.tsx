import * as React from "react";
import { Rnd } from "react-rnd";

import Table from "../../../helpers/classes/Table";
import TableDesigne from "../../common/TableDesigne";

function DataBaseServiceBody(props: any) {

    return (
        <div className="myCanvas mx-auto max-w-full h-full max-h-full py-6 sm:px-6 lg:px-8 bg-canvas">
            {
                (props.schema.Tables).map((table: Table) => (
                    <Rnd  bounds=".myCanvas" enableResizing={false}>
                        <TableDesigne key={table.Id} table={table} />
                    </Rnd>
                ))
            }
        </div>
    )
}
export default DataBaseServiceBody;