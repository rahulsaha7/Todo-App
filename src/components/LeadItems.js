import React from 'react'

export const LeadItems = (props) => {
    return (
        <section class="col-3" >
        <section className="item-show-list">
            <div className="d-flex justify-content-between p-3">
                <section>
                    <p>{props.names.name}</p>
                    <p>{props.names.qunatity}</p>
                </section>
                <section>
                    Logo
                </section>
            </div> 
        </section>
    </section>
    )
}
