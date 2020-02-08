import React, { Component } from 'react';
import Column from './column';

class Columns extends Component {
    //This state controlls rows:
    state = {
        columns: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3}]
    };

    render() {
        const { columns } = this.state;
        return ( //<button>Add card</button>
            <React.Fragment>
                {columns.map(column => {
                    return <Column id={column.id}></Column>;
                })}
                
            </React.Fragment>
        );
    }
}

export default Columns;
