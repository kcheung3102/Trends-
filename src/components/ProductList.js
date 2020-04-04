import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import dataLoader from '../dataloader';

const ProductList = () => {

    const getData = dataLoaderObj => {
        return (
        <Grid item xs={12} sm={4}>
            <Card {...dataLoaderObj} />
        </Grid>
        );
    }; 

    return (
        <div>
            <Grid container spacing={4}>
                   {dataLoader.map(dataLoaderObj => getData(dataLoaderObj))}      
            </Grid>
        </div>
    );
};

export default ProductList;