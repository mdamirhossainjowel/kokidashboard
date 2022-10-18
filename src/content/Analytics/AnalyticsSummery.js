import React from 'react'
import ChartCustomerMap from '../Dashbord/ChartCustomerMap'
import LoyalCustomer from './LoyalCustomer'
import MostFavoritItem from './MostFavoritItem'
import ChartcardRevenue from '../Dashbord/ChartcardRevenue'
import SaleSummery from './SaleSummery'

const AnalyticsSummery = () => {
    return (
        <div>
            <MostFavoritItem/>
            <div className='m-2 lg:flex'>
                <SaleSummery/>
                <LoyalCustomer/>
            </div>
            <div className='m-2 lg:flex'>
                <ChartCustomerMap/>
                <ChartcardRevenue/>
            </div>
        </div>
    )
}

export default AnalyticsSummery