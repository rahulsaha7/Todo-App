import React from 'react'

export const showItem = (props) => {
    return (
        <div>
            <section class="col-3" >
                            <section className="item-show-list">
                                <div className="d-flex justify-content-between p-3">
                                    <section>
                                        <p>{props.name}</p>
                                        <p>{props.qunatity}</p>
                                    </section>
                                    <section>
                                        {props.icon}
                                    </section>
                                </div>
                            </section>
                        </section>
        </div>
    )
}
