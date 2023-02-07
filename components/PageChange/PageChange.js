import React from 'react'

function PageChange() {
    return (
        <div className='loaderCon'>
           <div className='spinner'>
           </div>
            Loading...
        </div>
    )
}

export default PageChange

PageChange.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}
