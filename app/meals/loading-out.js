// I don't use loading.js instead used Suspense

import classes from './loading.module.css'
export default function MealsLoadingPage(){
    return <p className={classes.loading}>Fetching meals</p>
}