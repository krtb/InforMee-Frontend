import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS & STYLING
import SavedBill from './SavedBill';
import { Table } from 'semantic-ui-react';
import SavedPlaceHolder from '../common/SavedPlaceHolder';


const ConcerningBillsList = (props) => {
    
    const concerningBillsArray = () => {
        return props.concerningBillsList.map((one) => 
            <SavedBill 
                one={one} 
                id={one.id} 
                key={one.bill_number} 
                list="concerning"
                listType={props.concerningBillsList} 
            />
        )
    }

    return (
        <React.Fragment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bill Number</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Chamber</Table.HeaderCell>
                        <Table.HeaderCell>PDF Link</Table.HeaderCell>
                        <Table.HeaderCell>Legislative Day</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        props.concerningBillsList === undefined || props.concerningBillsList.length === 0  ?

                        <SavedPlaceHolder />

                        :
                    
                        concerningBillsArray()
                    
                    }
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

function mapStateToProps(state){
    return { concerningBillsList: state.billsReducer.concerningBillsList }
}

export default connect(mapStateToProps, null)(ConcerningBillsList);
